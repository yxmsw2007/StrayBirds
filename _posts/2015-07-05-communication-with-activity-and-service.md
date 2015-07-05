---
layout: post
title: Activity与Service通信-Android
comments: true
category: Android
tags: [Activity与Service通信, Service, 广播通信, 接口通信]
---

在开发Android过程中，常常遇到Activity与Service之间的通信，我们都知道在Activity或Service启动的时候我们可以传递一个Intent对象进去已达到传参数的目的，当然如果Activity或Service已经启动还想通过这种方式传值也是可以的。但是如果我们想给某个函数直接传参，这种方式就不是很方便了，那有没有更简单直接的方法呢？答案是肯定的。 下面我就介绍实现Service与Activity之间的通信的两种方式。

##	通过broadcast(广播)的形式

这种方式比较简单发送者只需将数据附加到Intent中然后发出一个广播即可，接收者则需要添加一个广播接收器，这种方式很好地解决了一对多的消息传递问题，同样他也会带来其他的不便，那就是系统中到处都是广播，而且如果你不对广播进行权限设置任何人都可以收到，可能导致信息泄露。

###	发送者

```java

Intent intent = new Intent(CommService.ACTION_FROME_ACT);
intent.putExtra("message", "我来自发送者");
sendBroadcast(intent);

```

###	接收者

广播接收器

```java

private BroadcastReceiver mReceiver = new BroadcastReceiver() {
		
	@Override
	public void onReceive(Context context, Intent intent) {
		String action = intent.getAction();
		Log.i(TAG, "-- onReceive() -- " + intent.toString());
		if (action.equals(ACTION_FROME_ACT)) {
			String msg = intent.getStringExtra("message");
			Log.i(TAG, msg);
		}
	}
};

```

注册广播

```java

IntentFilter filter = new IntentFilter();
filter.addAction(ACTION_FROME_ACT);
registerReceiver(mReceiver, filter);

```

##	通过Binder对象（即接口回调方式）

这种方式是先与服务进行绑定，绑定后彼此都可以获取到对方的对象，从而达到直接调用的目的。

这种方式目标性明确而且不存在信息泄露隐患，但实现稍微复杂些。

###	新建INotifiable接口

此接口可以让服务向多个Activity发送同一个消息变得更简单。内容如下

```java

package com.example.service.comm;

/**
 * @project SampleAndroid   
 * @class INotifiable 
 * @description       
 * @author yxmsw2007
 * @version   
 * @email yxmsw2007@gmail.com  
 * @data 2015-7-5 上午10:10:24    
 */
public interface INotifiable {
	
	public void notifyServiceEvent(String msg);

}

```

###	Activity

Activity需要实现INotifiable接口、完成与服务的绑定并获取到Service对象，如果存在多个Activity同时绑定一个Service时，

建议不要用Activity的上下文（context）来绑定服务，而是通过getApplicationContext来绑定，

这样Service的生命周期就可以跟随程序了。Activity代码如下

```java

package com.example.service.comm;

import com.example.app.R;
import com.example.service.comm.CommService.LocalBinder;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;
import android.widget.CompoundButton.OnCheckedChangeListener;
import android.widget.CheckBox;
import android.widget.CompoundButton;
import android.widget.EditText;
import android.widget.TextView;

/**
 * @project SampleAndroid   
 * @class CommAct 
 * @description       
 * @author yxmsw2007
 * @version   
 * @email yxmsw2007@gmail.com  
 * @data 2015-7-1 下午11:31:30    
 */
public class CommAct extends Activity implements ServiceConnection, INotifiable, OnClickListener, OnCheckedChangeListener {

	private static final String TAG = CommAct.class.getSimpleName();
	
	private CommService mService;
	
	private CheckBox comm_act_broadcast;
	private Button comm_act_send;
	private TextView comm_act_show_info;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		setTitle(CommService.class.getSimpleName());
		super.onCreate(savedInstanceState);
		setContentView(R.layout.comm_act);
		
		comm_act_broadcast = (CheckBox) findViewById(R.id.comm_act_broadcast);
		comm_act_send = (Button) findViewById(R.id.comm_act_send);
		comm_act_show_info = (TextView) findViewById(R.id.comm_act_show_info);
		
		comm_act_broadcast.setOnCheckedChangeListener(this);
		comm_act_send.setOnClickListener(this);
		
		Intent intent = new Intent(this, CommService.class);
		intent.putExtra(CommService.BINDER_ACT_ACTION, this.getClass().getName());
		
		//one service to many activities, use application context to bind 
//		getApplicationContext().bindService(intent, this, BIND_AUTO_CREATE);
		bindService(intent, this, BIND_AUTO_CREATE);
		
	}
	
	@Override
	protected void onDestroy() {
		// TODO Auto-generated method stub
		super.onDestroy();
		unbindService(this);
		unregisterReceiver(mReceiver);
	}
	
	@Override
	public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
		// TODO Auto-generated method stub
		switch (buttonView.getId()) {
		case R.id.comm_act_broadcast:
			if (isChecked) {
				IntentFilter filter = new IntentFilter();
				filter.addAction(CommService.ACTION_FROME_SERVICE);
				registerReceiver(mReceiver, filter);
			} else {
				unregisterReceiver(mReceiver);
			}
			break;

		default:
			break;
		}
	}
	
	@Override
	public void onClick(View v) {
		// TODO Auto-generated method stub
		switch (v.getId()) {
		case R.id.comm_act_send:
			String msg = ((EditText)findViewById(R.id.comm_act_input)).getEditableText().toString();
			if (comm_act_broadcast.isChecked()) {
				Intent intent = new Intent(CommService.ACTION_FROME_ACT);
				msg += "(broadcast)";
				intent.putExtra("message", msg);
				sendBroadcast(intent);
			} else {
				msg += "(interface)";
				mService.recvFromAct(msg);
			}
			break;

		default:
			break;
		}
	}

	@Override
	public void onServiceConnected(ComponentName name, IBinder service) {
		// TODO Auto-generated method stub
		mService = ((LocalBinder) service).getService(this);
	}

	@Override
	public void onServiceDisconnected(ComponentName name) {
		// TODO Auto-generated method stub
		mService = null;
	}
	
	public void updateView(String msg) {
		comm_act_show_info.setText(msg);
	}

	@Override
	public void notifyServiceEvent(String msg) {
		msg += " -> activity";
		Log.i(TAG, msg);
		updateView(msg);
	}

	private BroadcastReceiver mReceiver = new BroadcastReceiver() {
		
		@Override
		public void onReceive(Context context, Intent intent) {
			String action = intent.getAction();
			Log.i(TAG, "-- onReceive() -- " + intent.toString());
			if (action.equals(CommService.ACTION_FROME_SERVICE)) {
				String msg = intent.getStringExtra("message");
				msg += " -> activity";
				Log.i(TAG, msg);
				updateView(msg);
			}
		}
	};
}

```

###	Service

Service需要将绑定的Activity进行缓存，在需要的时候可以随时方便地获取以便可以准确的给目标Activity投放消息，代码如下：

```java

package com.example.service.comm;

import java.util.HashMap;
import java.util.Map;

import android.app.Service;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Binder;
import android.os.IBinder;
import android.util.Log;

/**
 * @project SampleAndroid   
 * @class CommService 
 * @description       
 * @author yxmsw2007
 * @version   
 * @email yxmsw2007@gmail.com  
 * @data 2015-7-5 上午10:12:47    
 */
public class CommService extends Service {

	public static final String ACTION_FROME_ACT = "com.example.ACTION_FROME_ACT";	
	
	public static final String ACTION_FROME_SERVICE = "com.example.ACTION_FROME_SERVICE";	
	
	public static final String BINDER_ACT_ACTION = "BINDER_ACT_ACTION";	
	
	private static final String TAG = CommService.class.getSimpleName();
	
	private Map<String, LocalBinder> mLocalBinders = new HashMap<String, LocalBinder>();
	
	public class LocalBinder extends Binder {
		
		private INotifiable mINotifiable;
		
		public CommService getService(INotifiable notifiable) {
			this.mINotifiable = notifiable;
			return CommService.this;
		}
		
		public INotifiable getINotifiable() {
			return this.mINotifiable;
		}
	}
	
	@Override
	public IBinder onBind(Intent intent) {
		Log.i(TAG, " -- onBind() --");
		String act = intent.getStringExtra(BINDER_ACT_ACTION);
		Log.i(TAG, "act:" + act);
		LocalBinder binder = null;
		if (mLocalBinders.get(act) == null) {
			binder = new LocalBinder();
			mLocalBinders.put(act, binder);
		} else {
			binder = mLocalBinders.get(act);
		}
		return binder;
	}

	@Override
	public boolean onUnbind(Intent intent) {
		Log.i(TAG, " -- onUnbind() --");
		int act = intent.getIntExtra(BINDER_ACT_ACTION, -1);
		mLocalBinders.remove(act);
		return true;
	}
	
	@Override
	public void onCreate() {
		super.onCreate();
		
		IntentFilter filter = new IntentFilter();
		filter.addAction(ACTION_FROME_ACT);
		registerReceiver(mReceiver, filter);
		
	}
	
	@Override
	public void onDestroy() {
		super.onDestroy();
		
		unregisterReceiver(mReceiver);
	}
	
	public void recvFromAct(String msg) {
		msg += " -> service";
		Log.i(TAG, msg);
		LocalBinder binder = mLocalBinders.get(CommAct.class.getName());
		if (binder != null) {
			binder.getINotifiable().notifyServiceEvent(msg);
		}
	}
	
	private BroadcastReceiver mReceiver = new BroadcastReceiver() {
		
		@Override
		public void onReceive(Context context, Intent intent) {
			String action = intent.getAction();
			Log.i(TAG, "-- onReceive() -- " + intent.toString());
			if (action.equals(ACTION_FROME_ACT)) {
				String msg = intent.getStringExtra("message");
				msg += " -> service";
				Log.i(TAG, msg);
				intent.setAction(ACTION_FROME_SERVICE);
				intent.putExtra("message", msg);
				sendBroadcast(intent);
			}
		}
	};
	

}

```

## 源码下载

[SampleAndroid](https://github.com/yxmsw2007/SampleAndroid.git)

## 参考资料



