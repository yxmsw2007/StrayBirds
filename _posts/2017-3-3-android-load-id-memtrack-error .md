---
layout: post
title: load: id=memtrack != hmi->id=memtrack   
comments: true
category: Android
tags: [id=memtrack]
---

今天调试Android程序的时候，发现以前可以用的程序都跑不起来了，测试手机是华为Mate7，在log里面看到了这样一个错误

```java

10-04 19:24:37.482: E/linker(17459): readlink('/proc/self/fd/21') failed: Permission denied [fd=21]
10-04 19:24:37.482: E/linker(17459): warning: unable to get realpath for the library "/system/lib64/hw/gralloc.hi3635.so". Will use given name.
10-04 19:24:37.483: E/linker(17459): readlink('/proc/self/fd/21') failed: Permission denied [fd=21]
10-04 19:24:37.483: E/linker(17459): warning: unable to get realpath for the library "libion.so". Will use given name.
10-04 19:24:37.484: E/HAL(17459): load: id=gralloc != hmi->id=gralloc

```

由于好久没调试这个程序了，也不知道为什么，于是百度，很多人都说是权限问题，因为android6.0后权限申请发生了变化，于是我把权限都加上，但还是跑不起来，最后实在不知道为什么了，只好将开发工具eclipse舍弃，将项目转为Android Studio的Gradle项目，经过一阵子折腾，转成Gradle项目用Android Studio可以跑起来，目前还没找到真正原因

## 参考资料

