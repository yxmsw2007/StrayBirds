---
layout: post
title: C语言设计模式-原型模式
comments: true
category: C/C++
tags: [设计模式, 原型模式]
---

## 原型模式

用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。

### 适用性

*	当一个系统应该独立于它的产品创建、构成和表示时。

*	当要实例化的类是在运行时刻指定时，例如，通过动态装载。

*	为了避免创建一个与产品类层次平行的工厂类层次时。

*	当一个类的实例只能有几个不同状态组合中的一种时。

建立相应数目的原型并克隆它们可能比每次用合适的状态手工实例化该类更方便一些。

原型模式本质上说就是对当前数据进行复制。就像变戏法一样，一个鸽子变成了两个鸽子，两个鸽子变成了三个鸽子，

就这么一直变下去。在变的过程中，我们不需要考虑具体的数据类型。为什么呢？因为不同的数据有自己的复制类型，

而且每个复制函数都是虚函数。

```c

typedef struct _DATA
{
    struct _DATA* (*copy)(struct _DATA* pData);
}DATA;

DATA data_A = {data_copy_A};

struct _DATA* data_copy_A(struct _DATA* pData)
{
    DATA* pResult = (DATA*)malloc(sizeof(DATA));
    assert(NULL != pResult);
    memmove(pResult, pData, sizeof(DATA));
    return pResult;
}

struct _DATA* clone(struct _DATA* pData)
{
    return pData->copy(pData);
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（之原型模式）](http://blog.csdn.net/feixiaoxing/article/details/7075316)
