---
layout: post
title: build-essential的作用
comments: true
category: Develop
tags: [build-essential]
---
 
## 引用一

linux操作系统上面开发程序， 光有了gcc 是不行的
它还需要一个   build-essential软件包
作用是提供编译程序必须软件包的列表信息

也就是说 编译程序有了这个软件包
它才知道 头文件在哪 才知道库函数在哪
还会下载依赖的软件包   最后才组成一个开发环境
当然 build-essential包 安装时 需要的依赖包 有些你用不上

软件包: build-essential 安装方法：

	sudo apt-get install build-essential


## 引用二

Ubuntu缺省情况下，并没有提供C/C＋＋的编译环境，因此还需要手动安装。
如果单独安装gcc以及g 比较麻烦，幸运的是，为了能够编译Ubuntu的内核，Ubuntu提供了一个build-essential软件包。
命令：

	apt-get install build-essential  

或者  

	aptitude install build-essential

其中aptitude是基于apt系列的命令。而由于aptitude是apt系列命令的高层封装，因此apt-get使用上比较方便，对于可能的软件包冲突等事件可以更好的处理。

##  参考资料

[build-essential的作用](http://blog.163.com/zhangjinqing1234@126/blog/static/307302602009538137113/)

