---
layout: post
title: C语言设计模式-适配器模式
comments: true
category: C/C++
tags: [设计模式, 适配器模式]
---

## 适配器模式

将一个类的接口转换成客户希望的另外一个接口。Adapter模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

### 适用性

*	你想使用一个已经存在的类，而它的接口不符合你的需求。

*	你想创建一个可以复用的类，该类可以与其他不相关的类或不可预见的类（即那些接口可能不一定兼容的类）协同工作。

*	（仅适用于对象Adapter）你想使用一些已经存在的子类，但是不可能对每一个都进行子类化以匹配它们的接口。对象适配器可以适配它的父类接口。

现在的生活当中，我们离不开各种电子工具。什么笔记本电脑、手机、mp4啊，都离不开充电。既然是充电，那么就需要用到充电器。

其实从根本上来说，充电器就是一个个普通的适配器。什么叫适配器呢，就是把220v、50hz的交流电压编程5~12v的直流电压。

充电器就干了这么一件事情。那么用C实现怎么实现呢，关键一步就是定义一个Adapter的数据结构。

然后把所有的Adapter工作都由Adaptee来做，就是这么简单。

```c

typedef struct _Adaptee
{
    void (*real_process)(struct _Adaptee* pAdaptee);
}Adaptee;

typedef struct _Adapter
{
    void* pAdaptee;
    void (*transform_process)(struct _Adapter* pAdapter);
}Adapter;

```

## 源码下载

[SampleC-CPP](https://github.com/yxmsw2007/SampleC-CPP.git)

## 参考资料

[C语言和设计模式（适配器模式）](http://blog.csdn.net/feixiaoxing/article/details/7109936)
