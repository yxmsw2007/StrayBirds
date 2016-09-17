---
layout: post
title: C语言设计模式-访问者模式
comments: true
category: C/C++
tags: [设计模式, 访问者模式]
---

## 访问者模式

访问者模式，听上去复杂一些。但是，这种模式用简单的一句话说，就是不同的人对不同的事物有不同的感觉。比如说吧，豆腐可以做成麻辣豆腐，也可以做成臭豆腐。可是，不同的地方的人未必都喜欢这两种豆腐。四川的朋友可能更喜欢辣豆腐，江浙的人就可能对臭豆腐更喜欢一些。那么，这种情况应该怎么用设计模式表达呢？

```c

typedef struct _Tofu
{
    int type;
    void (*eat)(struct _Visitor* pVisitor, struct _Tofu* pTofu);
}Tofu;

typedef struct _Visitor
{
    int region;
    void (*process)(struct _Tofu* pTofu, struct _Visitor* pVisitor);
}Visitor;

void eat(struct _Visitor* pVisitor, struct _Tofu* pTofu)
{
    assert(NULL != pVisitor && NULL != pTofu);
    pVisitor->process(pTofu, pVisitor);
}

void process(struct _Tofu* pTofu, struct _Visitor* pVisitor)
{
    assert(NULL != pTofu && NULL != pVisitor);
    if (pTofu->type == SPICY_FOOD && pVisitor->region == WEST ||
            pTofu->type == STRONG_SMELL_FOOD && pVisitor->region == EAST) {
        printf("I like this food!\n");
        return;
    }
    printg("I hate this food!\n");
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（访问者模式）](http://blog.csdn.net/feixiaoxing/article/details/7188574)
