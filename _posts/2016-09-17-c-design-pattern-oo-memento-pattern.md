---
layout: post
title: C语言设计模式-备忘录模式
comments: true
category: C/C++
tags: [设计模式, 备忘录模式]
---

## 备忘录模式

在不破坏封装性的前提下，捕获一个对象的内部状态，并在该对象之外保存这个状态。这样以后就可将该对象恢复到原先保存的状态。

### 适用性

*	必须保存一个对象在某一个时刻的(部分)状态,这样以后需要时它才能恢复到先前的状态。

*	如果一个用接口来让其它对象直接得到这些状态，将会暴露对象的实现细节并破坏对象的封装性。

备忘录模式的起源来自于撤销的基本操作。有过word软件操作经验的朋友，应该基本上都使用过撤销的功能。举个例子，

假设你不小心删除了好几个段落的文字，这时候你应该怎么办呢？其实要做的很简单，单击一些【撤销】就可以全部搞定了。

撤销按钮给我们提供了一次反悔的机会。既然是撤销，那么我们在进行某种动作的时候，就应该创建一个相应的撤销操作？

这个撤销操作的相关定义可以是这样的。

```c

typedef struct _Action
{
    int type;
    struct _Action* next;
    void* pData;
    void (*process)(void* pData);
}Action;

typedef struct _Organizer
{
    int number;
    Action* pActionHead;
    Action* (*create)();
    void (*restore)(struct _Organizer* pOrganizer);
}Organizer;

void restore(struct _Organize* pOrganizer)
{
    Action* pHead;
    assert(NULL != pOrganizer);
    pHead = pOrganizer->pActionHead;
    pHead->process(pHead->pData);
    pOrganizer->pActionHead = pHead->next;
    pOrganizer->number--;
    free(pHeader);
    return;
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（备忘录模式）](http://blog.csdn.net/feixiaoxing/article/details/7179471)
