---
layout: post
title: C语言设计模式-单例模式
comments: true
category: C/C++
tags: [设计模式, 单例模式]
---

## 单例模式

单件模式的技巧就在于类的构造函数是一个私有的函数。但是类的构造函数又是必须创建的？怎么办呢？那就只有动用static函数了。

我们看到static里面调用了构造函数，就是这么简单。

```c

typedef struct _DATA
{
    void* pData;
}DATA;

void* get_data()
{
    static DATA* pData = NULL;

    if (NULL != pData) {
        return pData;
    }
    pData = (DATA*)malloc(sizeof(DATA));
    assert(NULL != pData);
    return (void*)pData;
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（之单件模式）](http://blog.csdn.net/feixiaoxing/article/details/7071202)
