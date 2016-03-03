---
layout: post
title: Ubuntu常用命令 
comments: true
category: Ubuntu
tags: [command, 常用命令]
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

## wc

Linux系统中的wc(Word Count)命令的功能为统计指定文件中的字节数、字数、行数，并将统计结果显示输出。

命令格式

    wc [选项]文件...

命令功能

统计指定文件中的字节数、字数、行数，并将统计结果显示输出。该命令统计指定文件中的字节数、字数、行数。如果没有给出文件名，则从标准输入读取。wc同时也给出所指定文件的总统计数。

命令参数：

* -c 统计字节数。

* -l 统计行数。

* -m 统计字符数。这个标志不能与 -c 标志一起使用。
 
* -w 统计字数。一个字被定义为由空白、跳格或换行字符分隔的字符串。
 
* -L 打印最长行的长度。
 
* -help 显示帮助信息
 
* --version 显示版本信息

统计文件个数

    ls -l | grep "^-" | wc -l

## dmesg

功能说明：显示开机信息。

语　　法：dmesg [-cn][-s <缓冲区大小>]

补充说明：kernel会将开机信息存储在ring buffer中。您若是开机时来不及查看信息，可利用dmesg来查看。开机信息亦保存在/var/log目录中，名称为dmesg的文件里。

参　　数：

　-c 　显示信息后，清除ring buffer中的内容。 

　-s<缓冲区大小> 　预设置为8196，刚好等于ring buffer的大小。 

　-n 　设置记录信息的层级。

示例

将系统启动信息保存到文件中：

    $ sudo dmesg > messages.txt

打印输出最近一次的信息：

    $ sudo dmesg | tail -f

## top

查看系统进程

    top

退出

    q

## kill

按进程ID杀死进程

    kill -9 PID

按进程名称杀死进程

    killall PNAME

## 终止命令

    ctrl + c

## 退出shell，好像也可以表示EOF

    ctrl + d 

## 将当前进程置于后台，fg还原。

    ctrl + z

## 从命令历史中找 

    ctrl + r

## 光标移到行首

    ctrl + a

## 光标移到行尾

    ctrl + e

## 清除光标到行首的字符

    ctrl + u

## 清除光标之前一个单词

    ctrl + w

## 清除光标到行尾的字符

    ctrl + k

## 交换光标前两个字符

    ctrl + t

## 粘贴前ctrl+u类命令删除的字符

    ctrl + y

## 上一条命令

    ctrl + p

## 下一条命令 

    ctrl + n

## 输入控制字符 如ctrl+v <ENTER> ,会输入^M 

    ctrl + v

## 光标后移一个字符

    ctrl + f

## 光标前移一个字符

    ctrl + b

## 删除光标前一个字符 

    ctrl + h

## 光标后移N个单词，N为1时可省略

    N+<ESC>+f

## 光标前移N个单词，N为1时可省略

    N+<ESC>+b

## 挂起当前shell

    ctrl + s
    
## 重新启用

    ctrl + q

## 从光标开始处删除到行尾。挂起的shell 

    <ESC>+d

## 上一条命令

    !!

## 倒数第N条历史命令

    !-n

## 打印上一条命令（不执行）

    !-n:p

## 最新一条含有“string”的命令

    !?string？

## 将倒数第N条命令的str1替换为str2，并执行（若不加g,则仅替换第一个）

    !-n:gs/str1/str2/




