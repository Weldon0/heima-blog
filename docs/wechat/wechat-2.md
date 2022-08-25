---
title: 🌹2、微信小程序第二天
---



## [#](https://weldon0.github.io/wxxcx-docs/day02/#_1、学习目标)1、学习目标

| 知识点名称     | 知识点内容                             | 难度系数 | 要求程度 |
| -------------- | -------------------------------------- | -------- | -------- |
| 模板语法       | 数据绑定、事件绑定、条件渲染、列表渲染 | 2星      | 掌握     |
| WXSS样式       | WXSS                                   | 3星      | 掌握     |
| 配置操作       | 全局配置、TabBar配置、页面配置、       | 3星      | 掌握     |
| 网络请求和案例 | 网络数据请求、本地生活案例             | 3星      | 掌握     |

## [#](https://weldon0.github.io/wxxcx-docs/day02/#_2、模板语法)2、模板语法

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_2-1、数据绑定)2.1、数据绑定

思考

❓ Vue 中如何进行数据的渲染与属性绑定绑定？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ol style="padding-left: 1.2em; line-height: 1.7;"><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">Vue 中重点使用 插值表达式 渲染数据</p></li><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">绑定的动态绑定使用 v-bind 语法或者 : 简写用法</p></li></ol></details>

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#数据绑定原则)数据绑定原则

**1、基本原则**

- 在 data 中定义数据
- 在 wxml 中使用数据

**2、 在 data 中定义页面的数据**

在页面对应的 .js 文件中，把数据定义在 data 对象中即可：

```js
Page({
    data:{
        // 字符串类型的数据
        name:'小程序',
        
        // 数组类型的数据
        info:[
            {id:1,name:'Vue'},
            {id:2,name:'React'}
        ]
    }
})
```



**3、Mustache 语法的格式**

把 data 中的数据绑定到页面中渲染，**使用 Mustache 语法 (双大括号) 将变量包起来**即可。语法格式如下：

```html
<view>
	<!--使用Mustache 语法渲染数据-->
    <view>{{ name }}</view>
    <view>{{ info[0].name }}</view>
</view>
```



#### [#](https://weldon0.github.io/wxxcx-docs/day02/#动态绑定属性)**动态绑定属性**

**1、Mustache 语法的应用场景**

- 绑定内容
- 绑定属性
- 运算(三元运算、算术运算符)

**2、属性绑定**

页面数据如下：

```js
Page({
    data:{
        // 图片变量
        imgSrc: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
    }
})
```

页面结构如下：

```html
<view>
	<!--渲染图片-->
    <image src="{{ imgSrc }}" mode="aspectFit"></image>
</view>
```

**3、三元运算**

页面数据如下：

```js
Page({
    data:{
        // 生成10以内的随机数
        randomNum: Math.random() * 10
    }
})
```

页面结构如下：

```html
<view>
	<view>{{ randomNum >5  ? '随机数大于5' : '随机数小于5'  }}</view>
</view>
```

**3、算术运算**

页面数据如下：

```text
Page({
    data:{
        // 生成100以内的随机数
        randomNumber: Math.random().toFixed(2)
    }
})
```

页面结构如下：

```html
<view>
    <!--100以内的随机数-->
	<view>{{ randomNumber * 100 }}</view>
</view>
```

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_2-2、事件绑定)2.2、事件绑定

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#什么是事件)什么是事件

1. 事件是**视图层到逻辑层的通讯方式**，事件可以将**用户的行为**或者**组件的状态**反馈到逻辑层进行处理

   ![image-20210728234552524](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728234552524.df4735b9.png)

2. 小程序中常用的事件

![image-20210728234658488](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728234658488.4caff519.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#bindtap-的语法格式)**bindTap 的语法格式**

1. 通过 **bindtap**，可以为组件绑定tap触摸事件

```html
<button bindtap="btnHandle" type="warn">按钮</button>
```

2. 页面的 **.js**中定义对应的事件处理函数

```js
Page({
    btnHandle () {
        console.log('触发事件')
    }
})
```

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#事件对象)**事件对象**

当事件回调触发的时候，会收到一个**事件对象 event**，它的详细属性如下：

![image-20210728235007336](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728235007336.6406ab8f.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#target-和-currenttarget-的区别)**target 和 currentTarget 的区别**

1. target 是触发该事件的源头组件（点击了哪个元素target就是哪个元素）
2. currentTarget 则是当前事件所绑定的组件

![image-20210728235225824](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728235225824.0b057a95.png)

1. 点击内部的按钮时，点击事件以 冒泡 的方式向外扩散，也会触发外层 view 的 tap 事件处理程序，此时，对于外层的view 来说：
   - e.target 指定的是触发事件的源头组件，因为 e.target 是内部的按钮组件
   - e.currentTarget 指向的是当前正在触发事件的那个组件，因此 e.currentTarget 是当前的 view 组件
   
   

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#为-data-中的数据赋值)**为 data 中的数据赋值**

通过调用 **this.setData(dataObject)** 方法，可以给页面 data 中的数据重新赋值

this.setData() 方法有两个作用：**1. 更新数据** ， **2. 驱动视图更新**

```js
Page({
    data: {
        age:0
    },
    btnHandle (e) {
       this.setData({
           // 键需要更新的字段
           // 值为最新的数据
           age: this.data.age + 1
       })
    }
})
```

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#事件传参)事件传参

1. **事件传参错误方式**

   小程序中的事件传参比较特殊，**不能在绑定事件的同时为事件处理程序传递参数**

   例如，下面的代码将不能正常工作，因为小程序会把 bindtap 的属性值，统一当作事件名称来处理，相当于要调用一个名称为 btnHandler(123) 的事件处理函数

   ![image-20210728235709815](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210728235709815.4cabf2c2.png)

2. **事件传参正确的方式**

可以为组件提供 **data-\* 自定义属性传参**，其中 *** 代表的是参数的名字**，示例代码如下：

```html
<view>
	<!--正确的绑定方式-->
    <button bindtap="fn" data-id="{{ 123 }}">事件传参</button>
</view>
```

最终：

- id 会被解析为 **参数的名称**
- 数值 **123** 会被解析为参数的值

1. **接收事件传递的参数**

   在事件处理函数中， **通过 event.target.dataset.参数名 **即可获得 **具体的参数的值**，示例代码如下：

```js
Page({
    fn (e) {
        // dataset 是一个对象，包含了所有通过 data-* 传递的参数
        console.log(e.target.dataset)
        // 通过dataset 可以访问到具体的参数值
        console.log(e.target.dataset.id)
    }
})
```

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#bindinput的语法格式)bindinput的语法格式

在小程序中，通过 input事件来响应文本框的输入事件，语法格式如下：

1. 通过 bindinput，可以为文本框绑定输入事件

```html
<input type="input" bindinput="inputFn"/>
```

2. 在页面的.js 文件中定义事件处理函数

```js
Page({
    inputFn (e) {
        // e.detail.value 是文本框最新的值
        console.log(e.detail.value)
    }
})
```

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#模拟数据双向绑定)**模拟数据双向绑定**

1. 定义数据

```js
Page({
    data:{
        msg:'Hi~'
    }
})
```

2. 渲染结构

```html
<input type="text" value="{{ msg }}"  bindinput="inputFn" /> 
输入框的数据是==>  {{ msg }}
```

3. 美化样式

```css
input{
    border:1px solid #ccc;
    padding:5px;
    margin:5px;
    border-radius:3px;
}
```

3. 书写事件函数

```js
Page({
   inputFn(e){
       // e.detail.value 是文本框最新的值
       this.setData({
           msg:e.detail.value
       })
   }
})
```

总结概况

❓ 小程序中事件如何传递参数？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ol style="padding-left: 1.2em; line-height: 1.7;"><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">为组件提供 data-* 自定义属性传参，其中 * 代表的是参数的名字</p></li><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">在事件处理函数中，通过 event.target.dataset.参数名 即可获取到具体参数的值</p></li></ol></details>

总结概况

❓ 如何获取到输入框最新的值

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ol style="padding-left: 1.2em; line-height: 1.7;"><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">给 input 框绑定点击事件</p></li><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">通过事件对象 e.detail.value 获取到输入框最新的值</p></li></ol></details>

总结概况

❓ this.setData() 方法的作用是什么

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ol style="padding-left: 1.2em; line-height: 1.7;"><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">更新数据</p></li><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">驱动视图更新</p></li></ol></details>

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_2-3、条件渲染)2.3、条件渲染

思考

❓ Vue 中如何进行条件渲染？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ol style="padding-left: 1.2em; line-height: 1.7;"><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">v-if…..v-else-if…..v-else</p></li><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">v-show</p></li></ol></details>

思考

❓ Vue 中两种条件渲染的区别是什么？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ol style="padding-left: 1.2em; line-height: 1.7;"><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">v-if 会确保在切换过程中，将条件块内的事件监听器和<strong style="font-weight: 600;">子组件</strong>适当地被<strong style="font-weight: 600;">销毁和重建</strong>。</p></li><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">v-show 不管初始条件是什么，元素总是会被渲染，并且只是<strong style="font-weight: 600;">简单地基于 CSS 进行切换</strong></p></li></ol></details>

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#if-elif-else)**if..elif..else**

1. 在框架中，使用 **wx:if=""** 来判断是否需要渲染该代码块

```html
<view wx:if="{{ condition  }}">True</view>
```

2. 也可以用 **wx:elif** 和 **wx:else** 来添加一个 **else** 块

```html
<!--条件渲染-->
<view wx:if="{{ type === 1 }}"></view>
<view wx:elif="{{ type === 2 }}"></view>
<view wx:else>保密</view>
```

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#基于-block-标签使用-if-条件判断)**基于 block 标签使用 if 条件判断**

如果要一次性判断多个组件标签，可以使用一个`<block/>` 标签将多个组件包装起来，并在上边使用 **wx:if** 控

制属性

```html
<block wx:if="{{ true }}">
    <view>View1</view>
    <view>View2</view>
</block>
```

注意：`<block/>` 并不是一个组件，它仅仅是一个包装元素，不会在页面中做任何渲染，只接受控制属性。

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#hidden)**hidden** vue里面的v-show

在小程序框架中，直接使用 **hidden=""** 也能控制元素的显示与隐藏

```html
<view hidden="{{ false }}">条件为true 隐藏， 条件false表示显示</view>
```

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#if-和-hidden-的区别)**if 和 hidden 的区别**

1. 运行方式不同
   - wx:if 以动态创建和移除元素的方式，控制元素的展示与隐藏
   - hidden 以切换样式的方式(display: none/block)，控制元素的显示和隐藏
2. 使用建议
   - 频繁切换时，建议使用 hidden
   - 控制条件复杂时，建议使用 wx:if 搭配 wx:elif 、wx:else

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_2-4、列表渲染)2.4、列表渲染

思考

❓ Vue 中如何进行列表渲染 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">使用<span>&nbsp;</span><strong style="font-weight: 600;">v-for</strong><span>&nbsp;</span>指令进行渲染，在渲染时给渲染的元素添加<span>&nbsp;</span><strong style="font-weight: 600;">:key</strong><span>&nbsp;</span>属性</p></details>

思考

❓ key 的作用是什么 ？

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">指定列表中项目的唯一的标识符，让每一项保持自己的特征和状态</p></details>

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#wx-for)**wx:for**

1. 通过 **wx:for** 可以根据指定的数组，循环渲染重复的组件结构

```js
Page({
    data:{
        array:[
            { message:'Tom' },
            { message:'Jerrry' }
        ]
    }
})
```

```html
<view wx:for="{{ array }}" wx:key="index">
   {{index}} :  {{ item.message }}
</view>
```

1. 默认数组的当前项的**下标变量名默认为 index**，数组当前项的**变量名默认为 item**

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#手动指定索引和当前项的变量名)**手动指定索引和当前项的变量名**

1. 使用 **wx:for-item** 可以指定数组当前元素的变量名
2. 使用 **wx:for-index** 可以指定数组当前下标的变量名

```html
<view wx:for="{{ array }}" wx:for-item="itemName" wx:for-index="i" wx:key="i">
	{{ i }} : {{ itemName.message }}
</view>
```

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#wx-key-的使用)**wx:key 的使用**

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态

（如 input 中的输入内容，switch 的选中状态），需要使用 **wx:key** 来指定列表中项目的唯一的标识符，从而**提**

**高渲染的效率**（推荐使用唯一的标识即可），示例代码如下

```html
<view wx:for="{{ array }}" wx:key="index">
	{{ index }} : {{ item.message }}
</view>
```

## [#](https://weldon0.github.io/wxxcx-docs/day02/#_3、wxss样式)3、WXSS样式

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#什么是-wxss及和-css-之间的关系)**什么是 wxss及和 css 之间的关系**

1. 什么是 WXSS
   - WXSS (WeiXin Style Sheets) 是一套**样式语言，用于描述 WXML 的组件样式**
   - WXSS 用来决定 WXML 的组件应该怎么显示
2. WXSS 和 CSS 的关系
   - WXSS 具有 CSS 大部分特性，为了更适合开发微信小程序，WXSS 对 CSS 进行了扩充以及修改
   - 与 CSS 相比，WXSS 扩展的特性有
     - **rpx 尺寸单位**
     - **@import 样式导入**

![image-20210729131948674](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729131948674.898d6e74.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#什么是-rpx-及实现原理)**什么是 rpx 及实现原理**

1. 什么是 rpx

   rpx（responsive pixel） 是微信小程序独有的，**用来解决屏幕适配的尺寸单位**

2. rpx 的实现原理

   rpx 是实现原理非常简单：鉴于不同设备屏幕的大小不同，为了实现屏幕的自动适配，**rpx 把所有的屏幕，在宽度上等分为 750 份**，即 当前屏幕的总宽度为750 rpx

   - 在较小的设备上，1rpx 所代表的宽度较小
   - 在较大的设备上，1rpx 所代表的宽度较大

小程序在不同的设备上运行的时候，会自动把 rpx 的样式单位换算成对应的像素单位来渲染，从而显示屏幕适配

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#rpx-与-px-以及设计稿之间的换算关系)**rpx 与 px 以及设计稿之间的换算关系**

1. rpx 与 px 之间的换算

   以 iPhone6 为例，iPhone6 的屏幕宽度为 375px ，共有 750 个物理像素。则 **750rpx = 375px = 750 物理像素**，即 **1rpx = 0.5px = 1 物理像素**

![image-20210729132327362](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729132327362.d8f0dc81.png)

1. rpx 和 iPhone6 设计稿的关系

   官方建议：开发微信小程序时，设计师可以**用 iPhone6 作为视觉稿的标准**。（iPhone6 设计稿宽度为 750px）

   如果要根据 iPhone6 的设计稿，绘制小程序页面，可以直接把单位从 px 替换为 rpx

   例如，假设 iPhone6 设计稿上，要绘制一个 宽高为 200px 的盒子，换算为 rpx 为 200rpx

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#import-样式导入)**@import 样式导入**

1. 什么是样式导入
   - 使用 **@import** 语句可以**导入外联样式表**
2. 语法格式
   - **@import 后**跟需要导入的外联样式表的**相对路径**，用 **;** 表示语句结束

```css
@import '../../styles/global.wxss';
```

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#全局样式和局部样式)**全局样式和局部样式**

1. 什么是全局样式

   定义在 **app.wxss** 中的样式为**全局样式，作用于每一个页面**

2. 局部样式

   - 在 **page 的 wxss 文件**中定义的样式为**局部样式**，**只作用在对应的页面**，并会覆盖 app.wxss 中相同的选择器
   - **注意：\**当局部样式的\**权重大于或等于**全局样式的权重时，才会覆盖全局的样式效果
   - **局部样式优先级高于全局样式**

![image-20210729132958186](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729132958186.8c6ee69e.png)

## [#](https://weldon0.github.io/wxxcx-docs/day02/#_4、配置操作)4、配置操作

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_4-1、全局配置)4.1、全局配置

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#全局配置文件以及常用的配置项)**全局配置文件以及常用的配置项**

小程序根目录下的 **app.json** 文件用来对微信小程序进行**全局配置**。常用的配置如下：

1. **pages** 数组：配置小程序的页面路径
2. **window** 对象：用于设置小程序窗口的外观
3. **tabBar** 对象：配置小程序底部 tab 栏效果
4. **style** 字段：是否启用新版的组件样式

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#小程序窗口的组成)**小程序窗口的组成**

小程序的窗口由 3 部分组成：**导航栏区域、背景区域、页面主体区域**

![image-20210729133932571](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729133932571.c6c65265.png)

**设置导航栏标题文字内容**

设置步骤：app.json → window → **navigationBarTitleText**

![image-20210729134123917](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729134123917.fdc556a5.png)

**设置导航栏背景色**

设置步骤：app.json → window → **navigationBarBackgroundColor**

![image-20210729134211606](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729134211606.74d20b7a.png)

**设置导航栏标题颜色**

设置步骤：app.json → window → **navigationBarTextStyle**

注意：此选择仅支持 **black / white**

![image-20210729134255549](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729134255549.facf16a9.png)

**全局开启下拉刷新功能**

通过手指在屏幕上的下拉滑动操作，从而重新加载页面数据的行为

设置步骤：app.json → window → **enablePullDownRefresh**

![image-20210729134409193](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729134409193.943a3f3f.png)

**设置下拉刷新窗口的背景色**

当全局开启下拉刷新功能之后，默认的窗口背景为白色

设置步骤：app.json → window → **backgroundColor**

![image-20210729134504832](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729134504832.e08321fd.png)

**设置下拉loading的样式**

当全局开启下拉刷新功能之后，默认窗口的 loading 样式为白色

设置步骤：app.json → window → **backgroundTextStyle**

注意：仅支持 **dark / light**

![image-20210729134607042](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729134607042.94196505.png)

**设置上拉触底的距离**

手指在屏幕上的上拉滑动操作，从而加载更多数据的行为

设置步骤：app.json → window → **åå**

注意： 默认距离为 50px，如果没有特殊需求，建议使用默认值即可

![image-20210729134738319](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729134738319.74786480.png)

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_4-2、tabbar-配置)4.2、TabBar 配置

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#tab-bar的概念)Tab bar的概念

1. **tabBar** 是移动端应用常见的页面效果，用于实现多页面的快速切换小程序中
2. 通常将其分为 **底部 tabBar** 和 **顶部 tabBar**

![image-20210729205150604](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729205150604.1eb5258d.png)

注意：

**tabBar** 中，只能配置**最少 2 个、最多 5 个** tab 页签，

当渲染**顶部 tabBar 的时候，不显示 icon，只显示文本**

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#tabbar-的组成部分)**TabBar 的组成部分**

1. backgroundColor：导航条背景色
2. selectedIconPath：选中时的图片路径
3. borderStyle：tabBar上边框的颜色
4. iconPath：未选中时的图片路径
5. selectedColor：tab 上的文字选中时的颜色
6. color：tab 上的文字默认（未选中）颜色

![image-20210729205310559](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729205310559.12d46287.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#tabbar-节点的配置项)**TabBar 节点的配置项**

1. TabBar 节点的配置项

![image-20210729205404719](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729205404719.e03ae0f3.png)

1. list 节点的配置项

![image-20210729205437122](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729205437122.bfca65e1.png)

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#tabbar-案例)**TabBar 案例**

1. 根据素材中提供的小图标，实现下图中 TabBar 效果:

   ![image-20210729205531712](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729205531712.7a50b9ce.png)

2. 实现步骤

   \- 将 **image 文件夹**，拷贝到小程序项目**根目录**中

   \- **创建** 3 个对应的 **tab 页面**

   \- 设置 tabBar 字段，同时设置 list 字段，配置 TabBar 即可

3. 案例代码

```json
"tabBar":{
    "list":[
    	{
        	"pagePath":"pages/home/home",
        	"text":"首页",
        	"iconPath":"/images/tabs/home.png",
        	"selectedIconPath":"/images/tabs/home-active.png"
		},
		{
            "pagePath":"pages/message/message",
            "text":"消息",
            "iconPath":"/images/tabs/message.png",
            "selectedIconPath":"/images/tabs/message-active.png"
        }
}
```

思考

❓ TabBar 配置项中注意事项

<details class="custom-block details" open="" style="display: block; position: relative; border-radius: 2px; margin: 1.6em 0px; padding: 1.6em; background-color: rgb(238, 238, 238); color: rgb(44, 62, 80); font-family: -apple-system, &quot;system-ui&quot;, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; font-style: normal; font-variant-ligatures: normal; font-variant-caps: normal; font-weight: 400; letter-spacing: normal; orphans: 2; text-align: start; text-indent: 0px; text-transform: none; white-space: normal; widows: 2; word-spacing: 0px; -webkit-text-stroke-width: 0px; text-decoration-thickness: initial; text-decoration-style: initial; text-decoration-color: initial;"><summary style="outline: none; cursor: pointer;">点击查看答案</summary><ol style="padding-left: 1.2em; line-height: 1.7;"><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">List 配置项最多 5 个，最少 2 个</p></li><li><p style="line-height: 1.7; margin-bottom: 0px; padding-bottom: 0px;">当 postision 的值为 Top 时，不显示 icon 图标</p></li></ol></details>

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_4-3、页面配置)4.3、页面配置

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#页面配置文件的作用)**页面配置文件的作用**

小程序每个页面都有自己的 **.json** 文件，用来对**本页面的窗口表现**进行配置。页面中配置项在当前页面会覆盖 app.json 的 window 中相同的配置项

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#页面配置和全局配置的关系)**页面配置和全局配置的关系**

小程序中， app.json 中的 window 节点，可以**全局配置**小程序中**每个页面的窗口表现**

如果某些小程序页面**想要拥有特殊的窗口表现**，此时，**页面级别的 .json 配置文件**就可以实现这种需求

注意：当页面配置与全局配置**冲突**时，根据就近原则，**最终的效果以页面配置为准**

![image-20210729210841135](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729210841135.14cd73ee.png)

## [#](https://weldon0.github.io/wxxcx-docs/day02/#_5、网络请求)5、网络请求

思考

❓ jQuery 中如何发起网络请求 ? 同时我们思考什么是跨域？小程序中是否存在跨域 ？

::: details jQuery 中如何发起网络请求

```js
$.ajax({
    url: ‘xxx’,
    method: ‘GET’,
    success: function (data) {
    	console.log(data)
    }
})
```



:::

出于安全性方面的考虑，小程序官方对数据接口的请求做出了如下两个限制：

- 只能请求 **HTTPS** 类型的接口
- 必须**将接口的域名**添加到**信任列表中** (上线)

![image-20210729211215341](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729211215341.f6435026.png)

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_5-2、配置-request-合法域名)5.2、配置 request 合法域名

**需求描述：**假设在自己的微信小程序中，希望请求 https://www.escook.cn/ 域名下的接口

**配置步骤：\**登录微信小程序\**管理后台 → 开发 → 开发设置 → 服务器域名 → 修改 request 合法域名**

修改时需要**注意事项**：

- 域名只支持 https (request、uploadFile、downloadFile) 和 wss (connectSocket) 协议
- 域名不能使用 IP 地址或 localhost
- 域名必须经过 ICP 备案
- 服务器域名一个月内可申请 15 次修改

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_5-3、发起-get-请求)5.3、发起 GET 请求

调用微信小程序提供的 **wx.request()** 方法，可以发起 GET 数据请求

```js
Page({
    getHandler(){
        wx.request({
            url:'https://www.escook.cn/api/get',
            method:'GET', // 请求方式
            data:{  // 请求参数
                id:1
            },
            success:(data)=>{  // 请求成功的回调函数
                const { data:res } = data
                console.log(res)
            }
        })
    }
})
```

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_5-4、发起-post-请求)5.4、发起 POST 请求

调用微信小程序提供的 **wx.request()** 方法，可以发起 POST 数据请求

```js
Page({
    postHandler(){
        wx.request({
            url:'https://www.escook.cn/api/post',
            method:'POST', // 请求方式
            data:{  // 请求参数
                id:1
            },
            success:(data)=>{  // 请求成功的回调函数
                const { data:res } = data
                console.log(res)
            }
        })
    }
})
```

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_5-5、在页面刚加载时请求数据)5.5、在页面刚加载时请求数据

在很多情况下，我们需要**在页面刚加载的时候，自动请求一些初始化的数据**。此时需要在页面的 onload 事件中调用获取数据的函数

```js
onLoad: function(options){
    this.postHandler()
}
```

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_5-6、跳过-request-合法域名校验)5.6、跳过 request 合法域名校验

如果后端程序员 **仅仅提供了 http 协议的接口、暂时没有提供 https 协议的接口**，此时为了不耽误开发的进度，我们需要在微信开发者工具中，**临时开启 [开发环境不校验请求域名、TLS 版本及 HTTPS 证书」 选项**，跳过服务器域名的校验。此时，在微信开发者工具中及手机开启调试模式时，不会进行服务器域名的校验。

![image-20210729212121769](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729212121769.0c82ee8c.png)

**注意：在服务器域名配置成功后，建议开发者关闭此选项进行开发，并在各平台下进行测试，以确认服务器域名配置正确。**

#### [#](https://weldon0.github.io/wxxcx-docs/day02/#_5-7、关于跨域和-ajax-的说明)5.7、关于跨域和 AJAX 的说明

1. 跨域问题只存在于基于浏览器的 Web 开发中。由于**小程序的宿主环境不是浏览器，而是微信客户端**，所以**小程序中不存在跨域问题**
2. AJAX 技术的核心是依赖于浏览器中的 XMLHttpRequest 这个对象，由于 **小程序宿主环境是微信客户端**，所以小程序中**不能叫做 发起 AJAX 请求**，而是**叫做 发起网络数据请求**

`const xhr = new XMLHttpRequest()`

## [#](https://weldon0.github.io/wxxcx-docs/day02/#_5、案例)5、案例

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_5-1、案例效果)5.1、案例效果

![image-20210729222353115](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729222353115.efa34ca6.png)

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_5-2、实现思路)5.2、实现思路

1. 新建项目并梳理项目结构
2. 配置 导航栏 效果
3. 配置 tabBar 效果
4. 实现 轮播图 效果
5. 实现 九宫格 效果
6. 实现 图片布局

### [#](https://weldon0.github.io/wxxcx-docs/day02/#_5-3、代码实现)5.3、代码实现

**1、新建项目并梳理项目结构**

- 使用微信开发者工具新建项目
- 创建三个页面，分别是
  - pages/home/home
  - pages/message/message
  - pages/contact/contact
- 删除 index 和 log 页面

![image-20210729213941629](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729213941629.bc080756.png)

**2、配置导航栏效果**

`app.json` 里面的配置

```json
"window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#2b4b6b",
    "navigationBarTitleText": "本地生活",
    "navigationBarTextStyle": "white"
}
```

![image-20210729214124223](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729214124223.b27a9954.png)

**3、配置 tabBar**

`app.json`里面配置

```js
"tabBar": {
    "selectedColor": "#ed523c",
    "backgroundColor": "#fff",
    "list": [
      {
        "pagePath": "pages/home/home",
        "text": "主页",
        "iconPath": "/images/tabs/home.png",
        "selectedIconPath": "/images/tabs/home-active.png"
      },
      {
        "pagePath": "pages/message/message",
        "text": "消息",
        "iconPath": "/images/tabs/message.png",
        "selectedIconPath": "/images/tabs/message-active.png"
      },
      {
        "pagePath": "pages/contact/contact",
        "text": "联系我们",
        "iconPath": "/images/tabs/contact.png",
        "selectedIconPath": "/images/tabs/contact-active.png"
      }
    ]
 }
```

![image-20210729214641965](data:image/png;base64,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)

**4、实现轮播图效果**

- 配置轮播图数据 `home.js`

```js
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 1. 创建存放轮播图数据的列表
    swiperList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 3. 调用获取轮播图数据方法
    this.getSwiperList()
  },
  // 2. 定义获取轮播图数据的方法
  getSwiperList () {
    wx.request({
      url: 'https://www.escook.cn/slides',
      method:'GET',
      success: res=>{
        this.setData({
          swiperList:res.data
        })
      }
    })
  }
})   
```

- 渲染轮播图结构和样式

`home.wxml`绘制结构

```html
<!-- 轮播图区域 -->
<swiper indicator-dots circular>
	<swiper-item wx:for="{{ swiperList }}" wx:key="id">
    	<image src="{{ item.image }}"></image>
    </swiper-item>
</swiper>
```



`home.wxss`绘制样式

```css
swiper{
  height: 350rpx;
}
swiper-item image{
  width: 100%;
  height: 100%;
}
```



![image-20210729215419544](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729215419544.615ea361.png)

**5、获取九宫格数据**

- 配置九宫格数据 `home.js`

```js
// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 创建存放轮播图数据的列表
    swiperList:[],
    // 存放九宫格数据的列表
    gridList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用获取轮播图数据方法
    this.getSwiperList()
    // 调用获取宫格数据的方法
    this.getGridList()
  },
  // 定义获取轮播图数据的方法
  getSwiperList () {
    wx.request({
      url: 'https://www.escook.cn/slides',
      method:'GET',
      success: res=>{
        this.setData({
          swiperList:res.data
        })
      }
    })
  },
  // 定义获取九宫格数据的方法
  getGridList () {
    wx.request({
      url: 'https://www.escook.cn/categories',
      method:'GET',
      success: res=>{
        this.setData({
          gridList: res.data
        })
      }
    })
  }
})    
```



- 绘制九宫格结构和样式

`home.wxml`绘制结构

```html
<!-- 轮播图区域 -->
<swiper indicator-dots circular>
	<swiper-item wx:for="{{ swiperList }}" wx:key="id">
    	<image src="{{ item.image }}"></image>
    </swiper-item>
</swiper>
<!-- 九宫格区域 -->
<view class="grid-list">
  <view class="grid-item" wx:for="{{ gridList }}" wx:key="id">
    <image src="{{ item.icon }}"></image>
    <text>{{ item.name }}</text>
  </view>
</view>
```



`home.wxss`绘制样式

```css
.grid-list{
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid #efefef;
  border-left:1px solid #efefef;
}
.grid-item{
  width: 32.333%;
  height: 200rpx;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
  box-sizing: border-box;
  flex-grow: 1;
}
.grid-item image{
  width: 60rpx;
  height: 60rpx;
}
.grid-item text{
  font-size: 24rpx;
  margin-top: 10rpx;
}
```



![image-20210729222232611](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729222232611.2ae62ef8.png)

**6、实现 图片布局**

- 渲染底部图片结构 

```html
<!-- 轮播图区域 -->
<swiper indicator-dots circular>
	<swiper-item wx:for="{{ swiperList }}" wx:key="id">
    	<image src="{{ item.image }}"></image>
    </swiper-item>
</swiper>
<!-- 九宫格区域 -->
<view class="grid-list">
  <view class="grid-item" wx:for="{{ gridList }}" wx:key="id">
    <image src="{{ item.icon }}"></image>
    <text>{{ item.name }}</text>
  </view>
</view>
<!-- 图片区域 -->
<view class="img-box">
  <image src="/images/link-01.png" mode="widthFix"></image>
  <image src="/images/link-02.png" mode="widthFix"></image>
</view>
```

- 渲染底部图片样式

```css
.img-box{
  display: flex;
  justify-content: space-around;
  padding: 20rpx 10rpx;
}
.img-box image{
  width: 45%;
}
```

![image-20210729222248692](https://weldon0.github.io/wxxcx-docs/assets/img/image-20210729222248692.fc2a5e13.png)
