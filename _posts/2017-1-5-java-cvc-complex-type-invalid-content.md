---
layout: post
title: cvc-complex-type.2.4.a: Invalid content was found starting with element 'description' 
comments: true
category: Java
tags: [cvc-complex-type, Invalid content]
---

导入工程后在spring-form.tld中报这个错

> cvc-complex-type.2.4.a: Invalid content was found starting with element 'description'. One of '{"http://java.sun.com/xml/ns/j2ee":name}' is expected

网上的解决方法

*    在taglib标签前加上<jsp-config></jsp-config>标签

```xml

<?xml version="1.0" encoding="UTF-8"?>
<jsp-config>
    <taglib xmlns="http://java.sun.com/xml/ns/j2ee" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-jsptaglibrary_2_0.xsd" 
        version="2.0">  
        ...
    </taglib>
</jsp-config>

```

*    将“http://www.springmodules.org/schema/cache/springmodules-cache.xsd http://www.springmodules.org/schema/cache/springmodules-ehcache.xsd”这段话加入到xml文件的"xmlns:xsi="的标签中

```xml

<?xml version="1.0" encoding="UTF-8"?>
<taglib xmlns="http://java.sun.com/xml/ns/j2ee" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance http://www.springmodules.org/schema/cache/springmodules-cache.xsd http://www.springmodules.org/schema/cache/springmodules-ehcache.xsd" 
        xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee http://java.sun.com/xml/ns/j2ee/web-jsptaglibrary_2_0.xsd" 
        version="2.0">
        ...
</taglib>

```

## 参考资料

