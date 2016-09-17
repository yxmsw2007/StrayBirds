---
layout: post
title: C语言设计模式-观察者模式
comments: true
category: C/C++
tags: [设计模式, 观察者模式]
---

## 观察者模式

定义对象间的一种一对多的依赖关系,当一个对象的状态发生改变时,所有依赖于它的对象都得到通知并被自动更新。

### 适用性

*	当一个抽象模型有两个方面,其中一个方面依赖于另一方面。将这二者封装到独立的对象中以使它们可以各自独立地改变和复用。

*	当对一个对象的改变需要同时改变其它对象,而不知道具体有多少对象有待改变。

*	当一个对象必须通知其它对象，而它又不能假定其它对象是谁。

观察者模式可能是我们在软件开发中使用得比较多的一种设计模式。为什么这么说？大家可以听我一一到来。我们知道，

在windows的软件中，所有的界都是由窗口构成的。对话框是窗口，菜单是窗口，工具栏也是窗口。那么这些窗口，

在很多情况下要对一些共有的信息进行处理。比如说，窗口的放大，窗口的减小等等。面对这一情况，观察者模式就是不错的一个选择。

```c
#define     MAX_BINDING_NUMBER  10

typedef struct _Object
{
    observer* pObserverList[MAX_BINDING_NUMBER];
    int number;
    void (*notify)(struct _Object* pObject);
    void (*add_observer)(observer* pObserver);
    void (*del_observer)(observer* pObserver);
}Object;

typedef struct _Observer
{
    Object* pObject;
    void (*update)(struct _Observer* pObserver);
}Observer;

void bind_observer_to_object(Observer* pObserver, Object* pObject)
{
    assert(NULL != pObserver && NULL != pObject);
    pObserver->pObject = pObject;
    pObject->add_observer(pObserver);
}

void unbind_observer_from_object(Observer* pObserver, Object* pObject)
{
    assert(NULL != pObserver && NULL != pObject);
    pObject->del_observer(observer* pObserver);
    memset(pObserver, 0, sizeof(Observer));
}

void notify(struct _Object* pObject)
{
    Observer* pObserver;
    int index;
    assert(NULL != pObject);
    for (index = 0; index < pObject->number; index++) {
        pObserver = pObject->pObserverList[index];
        pObserver->update(pObserver);
    }
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（观察者模式）](http://blog.csdn.net/feixiaoxing/article/details/7172478)
