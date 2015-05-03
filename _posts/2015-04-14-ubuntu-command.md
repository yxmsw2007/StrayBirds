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
