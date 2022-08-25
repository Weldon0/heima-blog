---
title: 🌹3、微信小程序第三天
---



## [#](https://weldon0.github.io/wxxcx-docs/day03/#_1、学习目标)1、学习目标

------

| 知识点名称           | 知识点内容                                                   | 难度系数 | 要求程度 |
| -------------------- | ------------------------------------------------------------ | -------- | -------- |
| 页面导航             | 声明式导航、编程式导航、导航传参                             | 3星      | 掌握     |
| 页面事件             | 下拉刷新、上拉触底、上拉触底案例、自定义编译模式             | 3星      | 掌握     |
| 生命周期             | 生命周期分类、应用生命周期、页面生命周期                     | 3星      | 掌握     |
| wxs学习              | 认识wxs及应用场景、掌握基础语法、掌握使用方式、注意要点      | 4星      | 了解     |
| 本地生活案例（列表） | 导航跳转列表并传参、获取数据，渲染数据、滚动分页、下拉刷新、wxs处理手机号 | 4星      | 掌握     |

## [#](https://weldon0.github.io/wxxcx-docs/day03/#_2、页面导航)2、页面导航

思考

❓ Vue 中实现导航跳转的方式有几种，分别是什么？

Vue.use(VueRouter)做了什么事情

<details class="custom-block details" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7;">Vue 中实现导航跳转的方式有 2 种</p><ul style="padding-left: 1.2em; line-height: 1.7;"><li>声明式导航<span>&nbsp;</span><code style="font-family: source-code-pro, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; color: rgb(71, 101, 130); padding: 0.25rem 0.5rem; margin: 0px; font-size: 0.85em; background-color: rgba(27, 31, 35, 0.05); border-radius: 3px;">&lt;router-link to="/地址"&gt;&lt;/router-link&gt;</code></li><li>编程式导航<span>&nbsp;</span><code style="font-family: source-code-pro, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; color: rgb(71, 101, 130); padding: 0.25rem 0.5rem; margin: 0px; font-size: 0.85em; background-color: rgba(27, 31, 35, 0.05); border-radius: 3px;">router.push('/地址')</code></li></ul></details>

### [#](https://weldon0.github.io/wxxcx-docs/day03/#_2-1、认识导航)2.1、认识导航

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#什么是页面导航)什么是页面导航

页面导航指的是页面之间的相互跳转，例如，在浏览器中实现页面导航的方式有如下两种：

```text
a 标签
location.href
```

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#实现导航的两种方式)实现导航的两种方式

##### [#](https://weldon0.github.io/wxxcx-docs/day03/#声明式导航)**声明式导航**

在页面上声明一个 `<navigator>` 导航组件通过点击 `<navigator>` 组件实现页面跳转，具体参见文档 [【组件=>导航=>navigator】(opens new window)](https://developers.weixin.qq.com/miniprogram/dev/component/navigator.html)

##### [#](https://weldon0.github.io/wxxcx-docs/day03/#编程式导航)**编程式导航**

调用小程序的导航 API，实现页面的跳转,具体参见文档 [【api=>路由】(opens new window)](https://developers.weixin.qq.com/miniprogram/dev/api/route/wx.switchTab.html)

### [#](https://weldon0.github.io/wxxcx-docs/day03/#_2-2、声明式导航)2.2、声明式导航

> tabBar页面/非tabBar页面

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#导航到-tabbar-页面)导航到 tabBar 页面

tabBar 页面指的是被配置为 tabBar 的页面 在使用 `<navigator>` 组件跳转到指定的 tabBar 页面时，需要指定 `url` 属性和 `open-type`属性，例如：

```html
<navigator url="/pages/home/home" open-type="switchTab">跳转到tabBar页面</navigator>
```

- `url` 表示要跳转的 页面的地址，必须以 `/`开头
- `open-type` 表示 跳转的方式 ，必须为 `switchTab`

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#导航到非-tabbar-页面)导航到非 tabBar 页面

非 tabBar 页面 指的是没有被配置为 tabBar 的页面 在使用`<navigator>` 组件跳转到普通的非tabBar 页面时，需要指定 `url` 属性和 `open-type`属性，例如：

```html
<navigator url="/pages/event/event" open-type="navigate">跳转到 非tabBar页面</navigator>
```

- `url` 表示要跳转的 页面的地址，必须以 `/`开头
- `open-type` 表示 跳转的方式 ，必须为 `navigate`

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#后退导航)后退导航

如果要后退到上一页面或多级页面，则需要指定 `open-type` 属性和 `delta` 属性，例如：

```html
<navigator open-type="navigateBack">后退导航</navigator>
```

- `open-type` 的值必须是 `navigateBack`，表示要进行后退导航
- `delta` 的值必须是数字，表示要后退的层级
- 后退导航不用配置`url`
- 后退导航在`tabBar`页面是无效的

### [#](https://weldon0.github.io/wxxcx-docs/day03/#_2-3、编程式导航)2.3、编程式导航

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#导航到-tabbar)导航到 tabBar

调用`wx.switchTab({...})`方法，可以跳转到 tabBar 页面，其中 Object 参数对象的属性列表如下：

| 属性     | 类型     | 是否必选 | 说明                                              |
| -------- | -------- | -------- | ------------------------------------------------- |
| url      | string   | 是       | 需要跳转的 tabBar 页面的路径 ，路径后不能带参数。 |
| success  | function | 否       | tab跳转成功的回调函数                             |
| fail     | function | 否       | tab跳转失败的回调函数                             |
| complete | function | 否       | tab跳转结束的回调函数（调用成功、失败都会执行）   |

编程式导航到 `tabBar` 页面示例如下：

```html
<!--页面wxml文件中-->
<button bindtap="tabFn">跳转到tabBar页面</button>
```

```js
// 页面js文件中
tabFn(){
    wx.switchTab({
        url: "/pages/home/home"
    })
}
```

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#导航到非-tabbar-页面-2)导航到非 tabBar 页面

调用`wx.navigateTo({...})`方法，可以跳转到非 tabBar 的页面。其中 Object 参数对象的属性列表如下

| 属性     | 类型     | 必填 | 说明                                                    |
| -------- | -------- | ---- | ------------------------------------------------------- |
| url      | string   | 是   | 需要跳转的应用内非tabBar 的页面的路径, 路径后可以带参数 |
| success  | function | 否   | 接口调用成功的回调函数                                  |
| fail     | function | 否   | 接口调用失败的回调函数                                  |
| complete | function | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）        |

编程式导航到非 `tabBar` 页面示例如下：

```html
<!--页面wxml文件中-->
<button bindtap="tabFun">跳转到非 tabBar页面</button>
```

```js
// 页面js文件中
tabFun(){
    wx.navigateTo({
        url:"/pages/event/event"
    })
}
```

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#编程式导航-后退导航)编程式导航 – 后退导航

调用`wx.navigateBack({ ... })` 方法，可以返回上一页面或多级页面。其中 Object 参数对象可选的属性列 表如下：

| 属性     | 类型     | 默认值 | 必填 | 说明                                                   |
| -------- | -------- | ------ | ---- | ------------------------------------------------------ |
| delta    | number   | 1      | 否   | 返回的页面数，如果delta 大于现有页面数，则返回到首页。 |
| success  | function |        | 否   | 接口调用成功的回调函数                                 |
| fail     | function |        | 否   | 接口调用失败的回调函数                                 |
| complete | function |        | 否   | 接口调用结束的回调函数（调用成功、失败都会执行）       |

编程式导航实现后退导航示例如下：

```html
<!--页面wxml文件中-->
<button bindtap="backFn">跳转到非 tabBar页面</button>
```

```js
// 页面js文件中
backFn(){
    wx.navigateBack({
        delta: 1
    })
}
```

> 总结：
>
> 编程式导航跳转
>
> 1. tabBar界面`wx.switchTab({ url: '' })`
> 2. 非tabBar界面`wx.navigateTo({ url: '' })`
> 3. 后退导航`wx.navigateBack({ delta: 1 })`

### [#](https://weldon0.github.io/wxxcx-docs/day03/#_2-4、导航传参)2.4、导航传参

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#声明式传递参数)声明式传递参数

`navigator` 组件的`url` 属性用来指定将要跳转到的页面的路径。同时，**路径的后面还可以携带参数**，示例如下：

```html
<navigator url="/pages/event/event?id=10&tom=1" >跳转到非 tabBar页面</navigator>
```

1

- 参数 与 路径 之间使用 `?`分隔
- 参数键 与 参数值 用`=` 相连
- 不同参数 用 `&` 分隔
- 注意：**不能够往 `tabBar`页面传递参数**

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#编程式传递参数)编程式传递参数

调用 `wx.navigateTo({ ... })`方法跳转页面时，也可以携带参数，代码示例如下：

```html
<!--页面wxml文件中-->
<button bindtap="tabFun">跳转到非 tabBar页面</button>
```

```js
// 页面js文件中
tabFun(){
    wx.navigateTo({
        url:"/pages/event/event?id=10&tom=1"
    })
}
```

- 注意：**不能够往 `tabBar`页面传递参数**

【总结】**小程序里面页面传参依靠的是URL上面的查询参数，但是不能给tabBar页面传递**

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#接收参数)接收参数

通过 声明式导航传参 或 编程式导航传参 所写携带的参数，可以直接在 **onLoad 事件中直接获取到**，示例代码如下

```js
// 页面的js文件中

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options) //  options 就是页面传递过来的参数
  }
```

------

总结概况

❓ 小程序中实现导航跳转的方式有几种，分别是什么？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ul style="padding-left: 1.2em; line-height: 1.7;"><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">小程序 中实现导航跳转的方式有 2 种</p></li><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">声明式导航(<code style="font-family: source-code-pro, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; color: rgb(71, 101, 130); padding: 0.25rem 0.5rem; margin: 0px; font-size: 0.85em; background-color: rgba(27, 31, 35, 0.05); border-radius: 3px;">&lt;navigator url="..."&gt;</code>)和编程式导航 (小程序 API)</p></li></ul></details>

总结概况

❓ 小程序中如何实现导航传参以及如何获取参数？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ul style="padding-left: 1.2em; line-height: 1.7;"><li>url 路径的后面携带参数，形如：<code style="font-family: source-code-pro, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; color: rgb(71, 101, 130); padding: 0.25rem 0.5rem; margin: 0px; font-size: 0.85em; background-color: rgba(27, 31, 35, 0.05); border-radius: 3px;">key=value&amp;key2=value2</code></li><li>onLoad 事件中使用形参 options 直接获取到</li></ul></details>

## [#](https://weldon0.github.io/wxxcx-docs/day03/#_3、页面事件)3、页面事件

### [#](https://weldon0.github.io/wxxcx-docs/day03/#_3-1、下拉刷新)3.1、下拉刷新

思考

❓ 什么是下拉刷新

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">下拉刷新 是移动端的专有名词，指的是通过<strong style="font-weight: 600;">手指在屏幕上的下拉滑动操作</strong>，从而<span>&nbsp;</span><strong style="font-weight: 600;">重新加载页面数据</strong><span>&nbsp;</span>的行为</p></details>

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#启动下拉刷新)启动下拉刷新

启动下拉刷新的三种方式，分别是：

- 全局开启下拉刷新

  在`app.json`的 `window`节点中，将 `enablePullDownRefresh`设置为 `true`

- 局部开启下拉刷新

  在页面的`.json` 配置文件中，将 `enablePullDownRefresh`设置为`true`

- 使用小程序提供的 API 实现下拉刷新

  ```js
  wx.startPullDownRefresh()  // 主动触发下拉刷新，就像手指下拉一样的效果
  ```

  **注意：** pc模拟器里面是无效的，手机真机是可以实现该效果

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#配置下拉刷新窗口的样式)配置下拉刷新窗口的样式

在全局或页面的`.json` 配置文件中，通过`backgroundColor`和`backgroundTextStyle` 来配置下拉刷新窗口的样 式，其中

- `backgroundColor` 用来配置 下拉刷新 窗口的背景颜色，仅支持 16 进制的颜色值
- `backgroundTextStyle` 用来配置 下拉刷新`loading`的样式，仅支持 `dark`和`light`

```js
{
  "usingComponents": {},
  "enablePullDownRefresh": true,  // 页面开启下拉刷新
  "backgroundColor":"#ff0000",  // 背景色
  "backgroundTextStyle":'light' // loading 样式
}
```

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#监听页面的下拉刷新事件)监听页面的下拉刷新事件

在页面的 `.js`文件中，通过 `onPullDownRefresh()`函数即可监听当前页面的下拉刷新事件

```js
Page({

  /**
   * 页面的初始数据
   */
  data: {
	count:1
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
	// 用户下拉后，将count的值设置为0
	this.setData({
		count:0
	})
  },
})
```

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#停止下拉刷新的效果)停止下拉刷新的效果

当处理完下拉刷新后，下拉刷新的`loading` 效果会一直显示，不会主动消失， 所以需要手动隐藏`loading`效果， 此时，调用 `wx.stopPullDownRefresh()`可以停止当前页面的上拉刷新



```js
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 用户下拉后，将count的值设置为0
    this.setData({
      count:0
    })
    // 关闭下拉刷新
    wx.stopPullDownRefresh()
    }
```

### [#](https://weldon0.github.io/wxxcx-docs/day03/#_3-2、上拉触底)3.2、上拉触底

思考

❓ 什么是上拉触底

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">上拉触底是移动端的专有名词，通过<strong style="font-weight: 600;">手指在屏幕上的上拉滑动操作</strong>，从而<strong style="font-weight: 600;">加载更多数据的行为</strong></p></details>

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#监听页面的上拉触底事件)监听页面的上拉触底事件

在页面的`.js` 文件中，通过`onReachBottom` 函数即可监听当前页面上的上拉触底事件

```js
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
	 console.log('上拉触底喽')
  },
```

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#配置上拉触底距离)配置上拉触底距离

- 上拉触底距离指的是 **触发上拉触底事件时，滚动条距离页面底部的距离**
- 可以在全局或页面的 `.json` 配置文件中，通过`onReachBottomDistance`属性来配置上拉触底的距离
- 小程序默认的触底距离是`50px`，在实际开发中，可以根据自己的需求修改这个默认值

```js
{
  "usingComponents": {},
  "enablePullDownRefresh": true,
  "backgroundColor":"#ff0000",
  "onReachBottomDistance":100  // 距离底部还有100就触发
}
```

总结概况

❓ 小程序中如何监听下拉刷新以及上拉触底加载

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">在页面的<code style="font-family: source-code-pro, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; color: rgb(71, 101, 130); padding: 0.25rem 0.5rem; margin: 0px; font-size: 0.85em; background-color: rgba(27, 31, 35, 0.05); border-radius: 3px;">.js</code>文件中使用<span>&nbsp;</span><code style="font-family: source-code-pro, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; color: rgb(71, 101, 130); padding: 0.25rem 0.5rem; margin: 0px; font-size: 0.85em; background-color: rgba(27, 31, 35, 0.05); border-radius: 3px;">onPullDownRefresh()</code>函数 和<code style="font-family: source-code-pro, Menlo, Monaco, Consolas, &quot;Courier New&quot;, monospace; color: rgb(71, 101, 130); padding: 0.25rem 0.5rem; margin: 0px; font-size: 0.85em; background-color: rgba(27, 31, 35, 0.05); border-radius: 3px;">onReachBottom()</code>函数</p></details>

### [#](https://weldon0.github.io/wxxcx-docs/day03/#_3-3、上拉触底案例)3.3、上拉触底案例

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#效果展示)效果展示

![img](https://weldon0.github.io/wxxcx-docs/assets/img/demo.6d5fb3ab.gif)

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#思路分析)思路分析



请求数据的过程当中需要展示loading效果，数据获取到以后，loading消失

1. 定义生成随机颜色方法
2. 调用获取随机颜色方法获取数据，追加到列表
3. 实现加载中效果，关闭加载中
4. 布局`wxml`结构，渲染数据，美化`UI`样式结构
5. 滚动到底获取更多数据
6. 节流阀控制



实现步骤

1. 获取自定义颜色的方法

   ```js
     getColors() {
       this.setData({
         isloding: true
       })
       // 需要展示 loading 效果
       wx.showLoading({
         title: '数据加载中...',
       })
       wx.request({
         url: 'https://www.escook.cn/api/color',
         method: 'get',
         success: ({ data: res }) => {
           this.setData({
             colorList: [...this.data.colorList, ...res.data]
           })
         },
         complete: () => {
           wx.hideLoading()
           this.setData({
             isloding: false
           })
         }
       })
     },
   ```

1. 定义模板内容

   ```html
   <view>
     <view class="item" wx:for="{{ colorList }}" style="background-color: rgb({{ item }});"> {{ item }} </view>
   </view>
   ```
   
1. 样式

   ```css
   /* pages/color/color.wxss */
   
   .item {
     /* width: 100%; */
     height: 350rpx;
     color: white;
     line-height: 350rpx;
     text-align: center;
     border-radius: 20rpx;
     margin: 20rpx;
   }
   ```
   
   

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#拓展-自定义编译模式)拓展-自定义编译模式

![img](https://weldon0.github.io/wxxcx-docs/assets/img/by1.5704a983.jpg)![img](https://weldon0.github.io/wxxcx-docs/assets/img/by2.4828e31e.jpg)![img](https://weldon0.github.io/wxxcx-docs/assets/img/by3.f5d9fbf9.jpg)

思考

❓ 现实生活中什么是生命周期？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7;">生命周期 (Life Cycle) 是指一个对象从<span>&nbsp;</span><strong style="font-weight: 600;">创建 -&gt; 运行 -&gt; 销毁</strong><span>&nbsp;</span>的整个阶段，强调的是一个时间段，例如：</p><ul style="padding-left: 1.2em; line-height: 1.7;"><li>张三出生，表示这个人的生命周期开始</li><li>张三离世，表示这个人的生命周期结束</li><li>张三一生，就是张三的生命周期</li></ul></details>

## [#](https://weldon0.github.io/wxxcx-docs/day03/#_4、生命周期)4、生命周期

### [#](https://weldon0.github.io/wxxcx-docs/day03/#_4-1、生命周期定义)4.1、生命周期定义

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#小程序生命周期定义)小程序生命周期定义

- 小程序的 **启动**，表示 生命周期的**开始**
- 小程序的 **关闭**，表示 生命周期的**结束**
- **中间小程序运行的过程，就是小程序的生命周期**

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#小程序生命周期分类)小程序生命周期分类

- 应用生命周期 特指**小程序从启动 --> 运行 --> 销毁的过程**
- 页面生命周期 特指小程序中，**每个页面的加载 --> 渲染 --> 销毁的过程**
- 小程序的生命周期图解 ![image](https://weldon0.github.io/wxxcx-docs/assets/img/life.19361c48.png)

### [#](https://weldon0.github.io/wxxcx-docs/day03/#_4-2、生命周期函数)4.2、生命周期函数

- 生命周期函数：小程序框架提供的内置函数，会伴随着生命周期，自动按次序执行
- 生命周期函数的作用
  - 允许程序员在特定的生命周期时间点上，执行某些特定的操作
  - 例如：页面刚加载的时候，在生命周期函数中自动发起数据请求，获取当前页面的数据
- 注意：生命周期强调的是时间段，生命周期函数强调的是时间点。

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#两个分类说明)两个分类说明

小程序中的生命周期函数分为两类，分别是：

1. 应用生命周期函数
   - 特指**小程序从启动 --> 运行 --> 销毁期间依次调用的那些函数**
2. 页面生命周期函数
   - 特指小程序中，**每个页面从 加载 --> 渲染 --> 销毁期间依次调用的那些函数**

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#应用的生命周期)应用的生命周期

应用的生命周期app.js 是小程序执行的入口文件，在 app.js 中必须调用 App() 函数，且只能调用一次。其中，App() 函数是用 来注册并执行小程序的App(Object) 函数接收一个 Object 参数，可以通过这个Object 参数，指定小程序的应用生命周期函数

```js
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {},
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) { },
  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {},
  /**
     * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {}
})
```

#### [#](https://weldon0.github.io/wxxcx-docs/day03/#页面的生命周期)页面的生命周期

- 每个小程序页面，必须拥有自己的 .js 文件，且必须调用 Page() 函数，否则报错。其中 Page() 函数用来注册小 程序页
- Page(Object) 函数接收一个 Object 参数，可以通过这个 Object 参数，指定页面的生命周期函数

```js
// pages/list/list.js
Page({
	...
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('onLoad');
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('onShow');
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('onHide');
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('onUnload');
    },
	...
})
```

总结概况

❓ 小程序生命周期包含几类，分别是什么 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ol style="padding-left: 1.2em; line-height: 1.7;"><li>小程序中的生命周期，分为 2 类</li><li>分别是<span>&nbsp;</span><strong style="font-weight: 600;">应用生命周期</strong><span>&nbsp;</span>和<span>&nbsp;</span><strong style="font-weight: 600;">页面生命周期</strong>，其中应用生命周期包裹这页面生命周期</li></ol></details>

## [#](https://weldon0.github.io/wxxcx-docs/day03/#_5、wxs学习)5、wxs学习

##### 5.1 什么是 `wxs`

1. 什么是 `wxs`
   - `WXS (WeiXin Script)` 是小程序的一套脚本语言，结合 `WXML`，可以构建出页面的结构
2. `wxs` 的应用场景
   - `wxml` 中无法调用在页面的 `.js` 中定义的函数，但是 ，`wxml` 中可以调用 `wxs` 中定义的函数，因此，小程序中 `wxs` 的 `典型应用场景` 就是 `过滤器`

##### [#](https://blog-1gxfs2h1401f4f58-1254415986.tcloudbaseapp.com/wechat/wechat-3.html#_5-2-wxs-和-javascript-的关系)5.2 wxs 和 JavaScript 的关系

1. 虽然 `wxs` 的语法类似于 `JavaScript`，但是 `wxs` 和 `JavaScript` 是完全不同的两种语言
   - `wxs` 有自己的数据类型
     - `number` 数值类型
     - `string` 字符串类型
     - `boolean` 布尔类型
     - `object` 对象类型
     - `function` 函数类型
     - `array` 数组类型
     - `date` 日期类型
     - `regexp` 正则
   - `wxs` 不支持类似于 `ES6` 及以上的语法形式
   - `wxs` 遵循 `CommonJS` 规范 
     - `module` 对象：
     - `module.export`
     - `require` 函数

##### [#](https://blog-1gxfs2h1401f4f58-1254415986.tcloudbaseapp.com/wechat/wechat-3.html#_5-3-拓展-wxs-遵循-commonjs-模块化规范)5.3 拓展： `wxs` 遵循 `CommonJS` 模块化规范

> `CommonJS` 是 `javascript` 的模块化规范之一，小程序的脚本语言 `wxs` 遵循了 `CommonJS` 规范，因此，使用 `wxs` 时的体验和使用 `node.js` 的体验比较相似。

- `module` 对象
  - 每个 `wxs` 都是独立的模块，每个模块均有一个内置的 module 对象，每个模块都有自己独立的作用域。
- `module.exports`
  - 由于 `wxs` 拥有独立作用域，所以在一个模块里面定义的变量与函数，默认为私有的，对其他模块不可见，
  - 通过 `module.exports` 属性，可以对外共享本模块的私有变量与函数。
- require函数
  - 在 `wxs` 模块中引用其他 `wxs` 文件模块，可以使用 `require` 函数。

##### [#](https://blog-1gxfs2h1401f4f58-1254415986.tcloudbaseapp.com/wechat/wechat-3.html#_5-4-内嵌-wxs-脚本)5.4 内嵌 wxs 脚本

1. 使用的规则

   - `wxs` 代码可以编写在 `wxml` 文件中的 `<wxs></wxs>` 标签内，就像 `javascript` 代码可以编写在 `html` 文件中的 `<script></script>` 标签内一样。
   - `wxml` 文件中的每个 `<wxs></wxs>` 标签，**必须提供一个 `module` 属性**，用来指定当前 `<wxs></wxs>` 标签的模块名。在单个 `wxml` 文件内，建议其值唯一。
   - module 属性值的命名必须符合下面两个规则：
     - 首字符必须是：字母（a-z A-Z），下划线（_）
     - 剩余字符可以是：字母（a-z A-Z），下划线（_）， 数字（0-9）

2. 案例代码

   ![img](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/014--nei-qian--wxs-jiao-ben.jpg)

   

##### [#](https://blog-1gxfs2h1401f4f58-1254415986.tcloudbaseapp.com/wechat/wechat-3.html#_5-5-定义外联的-wxs-脚本)5.5 定义外联的 wxs 脚本

1. 使用的规则

   - `wxs` 代码可以编写在以 `.wxs` 为后缀名的文件内，就像 `javascript` 代码可以编写在以 `.js` 为后缀名文件中一样。

2. 实例代码

   

##### [#](https://blog-1gxfs2h1401f4f58-1254415986.tcloudbaseapp.com/wechat/wechat-3.html#_5-6-使用外联的-wxs-脚本)5.6 使用外联的 wxs 脚本

##### [#](https://blog-1gxfs2h1401f4f58-1254415986.tcloudbaseapp.com/wechat/wechat-3.html#问题-19)问题

- 引入外联wxs脚本需要src指定什么路径？

1. 在 `wxml` 中如果要引入外联的 `wxs` 脚本，必须为 `<wxs></wxs>` 标签添加 `module` 和 `src` 属性
   - `modu le` 用来为 `<wxs></wxs>` 标签指定模块名，作为当前页面访问这个模块的标识名称
   - `src` 用来指定当前 `<wxs></wxs>` 标签要引入的脚本路径，**必须是相对路径！！！**
2. 示例代码

![img](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/016--shi-yong-wai-lian-de-wxs-jiao-ben.jpg)

##### [#](https://blog-1gxfs2h1401f4f58-1254415986.tcloudbaseapp.com/wechat/wechat-3.html#_5-7-了解-wxs-的-4-个特点)5.7 了解 wxs 的 4 个特点

##### [#](https://blog-1gxfs2h1401f4f58-1254415986.tcloudbaseapp.com/wechat/wechat-3.html#问题-20)问题

- wxs有哪些特点？

1. 没有兼容性

   `wxs` 不依赖于运行时的基础库版本，可以在所有版本的小程序中运行

2. 与 `javascript` 不同

   - 为了降低 `wxs` 的学习成本， `wxs` 语言在设计时大量借鉴了 `JavaScript` 语法
   - 但本质上，`wxs` 与 `javascript` 是不同的语言，有自己的语法，并不和 `javascript` 一致

3. 隔离性

   * `wxs` 的运行环境和其他 `javascript` 代码是隔离的
     * `wxs` 中不能调用其他 `javascript` 文件中定义的函数
     * 也不能调用小程序提供的`API`

4. 不能作为事件回调

   - `wxs` 典型的应用场景就是 `过滤器`，经常配置 `Mustache` 语法进行使用

     <img src="https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/017--bu-neng-zuo-wei-shi-jian-hui-diao.jpg" alt="img"  />

   - `wxs` 函数不能作为组件的事件回调

     ![img](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/2022/08/08/018--bu-neng-zuo-wei-shi-jian-hui-diao.jpg)

     

5. 性能好

   `iOS`设备上比 `javascript` 运行快

   由于运行环境的差异，在 `iOS` 设备上小程序内的 `wxs` 会比 `javascript` 代码快 2 ~ 20 倍。

   在 `android` 设备上二者运行效率无差异



## [#](https://weldon0.github.io/wxxcx-docs/day03/#_6、总结)6、总结
