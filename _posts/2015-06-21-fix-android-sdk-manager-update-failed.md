---
layout: post
title: 换个思路解决Android SDK Manager无法更新或者更新慢问题
comments: true
category: Android
tags: [SDK, Manager, 无法更新, 更新慢]
---

## 前言

文中解决问题的思路比较特别，以后如果遇到类似的问题也可以参考一下

## 获取xml地址

打开SDK工具，进入后点击右下角的显示Log窗口按钮，如下图。

![20150621124755](/images/2015-06-21-android-sdk-manager-update-fix/20150621124755.png)

在弹出的日志框中可以看到xml地址，如下图

![20150621125733](/images/2015-06-21-android-sdk-manager-update-fix/20150621125733.png)

上图获取的地址为：https://dl-ssl.google.com/android/repository/repository-10.xml

## 获取安装包地址

上面获取到的地址在浏览器中打开（这里可能需要翻墙，翻墙软件推荐使用自由门）。

如果你不想翻墙也可以直接将地址复制到迅雷中下载。

打开xml后搜索你要更新的安装包，例如我想下载android4.4（api：18）的例子（sample），搜索"sdk:sample"，并找到api-level是18的节点，在"sdk:url"节点内有个下载地址，详情如下：

```xml

<sdk:sample>
	<!-- Generated at Tue Jul 23 17:17:22 2013 from git_jb-mr2-ub-dev @ 751786 -->
	<sdk:revision>1</sdk:revision>
	<sdk:api-level>18</sdk:api-level>
	<sdk:archives>
		<sdk:archive>
			<sdk:size>19897793</sdk:size>
			<sdk:checksum type="sha1">73e879ce46c04a6e63ad1a9107018b4782945007</sdk:checksum>
			<sdk:url>https://dl-ssl.google.com/android/repository/samples-18_r01.zip</sdk:url>
		</sdk:archive>
	</sdk:archives>
	<sdk:uses-license ref="android-sdk-license"/>
</sdk:sample>

```

到这里我们就获取到了需要更新的安装包地址

	https://dl-ssl.google.com/android/repository/samples-18_r01.zip
	
##	下载

将上面的地址复制到迅雷中，很快就可以下完了。

##	安装

将下载的samples-18_r01.zip解压到sdk的sample目录下即可

## 参考资料

[彻底解决Android SDK Manager更新慢的问题](http://www.cnblogs.com/liongis/p/3659813.html)

