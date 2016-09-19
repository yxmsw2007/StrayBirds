---
layout: post
title: C语言设计模式-代理模式
comments: true
category: C/C++
tags: [设计模式, 代理模式]
---

## 代理模式

为其他对象提供一种代理以控制对这个对象的访问。

### 适用性

*	远程代理（RemoteProxy）为一个对象在不同的地址空间提供局部代表。

*	虚代理（VirtualProxy）根据需要创建开销很大的对象。

*	保护代理（ProtectionProxy）控制对原始对象的访问。

*	智能指引（SmartReference）取代了简单的指针，它在访问对象时执行一些附加操作。

代理模式是一种比较有意思的设计模式。它的基本思路也不复杂。举个例子来说，以前在学校上网的时候，

并不是每一台pc都有上网的权限的。比如说，现在有pc1、pc2、pc3，但是只有pc1有上网权限，

但是pc2、pc3也想上网，此时应该怎么办呢？

此时，我们需要做的就是在pc1上开启代理软件，同时把pc2、pc3的IE代理指向pc1即可。这个时候，

如果pc2或者pc3想上网，那么报文会先指向pc1，然后pc1把Internet传回的报文再发给pc2或者pc3。

这样一个代理的过程就完成了整个的上网过程

```c

typedef struct _PC_Client
{
    void (*request)();
}PC_Client;

void ftp_request()
{
    printf("request from ftp!\n");
}

void http_request()
{
    printf("request from http!\n");
}

void smtp_request()
{
    printf("request from smtp!\n");
}

typedef struct _Proxy
{
    PC_Client* pClient;
}Proxy;

void process(Proxy* pProxy)
{
    assert(NULL != pProxy);
    pProxy->pClient->request();
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（代理模式）](http://blog.csdn.net/feixiaoxing/article/details/7100660)
