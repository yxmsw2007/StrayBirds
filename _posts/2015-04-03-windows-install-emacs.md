---
layout: post
title: Windows中安装Emacs
comments: true
category: Windows
tags: [emacs, 安装]
---

> “在这个蔚蓝色的星球上，流传着两大神器的传说：据说Emacs是神的编辑器，而Vim是编辑器之神。”

既然有人这么说肯定有他的道理，为了体验下不一样的感觉本人不得不深入神的世界去了。

那进入神的世界要如何开始，当然是install了，下面我说下如何在在windows中安装Emacs。

## 下载

Emacs Windows版下载地址：[http://ftp.gnu.org/pub/gnu/emacs/windows/](http://ftp.gnu.org/pub/gnu/emacs/windows/)

打开网页后拉到最后挑一个最新的版本，目前最新版本为emacs-24.3-bin-i386.zip，只需要一个压缩文档即可。

## 安装

将下载的压缩包（emacs-24.3-bin-i386.zip）解压到D盘（随个人喜好）重命名为Emacs24.3（也可以不重命名），解压后目录如下

![20150404001432](/images/2015-04-03-windows-install-emacs/20150404001432.png)

双击bin文件夹里的addpm.exe进行安装，安装完后可以双击bin文件夹里的runemacs.exe启动也可以到bin目录双击emacs.exe启动，注意后者会出现一个控制台窗口。

## 配置HOME目录

配制方法有很多，不知道的可以到网上搜索一下；下面介绍一下我的配制方法：

打开注册表，找到HKEY_LOCAL_MACHINE\Software\Wow6432Node\GNU\Emacs\HOME=D:\Emacs24.3（如果没有则手动添加，也有人说是HKEY_LOCAL_MACHINE\SOFTWARE\GNU\Emacs这个目录，但我的机器设置无效）。

如何验证HOME目录是否有效，那就请继续往下看。

## 创建.emacs.d目录和.emacs文件

启动emacs，找到最上面的Options菜单，任意修改一两个选项，比如Highlight Active Region，然后点击Save Options保存。在Emacs窗口最后一行会显示“Wrote d:/Emacs24.3/.emacs”，此时.emacs.d目录和.emacs文件就算创建完了。这里你也许已经猜到窗口显示的这个目录就是Emacs的HOME目录，所以也可以用它来验证HOME设置是否正确。


## 加载.el文件

lisp目录下存放着lisp源文件（*.el）和已编译的lisp文件（*.elc），以后你也可以将自己的.el文件放在这个目录下，然后还要在.emacs文件插入相关语句。比如你有一个文件叫做abcd.el，将它复制到lisp目录下，然后打开.emacs文件插入一句(require 'abcd)就可以了（包括圆括号，不需要扩展名.el）。

## 参考资料

[windows下Emacs的安装与配置](http://blog.csdn.net/flag_and_leg/article/details/2900278)
