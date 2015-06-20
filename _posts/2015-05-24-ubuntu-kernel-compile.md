---
layout: post
title: Kernel-3.2.0编译-Ubuntu12.04 
comments: true
category: Ubuntu
tags: [kernel, 编译, linux, 内核]
---

## 学习资料

英本网的免费视频，推荐给大家，讲的比较清楚，适合入门

*	[Linux内核学习入门](http://v.youku.com/v_show/id_XNjc1NzEzODAw.html)     
  
*	[Linux内核介绍](http://v.youku.com/v_show/id_XNjc1NzE0OTAw.html)

*	[Linux内核编译](http://v.youku.com/v_show/id_XNjc1NzE1NDQ0.html)

*	[Linux内核源码介绍及剪裁](http://v.youku.com/v_show/id_XNjc1NzE2MjQw.html)

*	[Linux内核模块例子](http://v.youku.com/v_show/id_XNjc1NzE3MDI4.html)

## 超有用的资料网站

*	[kernel](https://www.kernel.com/)

*	[内核源码下载](https://www.kernel.org/)

*	[linux论坛](http://www.linuxsir.org/)

*	[在线阅读内核源码](http://lxr.linux.no/)

## 生成配置

>	make menuconfig //图形界面

>	make config //命令行

>	make xconfig //图形界面，树形结构

>	make defconfig

### make menuconfig

```sh

 *** Unable to find the ncurses libraries or the
 *** required header files.
 *** 'make menuconfig' requires the ncurses libraries.
 *** 
 *** Install ncurses (ncurses-devel) and try again.
 *** 
make[1]: *** [scripts/kconfig/dochecklxdialog] Error 1
make: *** [menuconfig] Error 2

```

按网上说的执行以下命令

```sh

$ sudo apt-get install libncurses5-dev
[sudo] password for siuming: 
Reading package lists... Done
Building dependency tree       
Reading state information... Done
libncurses5-dev is already the newest version.
The following packages were automatically installed and are no longer required:
  libwayland-ltst-client0 libtxc-dxtn-s2tc0 libosmesa6 libxrandr-ltst2
  libwayland-ltst-server0 libxcb-xfixes0 libllvm3.4
Use 'apt-get autoremove' to remove them.
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.

```

发现还是不行，再执行如下命令

```sh

$ sudo apt-get install ncurses
Reading package lists... Done
Building dependency tree       
Reading state information... Done
Package ncurses is not available, but is referred to by another package.
This may mean that the package is missing, has been obsoleted, or
is only available from another source

E: Package 'ncurses' has no installation candidate

```

提示找不到可用包，没办法，被迫使用终极大招

```sh

sudo apt-get install libncurses*

```

所有的都安装后就可以使用了

## 编译

make

make modules //编译模块

make modules_install //安装模块

make install //安装

/sbin/depmod 2.6.31.8 //产生依赖文件，*.dep

make -jn

make

## 目录结构

```sh

.
├── arch		//arch是architecture的缩写。内核所支持的每种CPU体系，在该目录下都有对应的子目录。
			//每个CPU的子目录，又进一步分解为boot,mm,kernel等子目录，分别包含控制系统引导，
			//内存管理，系统调用等。
├── block		//部分块设备驱动程序
├── COPYING
├── CREDITS
├── crypto		//加密、压缩、CRC校验算法
├── Documentation	//内核的文档
├── drivers		//设备驱动程序
├── dropped.txt
├── firmware		//固件（固化到主板内的程序）
├── fs			//存放各种文件系统的实现代码。每个子目录对应一种文件系统的实现，公用的源程序用于实现
			//虚拟文件系统vfs。
├── include		//内核所需要的头文件。与平台无关的头文件在include/linux 子目录下，与平台相关的头文件
			//则放在相应的子目录中。
├── init		//内核初始化代码
├── ipc			//进程间通信的实现代码
├── Kbuild
├── Kconfig
├── kernel		//Linux大多数关键的核心功能都是在这个目录实现。（调度程序，进程控制，模块化）
├── lib			//库文件代码
├── MAINTAINERS
├── Makefile
├── mm			//mm目录中的文件用于实现内存管理中与体系结构无关的部分，与处理器相关的代码位于arch/*/mm目录下
├── net			//网络协议的实现代码| |--802 /*802无线通讯协议核心支持代码*/
├── README
├── REPORTING-BUGS
├── samples		//一些内核编程的范例
├── scripts		//配置内核的脚本
├── security		//安全、密钥相关代码
├── sound		//音频设备的驱动程序
├── tools
├── ubuntu
├── usr			//改目录中的代码为内核尚未完全启动时执行用户空间代码提供了支持（initrd镜像）
└── virt		//内核虚拟机

```

## 参考资料

[解决ubuntu下make menuconfig错误问题](http://blog.sina.com.cn/s/blog_726684020100r1oo.html)
