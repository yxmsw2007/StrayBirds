---
layout: post
title: Ubuntu常用命令 
comments: true
---

## 屏幕截图

命令：gnome-screenshot

    $ gnome-screenshot --help

    Usage:

         gnome-screenshot [OPTION...] Take a picture of the screen

    Help Options:

        -h, --help                     Show help options

        --help-all                     Show all help options

        --help-gtk                     Show GTK+ Options

    Application Options:

        -c, --clipboard                Send the grab directly to the clipboard

        -w, --window                   Grab a window instead of the entire screen

        -a, --area                     Grab an area of the screen instead of the entire screen

        -b, --include-border           Include the window border with the screenshot

        -B, --remove-border            Remove the window border from the screenshot

        -d, --delay=seconds            Take screenshot after specified delay [in seconds]

        -e, --border-effect=effect     Effect to add to the border (shadow, border or none)

        -i, --interactive              Interactively set options

        --display=DISPLAY              X display to use

参数说明：

* 无：全屏截图
* -w：当前Shell窗口
* -a：指定区域
* -B：去除窗口边框
* -d：延迟截屏
* -e：给截图添加效果

## 清屏快捷键

    Ctrl + l

## 命令行打开当前文件夹

    nautilus .

## df

df只能查看一级文件夹大小、使用比例、档案系统及其挂入点

    $ sudo df -h
 
    Filesystem      Size  Used Avail Use% Mounted on

    /dev/sda1        98G   70G   23G  76% /

    udev            2.0G  4.0K  2.0G   1% /dev

    tmpfs           395M  800K  394M   1% /run

    none            5.0M     0  5.0M   0% /run/lock

    none            2.0G  352K  2.0G   1% /run/shm

h参数， 表示使用「Human-readable」的输出，即是输出GB、MB方式 

## du

max-depth参数表示指定深入目录的层数,很重要，不指定的话，会显示所有层次目录

    $ du -h --max-depth=1

    18M ./developers

    45M ./libcore

    1.2G    ./frameworks

    184K    ./libnativehelper

    24G ./out

    18M ./bionic

    11M ./build

h参数， 表示使用「Human-readable」的输出，即是输出GB、MB方式 

## 打开主菜单

    Alt + F1
    
## 运行 
   
    Alt + F2

## 显示桌面 
   
    Ctrl + Alt + d

## 最小化当前窗口 
   
    Alt + F9

## 最大化当前窗口 
   
    Alt + F10

## 关闭当前窗口 
   
    Alt + F4

## 截取全屏 
   
    Print Screen

## 截取窗口 
   
    Alt + Print Screen

## 展示所有窗口程序 
   
    F10

## 展示当前窗口最上层程序 
   
    F11

## 展示当前窗口所有程序 
   
    F12

## 切换窗口 
   
    Alt + Tab

## 旋转3D桌面 
   
    Ctrl + Alt + 左/右箭头（也可以把鼠标放在标题栏或桌面使用滚轮切换）

## 旋转3D桌面（ 活动窗口跟随） 
   
    Ctrl + Shift + Alt + 左/右箭头

## 手动旋转3D桌面 
   
    Ctrl + Alt + 左键单击并拖拽桌面空白处

## 窗口透明/不透明 
   
    possible with the “transset” utility or Alt + 滚轮

## 放大一次 
   
    超级键 + 右击

## 手动放大 
   
    超级键 + 滚轮向上

## 手动缩小 
   
    超级键 + 滚轮向下

## 移动窗口 
   
    Alt + 左键单击

## 移动窗口时贴住边框 
   
    左键开始拖动后再 Ctrl + Alt

## 调整窗口大小 
   
    Alt + 中击

## Bring up the window below the top window 
   
    Alt + middle-click

## 动态效果减速 
   
    Shift + F10

## 水纹 
   
    按住 Ctrl+超级键

## 雨点 
   
    Shift-F9

## 桌面展开
   
    Ctrl + Alt + 下箭头，然后按住 Ctrl + Alt 和左/右箭头选择桌面

## 安装内核源码

    sudo apt-get install linux-source //会自动安装当前版本内核的源代码到 /usr/src 



