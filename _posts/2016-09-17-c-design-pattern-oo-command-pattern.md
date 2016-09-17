---
layout: post
title: C语言设计模式-命令模式
comments: true
category: C/C++
tags: [设计模式, 命令模式]
---

## 命令模式

将一个请求封装为一个对象，从而使你可用不同的请求对客户进行参数化；对请求排队或记录请求日志，以及支持可撤消的操作。
 
### 适用性

*	抽象出待执行的动作以参数化某对象。

*	在不同的时刻指定、排列和执行请求。

*	支持取消操作。

*	支持修改日志，这样当系统崩溃时，这个修改可以被重做一遍。

*	用构建在原语操作上的高层操作构造一个系统。

命令模式的目的主要是为了把命令者和执行者分开。老规矩，举个范例吧。假设李老板是一家公司的头儿，他现在让他的秘书王小姐去送一封信。

王小姐当然不会自己亲自把信送到目的地，她会把信交给邮局来完成整个投递的全过程。现在，我们就对投递者、命令、发令者分别作出定义。

```c

typedef struct _Post
{
    void (*do)(struct _Post* pPost);
}Post;

typedef struct _Command
{
    void* pData;
    void (*exe)(struct _Command* pCommand);
}Command;

void post_ext(struct _Command* pCommand)
{
    assert(NULL != pCommand);
    (Post*)(pCommand->pData)->do((Post*)(pCommand->pData));
    return;
}

typedef struct _Boss
{
    Command* pCommand;
    void (*call)(struct _Boss* pBoss);
}Boss;

void boss_call(struct _Boss* pBoss)
{
    assert(NULL != pBoss);
    pBoss->pCommand->exe(pBoss->pCommand);
    return;
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（命令模式）](http://blog.csdn.net/feixiaoxing/article/details/7184325)
