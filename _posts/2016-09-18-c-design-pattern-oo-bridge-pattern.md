---
layout: post
title: C语言设计模式-桥接模式
comments: true
category: C/C++
tags: [设计模式, 桥接模式]
---

## 桥接模式

将抽象部分与它的实现部分分离，使它们都可以独立地变化。

### 适用性

*	你不希望在抽象和它的实现部分之间有一个固定的绑定关系。例如这种情况可能是因为，在程序运行时刻实现部分应可以做选择或者切换。

*	类的抽象以及它的实现都应该可以通过生成子类的方法加以扩充。这时Bridge模式使你可以对不同的抽象接口和实现部分进行组合，并分别对它们进行扩充。

*	对一个抽象的实现部分的修改应对客户不产生影响，即客户的代码不必重新编译。

*	正如在意图一节的第一个类图中所示的那样，有许多类要生成。这样一种类层次结构说明你必须将一个对象分解成两个部分。

*	若想在多个对象间共享实现（可能使用引用计数），但同时要求客户并不知道这一点。

在以往的软件开发过程中，我们总是强调模块之间要低耦合，模块本身要高内聚。那么，可以通过哪些设计模式来实现呢？桥接模式就是不错的一个选择。

我们知道，在现实的软件开发过程当中，用户的要求是多种多样的。比如说，有这么一个饺子店吧。假设饺子店原来只卖肉馅的饺子，

可是后来一些吃素的顾客说能不能做一些素的饺子。听到这些要求的老板自然不敢怠慢，所以也开始卖素饺子。之后，又有顾客提出，

现在的肉馅饺子只有猪肉的，能不能做点牛肉、羊肉馅的饺子？一些只吃素的顾客也有意见了，他们建议能不能增加一些素馅饺子的品种，

什么白菜馅的、韭菜馅的，都可以做一点。由此看来，顾客的要求是一层一层递增的。关键是我们如何把顾客的要求和我们的实现的接口进行有效地分离呢？

```c

typedef struct _MeatDumpling
{
    void (*make)();
}MeatDumpling;

typedef struct _NormalDumpling
{
    void (*make)();
}NormalDumpling;

typedef struct _DumplingRequest
{
    int type;
    void* pDumpling;
}DumplingRequest;

void buy_dumpling(DumplingRequest* pDumplingRequest)
{
    assert(NULL != pDumplingRequest);
    if (MEAT_TYPE == pDumplingRequest->type) {
        (MeatDumpling*)(pDumplingRequest->pDumpling)->make();
    }
    else
    {
        (NormalDumpling*)(pDumplingRequest->pDumpling)->make();
    }
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（桥接模式）](http://blog.csdn.net/feixiaoxing/article/details/7171030)
