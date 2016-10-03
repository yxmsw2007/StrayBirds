---
layout: post
title: C语言设计模式-责任链模式
comments: true
category: C/C++
tags: [设计模式, 责任链模式]
---

## 责任链模式

使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系。将这些对象连成一条链，并跟着这条链传递该请求，

直到有一个对象处理它为止。这一模式的想法是，给多个对象处理一个请求的机会，从而解耦发送者和接受者.

### 适用性

*	有多个的对象可以处理一个请求，哪个对象处理该请求运行时刻自动确定。

*	你是在不明确指定接收者的情况下，向多个对象中的一个提交一个请求。

*	可处理一个请求的对象集合应被动态指定。

我们平常在公司里面难免不了报销流程。但是，我们知道公司里面每一级的领导的报批额度是不一样的。

比如说，科长的额度是1000元，部长是10000元，总经理是10万元。

那么这个时候，我们应该怎么设计呢？其实可以这么理解。比如说，有人来找领导报销费用了，

那么领导可以自己先看看自己能不能报。如果费用可以顺利报下来当然最好，可是万一报不下来呢？那就只能请示领导的领导了。

```c

typedef struct _Leader
{
    struct _Leader* next;
    int account;
    int (*request)(struct _Leader* pLeader, int num);
}Leader;

void set_account(struct _Leader* pLeader, int account)
{
    assert(NULL != pLeader);
    pLeader->account = account;
}

void set_next_leader(const struct _Leader, struct _Leader* next)
{
    assert(NULL != pLeader && NULL != next);
    pLeader->next = next;
}

int request_for_manager(struct _Leader* pLeader, int num)
{
    assert(NULL != pLeader && 0 != num);
    if (num < 100000) {
        return 1;
    }
    else if (pLeader->next) {
        return pLeader->next->request(pLeader->next, num);
    }
    else
    {
        return 0;
    }
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（责任链模式）](http://blog.csdn.net/feixiaoxing/article/details/7085567)
