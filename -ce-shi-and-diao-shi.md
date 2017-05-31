#  测试 & 调试
  
当你在制作应用的时候，有点小错误和发生点小报错的啥的是很正常的。有时候错误不明显，所以知道怎样去追踪错误是非常重要的。  
本节课将会研究如何最好的去调试Ionic 2应用，但是不会讲什么是调试或者如何使用调试工具（例如，查看源代码，设置断点，监听网络请求等等）。如果你不熟悉基于浏览器的Javascript调试，那么强烈建议一定要先你看看[这个](https://developer.chrome.com/devtools/docs/javascript-debugging)。  
  
## 浏览器调试
开发应用的时候第一发通常是桌面浏览器。能够通过浏览器直接调试甚至实时加载是个很厉害的事情，你可以马上就看到你的代码变更迭代非常快。  
重要的一点是需要时刻记住**他不代表在真机上的运行效果**。大部分情况下，在浏览器上什么效果，在真机上就是什么效果，但是有可能一些Cordova插件的原因会有所不同，因为他们不能直接在浏览器里面测试。  
正确的方法是在浏览器里面测试个大概，当所有东西测试得差不多的时候，在到真机上面测试以使所有事物运行正常。  
  
## iOS调试
想要在真实iOS设备上调试的话，先得运行如下命令：
```shell
npm -g install ios-sim ios-deploy
```
他将会安装iOS模拟器（用来做电脑上模拟iOS设备）和*ios-deploy*将用于在把应用通过USB部署到设备上去。  
一旦设置完成，只需要在项目目录下运行这个命令：
```shell
ionic run ios
```
应用就会被部署到你的设备上去（没有设备的话就是部署到模拟器上）。如果你是第一次运行此命令，那么可能要运行两次才能正常工作。  
一旦应用在设备上运行起来，你就可以在电脑上通过Safari Dev Tools来调试了。只要打开**Safari**然后去到：  
*Develop > iPhone > index.html*  
![Safari](/imgs/7.1.1.jpg)  
如果Develop菜单没有出来的话，你需要先去菜单栏的menu启用他：*Safari > Preferences > Advances > Show Develop*  
一旦在Safari中打开了**index.html**可以看到这样的调试画面：  
![Safari](/imgs/7.1.2.jpg)  
**重要：**这个方法只会在Mac上有用。如果你没有Mac的话，那么你可以通过[GapDebug](https://www.genuitec.com/products/gapdebug/)来安装和调试iOS应用。用这个方法的话首先需要生成应用的*.ipa*（我们会在**构建iOS应用**课程里面讨论）然后直接安装他。  
使用**Test Flight**测试最终构建办也是个不错的方法。  
  
## Android 调试
在Android上调试跟添加需要调试的目标设备一样简单，运行：
```shell
ionic run android
```
然后在你的桌面浏览器（Chrome）中可以去这个地址：*chrome://inspect/#devices*  
![Chrome](/imgs/7.1.3.jpg)  
然后点击需要调试的设备的‘Inspect’，我们就可以看到调试工具了：  
![Chrome](/imgs/7.1.4.jpg)  
**重点：**需要激活设备上的通过USB调试选项。每个设备上激活USB调试的方法可能不大一样，所以尽管去Google“你的设备名字 激活usb调试”就可以了。  
  
## 贴士 & 普通错误
调试应用的难易度基本来自你多年的开发经验累积，这里给你一些调试的小技巧和小贴士来帮助你调试Ionic 2应用。  
### 启动白屏或者一片空白？
这种事情经常发生，原因通常是在设备上启动的时候发生错误。有时候你启动应用之看到一片空白，即使是打开调试工具也看不到错误发生。这可能是因为在启动调试器之前就报错了，然后break【译者：跳出？不大合适】了应用。所以，如果你看到类似的情况，确保调试器准备好了，然后点击调试器的刷新按钮，在Safari中，是这个样子的：  
![Safari](/imgs/7.1.5.jpg)  
他会在准备好了调试器的情况下重新加载应用，意味着你不会漏掉任何一个开始的错误。90%的情况下会发现一些Javascript错误，修改之后就应用就可以正常工作了。  
### 调试器
希望你知道断点对调试应用多么重要，如果不知道的话，我再次强烈建议你读一下[这个](https://developers.google.com/web/tools/chrome-devtools/?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3)。  
你可以打开‘Source’标签页手动添加一些断点，但是你也可以在任何地方加这个小小的关键字：  
```javascript
debugger;
```
他会使应用在这个点暂停。（同时会打开Dev Tools）  
### 404错误
你的ap是不是在浏览器中正常工作但是在真机上运行的时候遇到404错误？确认一下是否包含一Whitelist插件：
```shell
ionic plugin add cordova-plugin-whitelist
```
以及在**index.html**中是否有一个正确的Content Security Policy（CSP）元标签：
```html
<meta http-equiv="Content-Security-Policy" content="font-src * data:; img-src
    * data:; default-src * 'unsafe-eval' 'unsafe-inline'">
```
### 真机上插件不工作
第一件事情肯定是确保安装了插件：
```shell
ionic plugin add [plugin name]
```
说起来可能有点蠢，但是需要双重检查保证安装成功：
```shell
ionic plugin ls
```
这个命令将会列出当前已安装的所有插件，我还是经常会忘记安装插件。如果你安装好了插件，也要确保没有过早去访问插件。如果你在设备住呢比好之前去尝试访问插件的话，也就是在这个之前：
```javascript
platform.ready().then(() => {
});
```
那么肯定是不正常工作的。最后，如果你用尽所有办法依然无法工作的情况下，你可以试着移除插件：
```shell
ionic plugin rm [plugin name]
```
然后重新添加插件：
```shell
ionic plugin add [plugin name]
```
调试程序是一个苦难且令人沮丧的任务，特别是在真机上调试的时候，但是随着开发经验的增加，你就更容易感觉到问题出现在哪里，开发流程会越来越简单。如果你卡在一个错误上的话，可以随时去[Ionic 论坛](https://forum.ionicframework.com/)求助，只要尽量详细提供错误信息以及你尝试过的方法。  
  
## 通过GapDebug安装应用
  
如果你是使用PhoneGap构建的，并且有*.ipa*或者*.apk*文件那么你就可以使用[GapDebug](https://www.genuitec.com/products/gapdebug/)对他们进行测试。有很多方法可以安装他们 -- 可以用iTunes来安装 .ipa 文件或者你可以使用**adb**来安装 .apk 文件 -- 但是用GapDebug就简单多了，GapDebug也提供了大量牛逼的调试工具（尽管如此，如果你在找更高级的调试方法我建议你使用**adb**）。去这个[网站](https://www.genuitec.com/products/gapdebug/)下载和安装GapDebug就可以了。安装完成后，系统托盘上就可以看到了。  
在你安装好GapDebug之后，先确保通读**GapDebug First-Time Configuration and Setup** -- 因为在让GapDebug和你的iOS或者Android设备正常协作之前有一些事情需要去做。  
所以东西设置好之后就可以把设备连接到电脑了，打开GapDebug，将应用文件（.ipa或者.apk）通过GapDebug拖放到设备中。这不仅是在设备上安装应用超快的途径同时他给你提供了一些非常有用的调试工具（实际是跟你已经熟悉了的浏览器调试工具一样的）。一旦通过GapDebug安装好了你的应用，直接在GapDebug里面点击应用就可以调出调试工具了。  
