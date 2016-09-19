---
layout: post
title: C语言设计模式-中介者模式
comments: true
category: C/C++
tags: [设计模式, 中介者模式]
---

## 中介者模式

用一个中介对象来封装一系列的对象交互。中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。

### 适用性

*	当创建复杂对象的算法应该独立于该对象的组成部分以及它们的装配方式时。

*	一个对象引用其他很多对象并且直接与这些对象通信,导致难以复用该对象。

*	想定制一个分布在多个类中的行为，但又不想生成太多的子类。

中介者模式，听上去有一点陌生。但是，只要我给朋友们打个比方就明白了。早先自由恋爱没有现在那么普遍的时候，

男女之间的相识还是需要通过媒婆之间才能相互认识。男孩对女方有什么要求，可以通过媒婆向女方提出来；当然，

女方有什么要求也可以通过媒婆向男方提出来。所以，中介者模式在我看来，就是媒婆模式。

```c

typedef struct _Mediator
{
    People* man;
    People* woman;
}Mediator;

typedef struct _People
{
    Mediator* pMediator;
    void (*request)(struct _People* pPeople);
    void (*process)(struct _People* pPeople);
}People;

void man_request(struct _People* pPeople)
{
    assert(NULL != pPeople);
    pPeople->pMediator->woman->process(pPeople->pMediator->woman);
}

void woman_request(struct _People* pPeople)
{
    assert(NULL != pPeople);
    pPeoplr->pMediator->man->process(pPeople->pMediator->man);
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（中介者模式）](http://blog.csdn.net/feixiaoxing/article/details/7169363)
