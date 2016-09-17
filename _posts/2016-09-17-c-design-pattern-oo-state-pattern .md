---
layout: post
title: C语言设计模式-状态模式
comments: true
category: C/C++
tags: [设计模式, 状态模式]
---

## 状态模式

定义对象间的一种一对多的依赖关系,当一个对象的状态发生改变时,所有依赖于它的对象都得到通知并被自动更新。

### 适用性

*	一个对象的行为取决于它的状态,并且它必须在运行时刻根据状态改*它的行为。

*	一个操作中含有庞大的多分支的条件语句，且这些分支依赖于该对象的状态。这个状态通常用一个或多个枚举常量表示。通常,有多个操作包含这一相同的条件结构。State模式将每一个条件分支放入一个独立的类中。这使得你可以根据对象自身的情况将对象的状态作为一个对象，这一对象可以不依赖于其他对象而独立变化。

```c

typedef struct _State
{
    void (*process)();
    struct _State*(*change_state)();
}State;

void normal_process()
{
    printf("normal process!\n");
}

struct _State* change_state()
{
    State* pNextState = NULL;
    pNextState = (struct _State*)malloc(struct _State);
    assert(NULL != pNextState);
    pNextState->process = next_process;
    pNextState->change_state = next_change_state;
    return pNextState;
}

typedef struct _Context
{
    State* pState;
    void (*change)(struct _Context* pContext);
}Context;

void context_change(struct _Context* pContext)
{
    State* pPre;
    assert(NULL != pContext);
    pPre = pContext->pState;
    pContext->pState = pPre->change_state();
    free(pPre);
    return;
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（状态模式）](http://blog.csdn.net/feixiaoxing/article/details/7185764)
