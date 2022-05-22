

## 什么是jsBridge？解决什么问题？

在Hybrid模式下，H5会经常需要使用Native的功能，比如打开二维码扫描、调用原生页面、获取用户信息等，同时Native也需要向Web端发送推送、更新状态等，而JavaScript是运行在单独的**JS Context**中（Webview容器、JSCore等），与原生有运行环境的隔离，所以需要有一种机制实现Native端和Web端的**双向通信**，这就是JSBridge：以JavaScript引擎或Webview容器作为媒介，通过协定协议进行通信，实现Native端和Web端双向通信的一种机制。





## JSB实现原理

Web端和Native可以类比于Client/Server模式，Web端调用原生接口时就如同Client向Server端发送一个请求类似，JSB在此充当类似于HTTP协议的角色，实现JSBridge主要是两点：

1. 将Native端原生接口封装成JavaScript接口
2. 将Web端JavaScript接口封装成原生接口



#### 互相调用

1. Native->Web

   1. 首先来说Native端调用Web端，这个比较简单，JavaScript作为解释性语言，最大的一个特性就是可以随时随地地通过解释器执行一段JS代码，所以可以将拼接的JavaScript代码字符串，传入JS解析器执行就可以，JS解析器在这里就是webView。

   示例：

   Android 4.4之前只能用**loadUrl**来实现，并且无法执行回调：

   ```java
   String jsCode = String.format("window.showWebDialog('%s')", text);
   webView.loadUrl("javascript: " + jsCode);
   复制代码
   ```

   Android 4.4之后提供了**evaluateJavascript**来执行JS代码，并且可以获取返回值执行回调：

   ```java
   String jsCode = String.format("window.showWebDialog('%s')", text);
   webView.evaluateJavascript(jsCode, new ValueCallback<String>() {
     @Override
     public void onReceiveValue(String value) {
   
     }
   });
   ```

   iOS的UIWebView使用**stringByEvaluatingJavaScriptFromString**：

   ```objective-c
   NSString *jsStr = @"执行的JS代码";
   [webView stringByEvaluatingJavaScriptFromString:jsStr];
   ```

   iOS的WKWebView使用**evaluateJavaScript**：

   ```objective-c
   [webView evaluateJavaScript:@"执行的JS代码" completionHandler:^(id _Nullable response, NSError * _Nullable error) {
     
   }];
   ```

2. Web>>native

   1. 拦截Webview请求的URL Schema

      URL Schema是类URL的一种请求格式，格式如下：

      ```
      <protocol>://<host>/<path>?<qeury>#fragment
      ```

      我们可以自定义JSBridge通信的URL Schema，比如：`jsbridge://showToast?text=hello`

      Native加载WebView之后，Web发送的所有请求都会经过WebView组件，所以Native可以重写WebView里的方法，从来拦截Web发起的请求，我们对请求的格式进行判断：

      - 如果符合我们自定义的URL Schema，对URL进行解析，拿到相关操作、操作，进而调用原生Native的方法
      - 如果不符合我们自定义的URL Schema，我们直接转发，请求真正的服务





2. 向Webview中注入JS API
   1. 这个方法会通过webView提供的接口，App将Native的相关接口注入到JS的Context（window）的对象中，一般来说这个对象内的方法名与Native相关方法名是相同的，Web端就可以直接在全局**window**下使用这个暴露的全局JS对象，进而调用原生端的方法。
   2. 在Web端直接调用这个方法即可



## 总结

Hybrid开发是目前移动端开发的主流技术选项，其中Native和Web端的双向通信就离不开**JSBridge**

其中Native调用Web端是直接在JS的Context直接执行JS代码，Web端调用Native端有两种方法，一种是基于**URL Schema**的拦截操作，另一种是向JS的Context（window）注入Api，其中注入Api是目前最好的选择。完整的调用是双向通信，需要一个回调函数，技术实现上就是使用了两次单向通信