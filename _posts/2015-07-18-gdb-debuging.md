---
layout: post
title: GDB常用命令介绍 
comments: true
category: Tools 
tags: [GDB, 调试工具]
---

## 编译 

gcc -g -W -Wall -o 输出文件名.so -c 源代码文件名.c -I 源文件头文件名.h

>   -g，生成供调试用的可执行文件

>   -W，在编译中开启一些额外的警告（warning）信息。-Wall，将所有的警告信息全开。

>   -o, 指定输出文件名

## 启动GDB

gdb 文件名 （进程ID|core）

## 常用命令介绍

### 通用命令

执行上次执行的命令：[Enter]

运行shell指令：shell 命令

### 附加调试程序

装载指定的可执行文件进行调试：file 文件名

调试一个正在运行的进程：attach 进程ID

停止调试当前正在调试有进程：detach

> 注：如果调试程序在启动GDB的时候已加载则不用在加载

### 运行/终止调试程序

运行程序：run（r）

异常终止在gdb控制下运行的程序：kill

设置程序参数：set args

显示程序参数：show args

### 断点

设置断点：break（tbreak临时断点，临时断点只有效一次） 行号|函数名

查看断点信息：info b

设置条件断点：break（tbreak临时断点，临时断点只有效一次） 行号|函数名 if 表达式

修改断点条件：condition 断点编号 if 条件

清除断点条件：condition 断点编号

在程序中设置监测点（即数据断点）：watch 变量名|表达式

查看观察点信息：info watchpoints

打印出当前的函数中的异常处理信息：info catch

忽略断点N次：ignore 断点号 次数

禁用断点：disable 断点编号（或无表示所有）

启用断点：enable 断点编号

清除断点：clear 行号|函数名（与break对应）

清除断点：delete 断点编号（或无表示所有）

### 命令集

例1：在设置断点的时候设定命令集

每个指令以行的形式设置，每行输入一个gdb指令，结束的时候一end结束。

```sh

     break foo if x>0
     commands       //指令集设置命令
     silent         //断点触发时不打印断点信息
     printf "x is %d\n",x
     cont
     end            //指令集设置结束时必须用end结束

```
 
例2：为某个指定的断点设置指令集

```sh

     commands 403    
     silent
     set x = y + 4
     cont
     end

```

### 查看堆栈

查看堆栈信息：bt

选择帧栈：frame 栈帧序号（与bt配合使用）

查看栈帧信息：info frame n

跳到调用栈中的下一个父帧：up

引向相反方向：down

### 单步调试

单步执行：step（s）或next（n）

无条件恢复程序的执行：continue（c）

跳转执行：jump 行号|函数名|内存地址

### 信号

给正在运行的程序发信号：signal

### 代码调试

查看源代码：list 行号|函数名|+|-|n,m

设置显示源代码行数：set listsize count

查看源代码显示行数：show listsize

查看变量类型：whatis 变量名

查看函数参数信息：info args

查看函数中临时变量信息：info locals

查看寄存器信息：info registers

打印：printf（p） 变量|*数组名@查看长度|数组名[n]@查看长度

显示文件中包含指定串的下一行：search（reverse-search反向查找） text

给变量赋值：set variable 变量=值

调用和执行一个函数：call name

用finish(fin, 跳出函数，正常执行完程序)或until（u,跳出循环）恢复或return（强制返回）

  


