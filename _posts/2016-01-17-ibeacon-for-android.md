---
layout: post
title: iBeacon for Android 
comments: true
category: Tools 
tags: [Ibeacon, Android]
---

## iBeacon 

### 工作方式

iBeacon 是苹果公司2013年9月发布的移动设备用OS（iOS7）上配备的新功能。

其工作方式是，配备有低功耗蓝牙（BLE）通信功能的设备使用BLE技术向周围发送自己特有的ID，

接收到该ID的应用软件会根据该ID采取一些行动。

### 苹果的自主格式中带有四种资讯

iBeacon使用的是BLE技术，具体而言，利用的是BLE中名为“通告帧”（Advertising）的广播帧。通告帧是定期发送的帧，只要是支持BLE的设备就可以接收到。iBeacon通过在这种通告帧的有效负载部分嵌入苹果自主格式的数据来实现。

iBeacon的数据主要由四种资讯构成，分别是UUID（通用唯一标识符）、Major、Minor、Measured Power。

UUID是规定为ISO/IEC11578:1996标准的128位标识符。

Major和Minor由iBeacon发布者自行设定，都是16位的标识符。比如，连锁店可以在Major中写入区域资讯，可在Minor中写入个别店铺的ID等。另外，在家电中嵌入iBeacon功能时，可以用Major表示产品型号，用Minor表示错误代码，用来向外部通知故障。
Measured Power是iBeacon模块与接收器之间相距1m时的参考接收信号强（RSSI：Received Signal Strength Indicator）。接收器根据该参考RSSI与接收信号的强度来推算发送模块与接收器的距离。

将距离简单分为3级

有意思的是，苹果在iOS中并不仔细推断距离，而只采用贴近（Immediate）、1m以内（Near）、1m以上（Far）三种距离状态。距离在1m以内时，RSSI值基本上成比例减少，而距离在1m以上时，由于反射波的影响等，RSSI不减少而是上下波动。也就是说，相距1m以上时无法推断距离，因此就简单判定为Far。

iOS7对接收到的iBeacon信号进行解释后，向等待iBeacon资讯的所有应用软件发送UUID、Major、Minor及靠近程度。发送的靠近程度资讯是Immediate、Near、Far中的一种。接收资讯的应用软件先确认UUID，如果确认是发送给自己的资讯，则再根据Major、Minor的组合进行处理。

### iBeacon for Android

### 接收端

####	环境

Android4.3或更高版本（iBeacon使用的是BLE技术，BLE Android 4.3才支持）

####	实现

源码地址：[Android-iBeacon-Demo](https://github.com/Vinayrraj/Android-iBeacon-Demo)（实测可以使用）

### 发送端

####	环境

Android5.0或更高版本（Android 只有BLE API支持peripheral mode才支持手机蓝牙广播，而这个模式直到5.0才添加）

####	实现

由于本人没有5.0环境，所以没有实测。

源代码：[AndroidPeripheralTest](https://github.com/richardkarlsen/AndroidPeripheralTest)

##  iBeacon协议

BLE的通信包括两个主要部分：advertising（广告）和connecting（连接）。

广告（Advertising）是一种单向的发送机制。想要被搜索到的设备可以以20毫秒到10秒钟的时间间隔发送一段数据包。使用的时间间隔越短，电池消耗的越快，但设备被发现的速度也就会快。数据包长度最多47个字节，由以下部分组成：

![20160117000000](/images/2016-01-17-ibeacon-for-android/20160117000000.png)

1)	Preamble：报头

2)	Access Address：地址，对于广告通信信道，地址部分永远都是0x8E89BED6

3)	PDU

*	Header
	
	Type：IBeacon使用的Adv PDU的类型是固定的，即ADV_IND，其对应于Header中的Type域值为0，TxAdd指示了IBeacon Mac Address的类型，1表示Random Address，0表示Public Address。RxAdd与TxAdd相似，指示了接收设备的地址类型，但是在IBeacon的Payload中并没有接收端的地址数据，因此这一位是不用的，根据协议应将其设为0，与其它RFU位相同。
	
	Length：MAC Address + Data，注意根据其它文章意思Length可能只占6bit，有待确认

*	MAC Address

蓝牙MAC地址，注意这是一个伪造的地址

*	Data

Ibeacon Prefix：修正地址

Proximity UUID：厂商识别号；AirLocate（02 01 1a 1a ff 4c 00 02 15）、Estimote（02 01 1a 11 07 2d 24 bf 16）

Major：相当于群组号，同一个组里Beacon有相同的Major

Minor：相当于识别群组里单个的Beacon

TX Power：用于测量设备离Beacon的距离，即RSSI，用补码表示

UUID+Major+Minor就构成了一个Beacon的识别号，有点类似于网络中的IP地址。TX Power用于测距，iBeacon目前只定义了大概的3个粗略级别：

>	非常近（Immediate）: 大概10厘米内

>	近（Near）:1米内

>	远（Far）:1米外

4)	CRC：数据校验
 

  


