---
layout: post
title: arm-linux-gnueabihf-gcc4.8.2编译QT5.3.2
comments: true
category: Ubuntu
tags: [QT, 编译, arm-linux-gnueabihf-gcc]
---

## 环境

编译器：arm-linux-gnueabihf-gcc4.8.2（linaro即Cohda系统所用的编译器）

系统：Ubuntu14.04

QT源码：qt-everywhere-opensource-src-5.3.2（或qt-everywhere-opensource-src-4.8.2）

## 编译

### 添加arm-linux-gnueabihf-gcc4.8.2

	vim /etc/profile

在profile最后一行加上gcc目录（以下为本人目录）

	export PATH=$PATH:/opt/gcc-linaro-arm-linux-gnueabihf/gcc-linaro-arm-linux-gnueabihf-4.8.2/bin
	
保存退出，并执行这个命令加载新的环境变量

	source /etc/profile
	
>	注意：这个命令有可能只在当前的终端加载新的环境变量，如果新开一个终端窗口又要用新的环境变量可以再执行一次这个名或者重启电脑

在终端输入arm-linux-gnueabihf-在按两下Tab键，正常就会有以下提示

	qt@qt-virtual-machine:~$ arm-linux-gnueabihf-
	arm-linux-gnueabihf-addr2line        arm-linux-gnueabihf-gprof
	arm-linux-gnueabihf-ar               arm-linux-gnueabihf-ld
	arm-linux-gnueabihf-as               arm-linux-gnueabihf-ld.bfd
	arm-linux-gnueabihf-c++              arm-linux-gnueabihf-ldd
	arm-linux-gnueabihf-c++filt          arm-linux-gnueabihf-ld.gold
	arm-linux-gnueabihf-cpp              arm-linux-gnueabihf-nm
	arm-linux-gnueabihf-elfedit          arm-linux-gnueabihf-objcopy
	arm-linux-gnueabihf-g++              arm-linux-gnueabihf-objdump
	arm-linux-gnueabihf-gcc              arm-linux-gnueabihf-pkg-config
	arm-linux-gnueabihf-gcc-4.8.2        arm-linux-gnueabihf-pkg-config-real
	arm-linux-gnueabihf-gcc-ar           arm-linux-gnueabihf-ranlib
	arm-linux-gnueabihf-gcc-nm           arm-linux-gnueabihf-readelf
	arm-linux-gnueabihf-gcc-ranlib       arm-linux-gnueabihf-size
	arm-linux-gnueabihf-gcov             arm-linux-gnueabihf-strings
	arm-linux-gnueabihf-gdb              arm-linux-gnueabihf-strip
	arm-linux-gnueabihf-gfortran

### 修改qt配置

修改qtbase/mkspecs/linux-arm-gnueabi-g++/qmake.conf（qt-everywhere-opensource-src-4.8.2下mkspecs直接在根目录下），如下

	#
	# qmake configuration for building with arm-linux-gnueabi-g++
	#

	MAKEFILE_GENERATOR      = UNIX
	CONFIG                 += incremental
	QMAKE_INCREMENTAL_STYLE = sublib

	#新增变量
	QT_QPA_DEFAULT_PLATFORM = linuxfb
	QMAKE_CFLAGS_RELEASE   += -O2 -march=armv7-a
	QMAKE_CXXFLAGS_RELEASE += -O2 -march=armv7-a

	include(../common/linux.conf)
	include(../common/gcc-base-unix.conf)
	include(../common/g++-unix.conf)

	#修改后的变量，更具实际情况修改
	# modifications to g++.conf
	QMAKE_CC                = arm-linux-gnueabihf-gcc-4.8.2
	QMAKE_CXX               = arm-linux-gnueabihf-g++
	QMAKE_LINK              = arm-linux-gnueabihf-g++
	QMAKE_LINK_SHLIB        = arm-linux-gnueabihf-g++

	# modifications to linux.conf
	QMAKE_AR                = arm-linux-gnueabihf-ar cqs
	QMAKE_OBJCOPY           = arm-linux-gnueabihf-objcopy
	QMAKE_NM                = arm-linux-gnueabihf-nm -P
	QMAKE_STRIP             = arm-linux-gnueabihf-strip

	load(qt_config)
	
### 设置config

在Qt源码根目录新建一个autoconfig.sh文件，并将以下内容复制进去

	#!/bin/sh
	./configure \
	-prefix /opt/qt-everywhere-arm-linux/qt-everywhere-arm-linux-5.3.2 \
	-confirm-license \
	-opensource \
	-release  \
	-make libs \
	-xplatform linux-arm-gnueabi-g++ \
	-optimized-qmake \
	-pch \
	-qt-sql-sqlite \
	-qt-libjpeg \
	-qt-libpng \
	-qt-zlib \
	-no-opengl \
	-no-sse2 \
	-no-openssl \
	-no-nis \
	-no-cups \
	-no-glib \
	-no-dbus \
	-no-xcb \
	-no-qpa-platform-guard	\
	-no-xcursor -no-xfixes -no-xrandr -no-xrender \
	-no-separate-debug-info \
	-make examples -nomake tools -nomake tests -no-iconv \
	-qreal float \
	-v

	exit
	
-prefix			qt的安装目录（make install的安装目录）

-opensource		开源声明

-confirm-license 	接受上面的开源声明，如果没有这项，每次执行是都需要手动确认

-xplatform		编译平台选择，参数填qmake.conf所在的文件夹名称

-qreal float		指定qreal类型，默认是double，（只有在Arm平台上，qreal是float，其他情况下qreal是double）

-v			输出详细信息

更多的参数可以通过以下命令查看

	./configure	-help
	
也可将帮助文档保存到文件

	./configure	-help > help.txt
	
另附上qt-everywhere-opensource-src-4.8.2的autoconfig.sh的内容

	#!/bin/bash

	./configure \
	-prefix /opt/qt-everywhere-arm-linux/qt-everywhere-arm-linux-4.8.2 \
	-opensource \
	-confirm-license \
	-release -shared \
	-embedded arm \
	-xplatform linux-arm-gnueabi-g++ \
	-depths 16,18,24 \
	-fast \
	-optimized-qmake \
	-pch \
	-qt-sql-sqlite \
	-qt-libjpeg \
	-qt-zlib \
	-qt-libpng \
	-qt-freetype \
	-little-endian -host-little-endian \
	-no-qt3support \
	-no-libtiff -no-libmng \
	-no-opengl \
	-no-mmx -no-sse -no-sse2 \
	-no-3dnow \
	-no-openssl \
	-no-webkit \
	-no-qvfb \
	-no-phonon \
	-no-nis \
	-no-opengl \
	-no-cups \
	-no-glib \
	-no-xcursor -no-xfixes -no-xrandr -no-xrender \
	-no-separate-debug-info \
	-nomake examples -nomake tools -nomake docs \
	-lrt	

	exit
	
### 生成Makefile

完成第三步后，实行下面的命令生成Makefile文件

	sh autoconfig.sh
	
如果执行成功就会输出如下信息并且生成Makefile

	Creating qmake...
	make: Nothing to be done for `first'.
	Running configuration tests...
	Warning: Disabling pkg-config since PKG_CONFIG_LIBDIR is not set.
	Warning: Disabling pkg-config since PKG_CONFIG_SYSROOT_DIR is not set.

	   Configure summary

	Building on:   linux-g++ (x86_64, CPU features: mmx sse sse2)
	Building for:  linux-arm-gnueabi-g++ (arm, CPU features:)
	Platform notes:

				- Also available for Linux: linux-kcc linux-icc linux-cxx
			
	Build options:
	  Configuration .......... accessibility audio-backend c++11 clock-gettime clock-monotonic compile_examples concurrent cross_compile evdev eventfd freetype full-config getaddrinfo getifaddrs inotify ipv6ifname large-config largefile linuxfb medium-config minimal-config mremap no-harfbuzz no-pkg-config pcre png posix_fallocate precompile_header qpa qpa reduce_exports release rpath shared small-config zlib 
	  Build parts ............  libs examples
	  Mode ................... release
	  Using C++11 ............ yes
	  Using PCH .............. yes
	  Target compiler supports:
		iWMMXt/Neon .......... no/auto

	Qt modules and options:
	  Qt D-Bus ............... no
	  Qt Concurrent .......... yes
	  Qt GUI ................. yes
	  Qt Widgets ............. yes
	  Large File ............. yes
	  QML debugging .......... yes
	  Use system proxies ..... no

	Support enabled for:
	  Accessibility .......... yes
	  ALSA ................... no
	  CUPS ................... no
	  Evdev .................. yes
	  FontConfig ............. no
	  FreeType ............... yes (bundled copy)
	  Glib ................... no
	  GTK theme .............. no
	  HarfBuzz ............... no
	  Iconv .................. no
	  ICU .................... no
	  Image formats: 
		GIF .................. yes (plugin, using bundled copy)
		JPEG ................. yes (plugin, using bundled copy)
		PNG .................. yes (in QtGui, using bundled copy)
	  journald ............... no
	  mtdev .................. no
	  Networking: 
		getaddrinfo .......... yes
		getifaddrs ........... yes
		IPv6 ifname .......... yes
		OpenSSL .............. no
	  NIS .................... no
	  OpenGL / OpenVG: 
		EGL .................. no
		OpenGL ............... no
		OpenVG ............... no
	  PCRE ................... yes (bundled copy)
	  pkg-config ............. no 
	  PulseAudio ............. no
	  QPA backends: 
		DirectFB ............. no
		EGLFS ................ no
		KMS .................. no
		LinuxFB .............. yes
		XCB .................. no
	  Session management ..... yes
	  SQL drivers: 
		DB2 .................. no
		InterBase ............ no
		MySQL ................ no
		OCI .................. no
		ODBC ................. no
		PostgreSQL ........... no
		SQLite 2 ............. no
		SQLite ............... qt-qt
		TDS .................. no
	  udev ................... no
	  xkbcommon .............. no
	  zlib ................... yes (bundled copy)


	Qt is now configured for building. Just run 'make'.
	Once everything is built, you must run 'make install'.
	Qt will be installed into /opt/qt-everywhere-arm-linux/qt-everywhere-arm-linux-5.3.2

	Prior to reconfiguration, make sure you remove any leftovers from
	the previous build.

### 编译

	make

或者多线程编译，8为线程数

	make -j8
	
### 安装

	sudo make install
	
### 配置qt环境

在/etc/profile文件最后添加/opt/qt-everywhere-arm-linux/qt-everywhere-arm-linux-5.3.2/bin，最后别忘了

	source /etc/profile

### 命令行编译及运行应用

进入应用跟目录，假如目录名是mainwindow

	qmake -project			#生成.pro文件，这里生成mainwindow.pro
	
	qmake mainwindow.pro		#生成Makefile
	
	make				#编译，生成mainwindow可执行文件
	
	./mainwindow			#运行程序
	
## 问题集锦

说明：问题1-4都是在编译qt-everywhere-opensource-src-4.8.2源码时遇到的

### 找不到libstdc++.so.6库

	arm-linux-gnueabihf-g++: error while loading shared libraries: libstdc++.so.6: cannot open shared object file: No such file or directory

解决方法

	$sudo apt-get install libstdc++6 
	$sudo apt-get install lib32stdc++6

### ubuntu更新源地址找不到

解决方法

打开设置->软件&更新->download from->其它（选择一个国内的源地址）

### 未定义clock_gettime

	.obj/release-shared-emb-arm/qtconcurrentiteratekernel.o: In function `getticks()':
	qtconcurrentiteratekernel.cpp:(.text+0x1a): undefined reference to `clock_gettime'
	
解决方法

修改：vim src/corelib/Makefile 加上-lrt

	LIBS          = $(SUBLIBS)  -L/opt/qt-everywhere-opensource-src-4.8.4/lib -lpthread -lm -ldl -lrt
	
### 未定义'dlerror@GLIBC_2.4'

编译QT报的错

	/home/qt/yxmsw2007/qt-everywhere-opensource-src-4.8.2/lib/libQtCore.so: undefined reference to `dlerror@GLIBC_2.4'
	/home/qt/yxmsw2007/qt-everywhere-opensource-src-4.8.2/lib/libQtCore.so: undefined reference to `dlclose@GLIBC_2.4'
	/home/qt/yxmsw2007/qt-everywhere-opensource-src-4.8.2/lib/libQtCore.so: undefined reference to `dlopen@GLIBC_2.4'
	/home/qt/yxmsw2007/qt-everywhere-opensource-src-4.8.2/lib/libQtCore.so: undefined reference to `dlsym@GLIBC_2.4'
	/home/qt/yxmsw2007/qt-everywhere-opensource-src-4.8.2/lib/libQtCore.so: undefined reference to `clock_gettime@GLIBC_2.4'

编译应用报的错

	/home/qt/yxmsw2007/qt-everywhere-opensource-src-4.8.2/lib/libQtCore.so: undefined reference to `dlerror@GLIBC_2.4'
	/home/qt/yxmsw2007/qt-everywhere-opensource-src-4.8.2/lib/libQtCore.so: undefined reference to `dlclose@GLIBC_2.4'
	/home/qt/yxmsw2007/qt-everywhere-opensource-src-4.8.2/lib/libQtCore.so: undefined reference to `dlopen@GLIBC_2.4'
	/home/qt/yxmsw2007/qt-everywhere-opensource-src-4.8.2/lib/libQtCore.so: undefined reference to `dlsym@GLIBC_2.4'
	collect2: error: ld returned 1 exit status
	make: *** [applicationicon] Error 1

解决方法

编译的时候报了一次，执行了make confclean后再次make就正常
编译完成后，在编译应用时又报了这个错，于是修改了应用的Makefile中的LFLAGS和LIBS的引用路径

网上修改建议 

	qtlib	= /opt/qt-4.8.5-arm/lib/
	#/home/DTV1000/install/lib
	LFLAGS        = -Wl,-O1 -Wl,-rpath,$(qtlib)
	LIBS          = $(SUBLIBS)  -L$(qtlib) -lQtGui -L$(qtlib) -lts -lQtNetwork -lQtCore -lm -lrt -ldl -lpthread 
	
实际修改

	qtlib	= /opt/qt-everywhere-arm-linux-4.8.2/lib/
	LFLAGS  = -Wl,-rpath-link,$(qtlib) -Wl,-O1 -Wl,-rpath,$(qtlib)
	LIBS    = $(SUBLIBS)  -L$(qtlib) -lQtGui -L$(qtlib) -lQtNetwork -lQtCore -lm -lrt -ldl -lpthread 

##  参考资料


