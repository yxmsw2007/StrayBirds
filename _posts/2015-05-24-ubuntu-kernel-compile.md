---
layout: post
title: kernel-3.2.0编译-Ubuntu12.04 
comments: true
category: Ubuntu
tags: [kernel, 编译, linux, 内核]
---

## 学习资料

英本网的免费视频，推荐给大家，讲的比较清楚，适合入门

[01.Linux内核学习入门](http://v.youku.com/v_show/id_XNjc1NzEzODAw.html)     
  
[02.Linux内核介绍](http://v.youku.com/v_show/id_XNjc1NzE0OTAw.html)

[03.Linux内核编译](http://v.youku.com/v_show/id_XNjc1NzE1NDQ0.html)

[04.Linux内核源码介绍及剪裁](http://v.youku.com/v_show/id_XNjc1NzE2MjQw.html)

[06.Linux内核模块例子](http://v.youku.com/v_show/id_XNjc1NzE3MDI4.html)

## 超有用的资料网站

https://www.kernel.com/

[内核源码下载](https://www.kernel.org/)

[linux论坛](http://www.linuxsir.org/)

[在线阅读内核源码](http://lxr.linux.no/)

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

提示找不到可用包，没办法，被逼使用终极大招

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

## 参考资料

[解决ubuntu下make menuconfig错误问题](http://blog.sina.com.cn/s/blog_726684020100r1oo.html)
