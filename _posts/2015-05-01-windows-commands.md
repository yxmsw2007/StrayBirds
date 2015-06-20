---
layout: post
title: Windows常用命令
comments: true
category: Windows
tags: [command, 命令]
---

## 命令行清屏

    $ cls

## 右键菜单添加Command

###	win7/win8

	Shift + 鼠标右键

###	修改注册表

运行中输入

	regedit

在目录"HKEY_LOCAL_MACHINE/Software/Classes/Folder/Shell"中添加"command"子项

在子项中新建一个字符串值"command"值修改为"cmd.exe /k pushd %1"

###	更多

请参考[https://www.petri.com/add_command_prompt_here_shortcut_to_windows_explorer](https://www.petri.com/add_command_prompt_here_shortcut_to_windows_explorer)

## 双屏显示

>   win + p

## 定时关机

###	win7/win8

控制面板->管理工具->计划任务->创建基本任务->任务名称(shutdown)->选择时间->程序或脚本(shutdown)

###	命令行

延时指定时间后关机

    shutdown -s -t 时间

具体时间点关机

    at 时间 shutdown -s

## 参考资料

