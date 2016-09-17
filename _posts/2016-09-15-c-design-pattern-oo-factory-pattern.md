---
layout: post
title: C语言设计模式-工厂模式
comments: true
category: C/C++
tags: [设计模式, 工厂模式]
---

工厂模式是比较简单，也是比较好用的一种方式。根本上说，工厂模式的目的就根据不同的要求输出不同的产品。

比如说吧，有一个生产鞋子的工厂，它能生产皮鞋，也能生产胶鞋。如果用代码设计，应该怎么做呢？

```c

#define LEATHER_TYPE 0x01
#define RUBBER_TYPE  0x02

typedef struct _Shoe
{
    int type;
    void (*print_shoe)(struct _Shoe*);
}Shoe;

void print_leather_shoe(struct _Shoe* pShoe)
{
    assert(NULL != pShoe);
    printf("This is a leather show!\n");
}

void print_rubber_shoe(struct _Shoe* pShoe)
{
    assert(NULL != pShoe);
    printf("This is a rubber shoe!\n");
}

Shoe* manufacture_new_shoe(int type)
{
    assert(LEATHER_TYPE == type || RUBBER_TYPE == type);

    Shoe* pShoe = (Shoe*)malloc(sizeof(Shoe));
    assert(NULL != pShoe);

    memset(pShoe, 0, sizeof(Shoe));
    if (LEATHER_TYPE == type) {
        pShoe->type == LEATHER_TYPE;
        pShoe->print_shoe = print_leather_shoe;
    }
    else
    {
        pShoe->type == RUBBER_TYPE;
        pShoe->print_shoe = print_rubber_shoe;
    }
    return pSHoe;
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（工厂模式）](http://blog.csdn.net/feixiaoxing/article/details/7081243)


