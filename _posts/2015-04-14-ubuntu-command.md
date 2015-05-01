---
layout: post
title: Ubuntu常用命令 
comments: true
---

## 屏幕截图

命令：

gnome-screenshot

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


