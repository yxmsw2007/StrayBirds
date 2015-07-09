---
layout: post
title: AudioRecord和AudioTrack使用实例-Android
comments: true
category: Android
tags: [AudioRecord, AudioTrack]
---

AudioRecord和AudioTrack是Android平台上录制和播放PCM音频数据两个重要类，与MediaRecorder和MediaPlayer类不同，

后者是在前者的基础上新增了部分编解码库，例如：amr、3GP等，如果想对Android的音频进行操纵掌握这两个类的使用至关重要；

具体使用方法可参考以下代码

>	注：在同一个机器上边录边播可能会有啸叫，所以本程序是先将录制的声音放在一个buffer中，录完后再播

##	添加权限

	<uses-permission android:name="android.permission.RECORD_AUDIO"/>
	
##	audio_act.xml

```java

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="fill_parent"
    android:layout_height="fill_parent"
    android:paddingBottom="@dimen/activity_vertical_margin"
    android:paddingLeft="@dimen/activity_horizontal_margin"
    android:paddingRight="@dimen/activity_horizontal_margin"
    android:paddingTop="@dimen/activity_vertical_margin"
    android:orientation="vertical" >

    <Button android:id="@+id/audio_act_record"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:text="Record(Off)"/>
    
    <Button android:id="@+id/audio_act_play"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:text="Play(Off)" />
    
    <Button android:id="@+id/audio_act_read_buffer"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:text="Read buffer" />
    
    <TextView android:id="@+id/audio_act_info"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content" />
    
</LinearLayout>

```

##	IAudioRecCallback

```java

package com.example.audio;

/**
 * @project SampleAndroid.workspace   
 * @class IAudioRecCallback 
 * @description       
 * @author yxmsw2007
 * @version   
 * @email yxmsw2007@gmail.com  
 * @data 2015-7-9 下午10:41:55    
 */
public interface IAudioRecCallback {

	public void read(byte[] data);
	
}

```

##	AudioAct

```java

package com.example.audio;

import java.util.LinkedList;

import com.example.app.R;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.TextView;

/**
 * @project SampleAndroid.workspace   
 * @class AudioAct 
 * @description       
 * @author yxmsw2007
 * @version   
 * @email yxmsw2007@gmail.com  
 * @data 2015-7-7 下午11:48:21    
 */
public class AudioAct extends Activity implements IAudioRecCallback, OnClickListener {

	private static final String TAG = AudioAct.class.getSimpleName();

	private LinkedList<byte[]> mAudioBuffer = new LinkedList<byte[]>();
	
	private AudioPlay mAudioPlay = new AudioPlay();
	
	private AudioRec mAudioRec = new AudioRec(this);
	
	private Button audio_act_record;
	private Button audio_act_play;
	private Button audio_act_read_buffer;
	private TextView audio_act_info;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.audio_act);
		audio_act_record = (Button) findViewById(R.id.audio_act_record);
		audio_act_play = (Button) findViewById(R.id.audio_act_play);
		audio_act_read_buffer = (Button) findViewById(R.id.audio_act_read_buffer);
		audio_act_info = (TextView) findViewById(R.id.audio_act_info);
		
		audio_act_record.setOnClickListener(this);
		audio_act_play.setOnClickListener(this);
		audio_act_read_buffer.setOnClickListener(this);
		
	}

	@Override
	public void read(byte[] data) {
		Log.d(TAG, "" + data.length);
		mAudioBuffer.add(data);
	}
	
	@Override
	public void onClick(View v) {
		switch (v.getId()) {
		case R.id.audio_act_record:
			if (mAudioRec.isRecording()) {
				mAudioRec.stopRecord();
			} else {
				mAudioRec.startRecord();
			}
			break;
		case R.id.audio_act_play:
			if (mAudioPlay.isPlaying()) {
				mAudioPlay.stopPlay();
			} else {
				mAudioPlay.startPlay();
			}
			break;
		case R.id.audio_act_read_buffer:
			if (!mAudioPlay.isPlaying()) {
				mAudioPlay.startPlay();
			}
			readBuffer();
			break;

		default:
			break;
		}
		updateView();
	}
	
	private void updateView() {
		audio_act_record.setText(mAudioRec.isRecording() ? "Record(On)" : "Record(Off)");
		audio_act_play.setText(mAudioPlay.isPlaying() ? "Play(On)" : "Play(Off)");
	}
	
	public void readBuffer() {
		for (int i = 0; i < mAudioBuffer.size(); i++) {
			mAudioPlay.playAudio(mAudioBuffer.remove(0));
		}
	}
	
}

```

##	AudioPlay

```java

package com.example.audio;

import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.AudioRecord;
import android.media.AudioTrack;
import java.util.LinkedList;

/**
 * @project SampleAndroid.workspace   
 * @class AudioPlay 
 * @description       
 * @author yxmsw2007
 * @version   
 * @email yxmsw2007@gmail.com  
 * @data 2015-7-6 下午10:04:49    
 */
public class AudioPlay {
	
	public final static int PCM16_FRAME_SIZE = 320;
	public final static int DELAY_FRAMES = 50 * 10;
	
//	public final static int STREAM_TYPE = AudioManager.STREAM_MUSIC;
	public final static int STREAM_TYPE = AudioManager.STREAM_VOICE_CALL;
	public final static int SAMPLE_RATE_IN_HZ = 8000;
	public final static int CHANNEL_CONFIG = AudioFormat.CHANNEL_OUT_MONO;
	public final static int AUDIO_FORMAT = AudioFormat.ENCODING_PCM_16BIT;
	
	private static final String TAG = AudioPlay.class.getSimpleName();
	private LinkedList<byte[]> mAudioBuffer = new LinkedList<byte[]>();
	private boolean mIsRunning;

	public AudioPlay() {
		mIsRunning = false;
	}

	private class PlayThread extends Thread {
		
		public PlayThread() {
			super("PlayThread");
		}
		
		public void run() {
			android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_URGENT_AUDIO);
			int minBufferSize = android.media.AudioTrack.getMinBufferSize(SAMPLE_RATE_IN_HZ, CHANNEL_CONFIG, AUDIO_FORMAT);
			AudioTrack audioTrack = null;
			// 有极小的概率会初始化失败
			while (mIsRunning
					&& (audioTrack == null 
					|| (audioTrack.getState() != AudioRecord.STATE_INITIALIZED))) {
				if (audioTrack != null) {
					audioTrack.release();
				}
				audioTrack = new AudioTrack(STREAM_TYPE,
						SAMPLE_RATE_IN_HZ, CHANNEL_CONFIG, AUDIO_FORMAT, minBufferSize, AudioTrack.MODE_STREAM);
				yield();
			}
			audioTrack.setStereoVolume(AudioTrack.getMaxVolume(), AudioTrack.getMaxVolume());
			audioTrack.play();
			while (mIsRunning) {
				synchronized (mAudioBuffer) {
					if (!mAudioBuffer.isEmpty()) {
						byte[] data = mAudioBuffer.remove(0);
						audioTrack.write(data, 0, data.length);
					}
				}
			}
			audioTrack.stop();
			audioTrack.release();
		}
	};

	public void startPlay() {
		if (mIsRunning) {
			return;
		}
		mIsRunning = true;
		synchronized (mAudioBuffer) {
			mAudioBuffer.clear();
		}
		PlayThread playThread = new PlayThread();
		playThread.start();
	}

	// 停止播放
	public void stopPlay() {
		mIsRunning = false;
	}

	public void playAudio(byte[] data) {
		if (!mIsRunning) {
			return;
		}
		mAudioBuffer.add(data);
	}
	
	public boolean isPlaying() {
		return mIsRunning;
	}
	
}

```

##	AudioRec <br> 

```java

package com.example.audio;

import android.media.AudioFormat;
import android.media.AudioManager;
import android.media.AudioRecord;
import android.media.MediaRecorder;
import android.util.Log;

import java.util.LinkedList;

/**
 * @project SampleAndroid.workspace   
 * @class AudioRec 
 * @description       
 * @author yxmsw2007
 * @version   
 * @email yxmsw2007@gmail.com  
 * @data 2015-7-6 下午11:10:13    
 */
public class AudioRec {
	
	private static final String TAG = AudioRec.class.getSimpleName();
	
	private final static int PCM16_FRAME_SIZE = 320;

	public final static int STREAM_TYPE = MediaRecorder.AudioSource.MIC;
	public final static int SAMPLE_RATE_IN_HZ = 8000;
	public final static int CHANNEL_CONFIG = AudioFormat.CHANNEL_IN_MONO;
	public final static int AUDIO_FORMAT = AudioFormat.ENCODING_PCM_16BIT;
	
	private boolean mIsRunning;
	private boolean mIsMute;
	
	private IAudioRecCallback mCallback;
	
	public AudioRec(IAudioRecCallback callback) {
		this.mCallback = callback;
	}
	
	public AudioRec() {
		super();
		mIsRunning = false;
		mIsMute = false;
	}

	private class RecordThread extends Thread {

		public RecordThread() {
			super("RecordThread");
		}

		public void run() {
			android.os.Process.setThreadPriority(android.os.Process.THREAD_PRIORITY_URGENT_AUDIO);
			int minBufferSize = android.media.AudioRecord.getMinBufferSize(
					SAMPLE_RATE_IN_HZ, CHANNEL_CONFIG, AUDIO_FORMAT);
			AudioRecord audioRecord = null;
			// 当手机有程序正在使用麦克风时，会初始化失败
			while (mIsRunning
					&& (audioRecord == null 
					|| (audioRecord.getState() != AudioRecord.STATE_INITIALIZED))) {
				if (audioRecord != null) {
					audioRecord.release();
				}
				audioRecord = new AudioRecord(
						STREAM_TYPE, SAMPLE_RATE_IN_HZ,
						CHANNEL_CONFIG, AUDIO_FORMAT, minBufferSize);
				yield();
			}
			audioRecord.startRecording();
			byte[] buffer = new byte[minBufferSize];
			while (mIsRunning) {
				int len = audioRecord.read(buffer, 0, buffer.length);
				if (len > 0 && !mIsMute) {
					byte[] data = new byte[len];
					System.arraycopy(buffer, 0, data, 0, len);
					mCallback.read(data);
				}
			}
			if (audioRecord.getState() == AudioRecord.STATE_INITIALIZED) {
				audioRecord.stop();
				audioRecord.release();
			}
			
		}
	};

	public void startRecord() {
		if (mIsRunning) {
			return;
		}
		mIsRunning = true;
		RecordThread recordThread = new RecordThread();
		recordThread.start();
	}

	// 停止录音
	public void stopRecord() {
		mIsRunning = false;
		mIsMute = false;
	}

	public boolean ismIsMute() {
		return mIsMute;
	}

	public void setmIsMute(boolean mIsMute) {
		this.mIsMute = mIsMute;
	}

	public boolean isRecording() {
		return mIsRunning;
	}
	
}

```

## 源码下载

[SampleAndroid](https://github.com/yxmsw2007/SampleAndroid.git)

## 参考资料



