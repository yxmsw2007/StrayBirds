---
layout: post
title: 云知声语音转文字-Android
comments: true
category: Android
tags: [云知声, 语音文件, 语音转文字, PCM转文字]
---

## 前言

最近在调一个别人的项目，项目中用到了语音转文字功能，其中用的平台就是云知声，

浏览了下云知声的官网[http://www.unisound.com/](http://www.unisound.com/)，

功能上还是比较的全面，对各个平台的支持也比较的到位；就Android平台来说，官方提供的例子完全够用，

具体使用可以参考这个文档[云知声智能语音交互平台-音乐搜索方案 SDK-Android 开发指南](http://dev.hivoice.cn/download_file/USC_DevelGuide_Android_musicSearch.pdf)；

## 问题

由于平台高度封装，就基本功能来说都不会有问题，但一些不是很常用的功能往往会变得很棘手。

就比如我遇到的这个问题，需求是要将已经录完的语音转成文字，云知声提供的SDK却已经将录音和服务器请求进行了封装，

你只需要开始然后就会得到结果，对这种已经录好的语音转换却没有提供很好的支持（起码文档中未提到）；

看了下USCRecognizer类的接口，其中有这么一个方法

	writePcmData(byte[] arg0, int arg1, int arg2)
	
我想这个方法的作用就是想满足我的这种需求，但实际测试发现这方法并不好使（也许我调用的方法有问题，

如果你知道正确的使用方法不妨告知我一下，谢谢！）；再到官网查看了下方案，确实有一个音频转写方案，

但只支持Windows、Linux以及Web平台，并没有提供Android的支持；

为了能在Android平台使用只好选择通过Web的方式是达到音频转写的目的了，

本文讲的也就是Android平台通过Http请求实现音频转写功能，废话不多说直接上代码了！

## uses-permission

```xml

   <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
   <uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>
   <uses-permission android:name="android.permission.CHANGE_NETWORK_STATE"/>
   <uses-permission android:name="android.permission.INTERNET"/>
   <uses-permission android:name="android.permission.RECORD_AUDIO"/>
	
```

## asr_act.xml

```xml

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

    <TextView android:id="@+id/asr_act_info"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:layout_weight="1" />
    
    <Button android:id="@+id/asr_act_recognizer"
        android:layout_width="fill_parent"
        android:layout_height="wrap_content"
        android:text="Hold and speak" />
    
</LinearLayout>

```

## AsrAct

```java

package com.example.usc;

import java.util.ArrayList;

import com.example.app.R;

import android.media.AudioFormat;
import android.media.AudioRecord;
import android.media.MediaRecorder;
import android.os.Bundle;
import android.app.Activity;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.view.View.OnTouchListener;
import android.widget.Button;
import android.widget.TextView;

/**
 * @project SampleAndroid   
 * @class AsrAct 
 * @description       
 * @author yxmsw2007
 * @version   
 * @email yxmsw2007@gmail.com  
 * @data 2015-7-4 下午7:33:23    
 */
public class AsrAct extends Activity implements OnTouchListener{
	
	private static final String TAG = AsrAct.class.getSimpleName();
	
	private static AudioRecord mRecord;  
    // 音频获取源  
    private int audioSource = MediaRecorder.AudioSource.MIC;  
    // 设置音频采样率，44100是目前的标准，但是某些设备仍然支持22050，16000，11025  
    private static int sampleRateInHz = 16000;// 44100;  
    // 设置音频的录制的声道CHANNEL_IN_STEREO为双声道，CHANNEL_CONFIGURATION_MONO为单声道  
    private static int channelConfig = AudioFormat.CHANNEL_CONFIGURATION_MONO;// AudioFormat.CHANNEL_IN_STEREO;  
    // 音频数据格式:PCM 16位每个样本。保证设备支持。PCM 8位每个样本。不一定能得到设备支持。  
    private static int audioFormat = AudioFormat.ENCODING_PCM_16BIT;  
    // 音频大小  
    private int minBufSize;  
    
    private TextView asr_act_info;
    
    private Button asr_act_recognizer;
    
    private boolean isRecording = false;
    
	private AsrClient mAsrClient;
	
	private ArrayList<byte[]> buffers = new ArrayList<byte[]>();
    
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.asr_act);
		
		Log.d(TAG, "-- onCreate() --");
		
		asr_act_info = (TextView) findViewById(R.id.asr_act_info);
		
		asr_act_recognizer = (Button) findViewById(R.id.asr_act_recognizer);
		
		asr_act_recognizer.setOnTouchListener(this);
		
		minBufSize = AudioRecord.getMinBufferSize(sampleRateInHz, channelConfig, audioFormat);
		
		mRecord = new AudioRecord(audioSource, sampleRateInHz, channelConfig, audioFormat, minBufSize);
		
		mAsrClient = new AsrClient();
		mAsrClient.setmSampleRate(sampleRateInHz);
		mAsrClient.setmAudioFormat(audioFormat == AudioFormat.ENCODING_PCM_16BIT ? 16 : 8);
	}

	@Override
	public boolean onTouch(View v, MotionEvent event) {
		switch (v.getId()) {
		case R.id.asr_act_recognizer:
			Log.d(TAG, "-- onTouch() -- id: " + v.getId() + ", action: " + event.getAction());
			if(event.getAction() == MotionEvent.ACTION_DOWN){
				asr_act_recognizer.setText("recording");
				isRecording = true;
				startRecognizer();
			} else if(event.getAction() == MotionEvent.ACTION_UP){
				asr_act_recognizer.setText("Hold and speak");
				isRecording = false;
			}
			break;

		default:
			break;
		}
		
		return false;
	}
	
	private void updateView(String result) {
		asr_act_info.setText(result == null ? "Parse failed!" : result);
	}
	
	private void startRecognizer() {  
		new Thread(new Runnable(){

			@Override
			public void run() {
				// TODO Auto-generated method stub
				Log.d(TAG, "-- startRecognizer() --");
				mRecord.startRecording();
				buffers.clear();
		        // new一个byte数组用来存一些字节数据，大小为缓冲区大小  
		        byte[] audiodata = new byte[minBufSize];  
		        int readsize = 0;  
		        while (isRecording == true) {  
		            readsize = mRecord.read(audiodata, 0, minBufSize);  
		            Log.i("采集大小", String.valueOf(readsize));  
		            if (AudioRecord.ERROR_INVALID_OPERATION != readsize) { 
		            	byte[] data = new byte[readsize];
		            	System.arraycopy(audiodata, 0, data, 0, readsize);
		            	buffers.add(data);
		            }  
		        }  
		        final String result = mAsrClient.parseAudio(buffers);
				if(result != null) {
					System.out.println("识别结果:\n" + result);
				}
				runOnUiThread(new Runnable() {
					
					@Override
					public void run() {
						updateView(result);
					}
				});
			}
			
		}).start();
    }  
	
}

```

## Config

```java

/**
 * Config.java [V 1.0.0]
 * classes : cn.yunzhisheng.prodemo.Config
 * liujunjie Create  at 2015-1-9  ??4:30:32
 */
package com.example.usc;

/**
 * @project SampleAndroid   
 * @class Config 
 * @description       
 * @author yxmsw2007
 * @version   
 * @email yxmsw2007@gmail.com  
 * @data 2015-7-4 下午10:04:55    
 */
public class Config {
	
	public static final String URL = "http://api.hivoice.cn/USCService/WebApi";
	
	/**
	 * 云知声开放平台网站上开发者的用户名
	 */
	public static final String USER_ID = "YZS1435890548092";
	
	/**
	 * 云知声开放平台网站上申请应用后获得的 appKey
	 */
	public static final String APP_KEY = "re75bz2b7qu3gd7lupkpw6uonnsejr7t5ueresyv";

	/**
	 * 标记请求来源的标识，如用户所设备序列号 (SN)，IMEI，MAC地址等
	 */
	public static final String DEVICE_ID = "IMEI1234567890";
	
	public static final int SAMPLE_RATE = 16000;
	
	public static final int AUDIO_FORMATE = 16;
	
	public static final String LANGUAGE = "zh_CN";
	
	public static final String CHARSET = "utf-8";
	
	/**
	 * "general", "poi", "song", "movietv", "medical"
	 */
	public static final String ENGINE = "general";

}

```

## AsrClient

```java

package com.example.usc;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;

import android.util.Log;

/**
 * @project SampleAndroid   
 * @class AsrClient 
 * @description       
 * @author yxmsw2007
 * @version   
 * @email yxmsw2007@gmail.com  
 * @data 2015-7-4 下午10:05:39    
 */
public class AsrClient {
	
	private static final String TAG = AsrClient.class.getSimpleName();

	private String mWebApiUrl;
	
	/**
	 * 云知声开放平台网站上开发者的用户名
	 */
	private String mUserId;
	
	/**
	 * 云知声开放平台网站上申请应用后获得的 appKey
	 */
	private String mAppKey;
	
	/**
	 * 标记请求来源的标识，如用户所设备序列号 (SN)，IMEI，MAC地址等
	 */
	private String mDeviceId;
	
	private int mAudioFormat; 

	private int mSampleRate; 
	
	private String mLanguage; 
	
	private String mCharset; 

	/**
	 * "general", "poi", "song", "movietv", "medical"
	 */
	private String mEngine; 

	public AsrClient() {
		this.mWebApiUrl = Config.URL;
		this.mUserId = Config.USER_ID;
		this.mAppKey = Config.APP_KEY;
		this.mDeviceId = Config.DEVICE_ID;
		this.mAudioFormat = Config.AUDIO_FORMATE;
		this.mSampleRate = Config.SAMPLE_RATE;
		this.mLanguage = Config.LANGUAGE;
		this.mCharset = Config.CHARSET;
		this.mEngine = Config.ENGINE;
	}

	public String getmWebApiUrl() {
		return mWebApiUrl;
	}

	public void setmWebApiUrl(String mWebApiUrl) {
		this.mWebApiUrl = mWebApiUrl;
	}

	public String getmUserId() {
		return mUserId;
	}

	public void setmUserId(String mUserId) {
		this.mUserId = mUserId;
	}

	public String getmAppKey() {
		return mAppKey;
	}

	public void setmAppKey(String mAppKey) {
		this.mAppKey = mAppKey;
	}

	public String getmDeviceId() {
		return mDeviceId;
	}

	public void setmDeviceId(String mDeviceId) {
		this.mDeviceId = mDeviceId;
	}

	public int getmAudioFormat() {
		return mAudioFormat;
	}

	public void setmAudioFormat(int mAudioFormat) {
		this.mAudioFormat = mAudioFormat;
	}

	public int getmSampleRate() {
		return mSampleRate;
	}

	public void setmSampleRate(int mSampleRate) {
		this.mSampleRate = mSampleRate;
	}

	public String getmLanguage() {
		return mLanguage;
	}

	public void setmLanguage(String mLanguage) {
		this.mLanguage = mLanguage;
	}

	public String getmCharset() {
		return mCharset;
	}

	public void setmCharset(String mCharset) {
		this.mCharset = mCharset;
	}

	public String getmEngine() {
		return mEngine;
	}

	public void setmEngine(String mEngine) {
		this.mEngine = mEngine;
	}

	public String parseAudio(ArrayList<byte[]> buffers) {
		int length = 0;
		for (int i = 0; i < buffers.size(); i++) {
			length += buffers.get(i).length;
		}
		return parseAudio(buffers, length);
	}
	
	public String parseAudio(ArrayList<byte[]> buffers, int length) {
		byte[] data = new byte[length];
		int off = 0;
		for (int i = 0; i < buffers.size(); i++) {
			byte[] buffer = buffers.get(i);
			int len = buffer.length;
			if (off + len <= length) {
				System.arraycopy(buffer, 0, data, off, len);
				off += len;
			}
		}
		return parseAudio(data);
	}
	
	public String parseAudio(byte[] buffer) {
		HttpURLConnection conn = null;
		FileInputStream inputStream = null;
		try {
			URL url = new URL(this.mWebApiUrl + "?appkey=" + this.mAppKey
					+ "&userid=" + this.mUserId + "&id=" + this.mDeviceId);
			conn = (HttpURLConnection) url.openConnection();
			// 上传的语音数据流格式
			conn.setRequestProperty("Content-Type", "audio/x-wav;codec=pcm;bit=" + this.mAudioFormat + ";rate=" + this.mSampleRate);
			// 识别结果返回的格式
			conn.setRequestProperty("Accept", "text/plain");
			// 语音数据流记录的语种及识别结果的语种
			conn.setRequestProperty("Accept-Language", this.mLanguage);
			// 编码格式
			conn.setRequestProperty("Accept-Charset", this.mCharset);
			// 指定ASR识别的引擎
			conn.setRequestProperty("Accept-Topic", this.mEngine);

			conn.setRequestMethod("POST");
			conn.setDoInput(true);
			conn.setDoOutput(true);
			OutputStream out = conn.getOutputStream();

			// 上传语音数据
			out.write(buffer);
			out.flush();
			out.close();

			// 获取结果
			if (conn.getResponseCode() == HttpURLConnection.HTTP_OK) {
				BufferedReader resultReader = new BufferedReader(
						new InputStreamReader(conn.getInputStream(), this.mCharset));
				String line = "";
				String result = "";
				while ((line = resultReader.readLine()) != null) {
					result += line;
				}
				resultReader.close();
				return result;
			} else {
				Log.w(TAG, "Parse failed!  ResponseCode = " + conn.getResponseCode());
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (conn != null) {
				conn.disconnect();
			}
			if (inputStream != null) {
				try {
					inputStream.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return null;
	}

}

```

## 源码下载

[SampleAndroid](https://github.com/yxmsw2007/SampleAndroid.git)

## 参考资料



