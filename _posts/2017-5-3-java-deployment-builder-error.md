---
layout: post
title: Errors running builder 'DeploymentBuilder' on project 'SSH'. java.lang.NullPointerException 
comments: true
category: Java
tags: [DeploymentBuilder, SSH]
---

最近在做一个web项目，项目已部署到tomcat上，每次修改了文件点保存后就报这个错

```java
Errors running builder 'DeploymentBuilder' on project 'SSH'.
java.lang.NullPointerException
```
网上找方法，说是Myeclipse 保存文件并自动部署时候就会这样，解决办法取消自动部署

右键点击项目 ->properties -> Builders,将DeploymentBuilder勾选去除

## 参考资料

[Errors occurred during the build. Errors running builder 'DeploymentBuilder' on project '项目名' ](http://blog.csdn.net/xuejiawei123/article/details/40981187)
 

