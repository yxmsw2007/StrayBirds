---
layout: post
title: C语言设计模式-抽象工厂模式
comments: true
category: C/C++
tags: [设计模式, 抽象工厂模式]
---

之前的工厂模式实际上是对产品的抽象。对于不同的用户需求，我们可以给予不同的产品，

而且这些产品的接口都是一致的。而抽象工厂呢？顾名思义，就是说我们的工厂是不一定的。

怎么理解呢，举个例子。

假设有两个水果店都在卖水果，都卖苹果和葡萄。其中一个水果店买白苹果和白葡萄，另外一个

水果店卖红苹果和红葡萄。所以说，对于水果店而言，尽管都在卖水果，但是两个店卖的品种不一样。 

代码如下：

```c

typedef struct _Apple
{
    void (*print_apple)();
}Apple;

typedef struct _Grape
{
    void (*print_grape)();
}Grape;

void print_white_apple()
{
    printf("white apple!\n");
}

void print_red_apple()
{
    printf("red apple!\n");
}

void print_white_grape()
{
    printf("white grape!\n");
}

void print_red_grape()
{
    printf("red grape!\n");
}

typedef struct _FruitShop
{
    Apple* (*sell_apple)();
    Grape* (*sell_grape)();
}FruitShop;

Apple* sell_white_apple()
{
    Apple* pApple = (Apple*)malloc(sizeof(Apple));
    assert(NULL != pApple);
    pApple->print_apple = print_white_apple;
    return pApple;
}

Grape* sell_white_grape()
{
    Grape* pGrape = (Grape*)malloc(sizeof(Grape));
    assert(NULL != pGrape);
    pGrape->print_grape = print_white_grape;
    return pGrape;
}

Apple* sell_red_apple()
{
    Apple* pApple = (Apple*)malloc(sizeof(Apple));
    assert(NULL != pApple);
    pApple->print_apple = print_red_apple;
    return pApple;
}

Grape* sell_red_grape()
{
    Grape* pGrape = (Grape*)malloc(sizeof(Grape));
    assert(NULL != pGrape);
    pGrape->print_grape = print_red_grape;
    return pGrape;
}

FruitShop* create_fruit_shop(int color)
{
    FruitShop* pFruitShop = (FruitShop*)malloc(sizeof(FruitShop));
    assert(NULL != pFruitShop);
    if (WHITE == color) {
        pFruitShop->sell_apple = sell_white_apple;
        pFruitShop->sell_grape = sell_white_grapde;
    }
    else
    {
        pFruitShop->sell_apple = sell_red_apple;
        pFruitShop->sell_grape = sell_red_grape;
    }
    return pFruitShop;
}

```
## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（抽象工厂模式）](http://blog.csdn.net/feixiaoxing/article/details/7089626)


