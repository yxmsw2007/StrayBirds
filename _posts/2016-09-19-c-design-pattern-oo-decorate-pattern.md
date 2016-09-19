---
layout: post
title: C语言设计模式-装饰模式
comments: true
category: C/C++
tags: [设计模式, 装饰模式]
---

## 装饰模式

动态地给一个对象添加一些额外的职责。就增加功能来说，Decorator模板相比生成子类更为灵活。

### 适用性

*	在不影响其他对象的情况下，以动态、透明的方式给单个对象添加职责。

*	处理那些可以撤消的职责。

*	当不能采用生成子类的方法进行扩充时。

装饰模式是比较好玩，也比较有意义。其实就我个人看来，它和责任链还是蛮像的。只不过一个是比较判断，

一个是迭代处理。装饰模式就是那种迭代处理的模式，关键在哪呢？我们可以看看数据结构。

```c

typedef struct _Object
{
    struct _Object* prev;
    void (*decorate)(struct _Object* pObject);
}Object;

void decorate(struct _Object* pObject)
{
    assert(NULL != pObject->prev);
    if (NULL != pObject) {
        pObject->prev->decorate(pObject->prev);
    }
    printf("normal decorate!\n");
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（装饰模式）](http://blog.csdn.net/feixiaoxing/article/details/7107312)
