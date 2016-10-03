---
layout: post
title: C语言设计模式-迭代器模式
comments: true
category: C/C++
tags: [设计模式, 迭代器模式]
---

## 迭代器模式

给定一个语言，定义它的文法的一种表示，并定义一个解释器，这个解释器使用该表示来解释语言中的句子。

### 适用性

*	访问一个聚合对象的内容而无需暴露它的内部表示。

*	支持对聚合对象的多种遍历。

*	为遍历不同的聚合结构提供一个统一的接口(即,支持多态迭代)。

```c

typedef struct _Container
{
    int *pData;
    int size;
    int length;

    Iterator* (*create_new_iterator)(struct _Container* pContainer);
    int (*get_first)(struct _Container* pContainer);
    int (*get_last)(struct _Container* pContainer);
}Container;

typedef struct _Iterator
{
    void* pVector;
    int index;

    int (*get_first)(struct _Iterator* pIterator);
    int (*get_last)(struct _Iterator* pIterator);
}Iterator;

int vector_get_first(struct _Container* pContainer)
{
    assert(NULL != pContainer);
    return pContainer->pData[0];
}

int vector_get_last(struct _Container* pContainer)
{
    assert(NULL != pContainer);
    return pContainer->pData[pContainer->size - 1];
}

int vector_iterator_get_first(struct _Iterator* pIterator)
{
    Container* pContainer;
    assert(NULL != pIterator && NULL != pIterator->pVector);
    pContainer = (struct _Container*)(pIterator->pVector);
    return pContainer->get_first(pContainer);
}

int vector_iterator_get_last(struct _Iteratro* pIterator)
{
    Container* pContainer;
    assert(NULL != pIterator && NULL != pIteratro->pVector);
    pContainer = (struct _Container*)(pIterator->pVector);
    return pContainer->get_last(pContainer);
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（迭代器模式）](http://blog.csdn.net/feixiaoxing/article/details/7093577)
