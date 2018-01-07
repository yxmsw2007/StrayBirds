---
layout: post
title: vs 判断dll是托管还是非托管   
comments: true
category: Windows
tags: [dll, 托管, 非托管]
---

使用vs的dumpbin命令，如下：

```shell

dumpbin -dependents *.exe/dll

```

如果列表中包含mscoree.dll的就是托管的 

有时候我们想查看一个exe引用了哪些动态库，或者我们想看某个动态库包含哪些接口函数，这个时候可以使用dumpbin.exe工具：

1. 输入Dumpbin -imports calldll.exe查看它的输入信息，可以看到它加载了***.dll
2. 输入dumpbin –exports dlltest.dll,列出导出函数

开始->所有程序->Microsoft Visual Studio 2010->Visual Studio Tools ->“Visual Studio 命令提示(2010)”后，

就像普通的cmd一样的命令行环境，就可以正常使用VS的一些工具，其中就包括dumpbin。

输入如下命令，查看dll信息：

```

D:\Program Files (x86)\Microsoft Visual Studio 10.0\VC>
dumpbin -exports D:\WorkSpace\DLLTutorial\Debug\DLLTutorial.dll

```

输出如下：

![05095112_zAel](/images/2017-4-28-vs-dll-managed-and-unmanaged/05095112_zAel.png)

其中可以看到，我们在DLL中写的两个函数：
```shell

 1    0 000110FA Add = @ILT+245(_Add)
 2    1 00011208 Function = @ILT+515(_Function)

```
 
## 参考资料

[VS自带工具：dumpbin的使用](http://www.cnblogs.com/dyllove98/archive/2013/06/20/3146922.html)

[判断dll是托管还是非托管，请教高手](http://bbs.csdn.net/topics/330234201)


