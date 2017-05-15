译者于2017-5-2日看完全书，基本跑通所有代码，除IBM PouchDB部分外。  

译者的 **ionic info** 如下：

```
cordova cli:6.5.0
Ionic CLI Version:2.2.3
Ionic App Lib Version:2.2.1
os:Windows 7
Node Version:v6.9.4

```

当前版本与作者成书版本有所不同，
例如作者成书的时候plugin皆以new关键字新建实例来使用，而译者学习的时候使用的版本则是以service的方式直接注入到需要用到类的constructor中去使用；  
又如，所有的native api都已分包，具体可以参考官方文档用法。  
  
用到的一些名词：（更新与2017/5/15）
* default 默认
* handler 操作器（由于昨天读文章看到一般翻译为：句柄，所以才会有这里的名词约定）
* method：方法
* function：函数
* native：本地
* local：本地（会有备注和上面的进行区分）
* functionality：功能
* feature：特性
* item：条目，列表项
* provider：提供者

译者当前学习完后的可用代码在此，仅限与代码部分：

[source_code:ionic v3.1.1](https://github.com/AdoBeatTheWorld/build_ionic2_app_chinese/tree/master/source_code)