---
layout: post
title: kernel-3.2.0编译-Ubuntu12.04 
comments: true
category: Ubuntu
tags: [kernel]
---

## make menuconfig

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

## 参考资料

[解决ubuntu下make menuconfig错误问题](http://blog.sina.com.cn/s/blog_726684020100r1oo.html)
