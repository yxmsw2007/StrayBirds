---
layout: post
title: Ubuntu命令行编译QT程序
comments: true
category: Ubuntu
tags: [QT, 命令行]
---

终端进入项目根目录（mainwindow）

## qmake -project

该命令生成mainwindow.pro

## qmake mainwindow.pro

该命令生成Makefile

## make

该命令生成可执行文件：mainwindow

## 运行程序

在文件夹下找到mainwindow双击，或者从命令行运行此可执行程序，输入命令 ./mainwindow，即可运行此程序。（这一步本人没成功）

##  参考资料

[Ubuntu下用命令行运行QT程序](http://blog.sina.com.cn/s/blog_71fa0df501011o9y.html)
