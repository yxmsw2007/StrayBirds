---
layout: post
title: C语言设计模式-组合模式
comments: true
category: C/C++
tags: [设计模式, 组合模式]
---

## 组合模式

将对象组合成树形结构以表示"部分-整体"的层次结构。"Composite使得用户对单个对象和组合对像的使用具有一致性。"

### 适用性

*	你想表示对象的部分-整体层次结构。

*	你希望用户忽略组合对象与单个对象的不同，用户将统一地使用组合结构中的所有对象。

类似二叉树结构

```c

typedef struct _Object
{
    struct _Object** ppObject;
    int number;
    void (*operate)(struct _Object* pObject);
}Object;

void operate_of_parent(struct _Object* pObject)
{
    int index;
    assert(NULL != pObject);
    assert(NULL != pObject->ppObject && 0 != pObject->number);
    for (index = 0; index < pObject->number; index++) {
        pObject->ppObject[index]->operate(pObject->ppObject[index]);
    }
}

void operate_of_child(struct _Object* pObject)
{
    assert(NULL != pObject);
    printf("child node!\n");
}

void process(struct Object* pObject)
{
    assert(NULL != pObject);
    pObject->operate(pObject);
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（之组合模式）](http://blog.csdn.net/feixiaoxing/article/details/7078836)
