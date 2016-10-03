---
layout: post
title: C语言设计模式-外观模式
comments: true
category: C/C++
tags: [设计模式, 外观模式]
---

## 外观模式

为子系统中的一组接口提供一个一致的界面，Facade模式定义了一个高层接口，这个接口使得这些子系统更加容易使用。

### 适用性

*	当你要为一个复杂子系统提供一个简单接口时。子系统往往因为不断演化而变得越来越复杂。大多数模式使用时都会产生更多更小的类。这使得子系统更具可重用性，也更容易对子系统进行定制，但这也给那些不需要定制子系统的用户带来一些使用上的困难。

*	Facade可以提供一个简单的缺省视图，这一视图对大多数用户来说已经足够，而那些需要更多的可定制性的用户可以越过facade层。

*	客户程序与抽象类的实现部分之间存在着很大的依赖性。引入facade将这个子系统与客户以及其他的子系统分离，可以提高子系统的独立性和可移植性。

*	当你需要构建一个层次结构的子系统时，使用facade模式定义子系统中每层的入口点。如果子系统之间是相互依赖的，你可以让它们仅通过facade进行通讯，从而简化了它们之间的依赖关系。

以前，我们逛街的时候吃要到小吃一条街，购物要到购物一条街，看书、看电影要到文化一条街。那么有没有这样的地方，

既可以吃喝玩乐，同时相互又靠得比较近呢。其实，这就是悠闲广场，遍布全国的万达广场就是干了这么一件事。

```c

typedef struct _FoodStreet
{
    void (*eat)();
}FoodStreet;

typedef struct _ShopStreet
{
    void (*buy)();
}ShopStreet;

void buy()
{
    printf("buy here!\n");
}

typedef struct _BookStreet
{
    void (*read)();
}BookStreet;

void read()
{
    printf("read here!\n");
}

typedef struct _Plaza
{
    FoodStreet* pFoodStreet;
    ShopStreet* pShopStreet;
    BookStreet* pBookStreet;

    void (*play)(struct _Plaza* pPlaza);
}Plaza;

void play(struct _Plaza* pPlaza)
{
    assert(NULL != pPlaza);
    pPlaza->pFoodStreet->eat();
    pPlaza->pShopStreet->buy();
    pPlaza->pBookStreet->read();
}

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（外观模式）](http://blog.csdn.net/feixiaoxing/article/details/7100334)
