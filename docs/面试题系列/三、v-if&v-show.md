---
title: 🌹三、v-if&v-show
---
1. 区别

   * 展示形式不同
     v-if是 创建一个dom节点
     V-show 是display:none / block

   * 使用场景不同
     初次加载v-if要比v-show好，页面不会做加载盒子
     频繁切换v-show要比v-if好，创建和删除的开销太大了，显示和隐藏开销较小

2. 优先级问题

   源码中体现 >> v-for 比 if 比较高

3. 一起使用

   1. 报错

   ```js
    4:11  error  The 'arr' variable inside 'v-for' directive should be replaced with a computed property that returns filtered array instead. You should not mix 'v-for' with 'v-if'  vue/no-use-v-if-with-v-for
   
   ```

   2. 影响性能

      v-if条件不满足 >> 也会执行遍历 >> 性能差

   3. 怎么解决

      v-if添加到外层盒子，不满足条件 >> 不执行渲染

:::details 源码

```js
function genElement (el, state) {
    if (el.parent) {
      el.pre = el.pre || el.parent.pre;
    }

    if (el.staticRoot && !el.staticProcessed) {
      return genStatic(el, state)
    } else if (el.once && !el.onceProcessed) {
      return genOnce(el, state)
    } else if (el.for && !el.forProcessed) {
      return genFor(el, state)
    } else if (el.if && !el.ifProcessed) {
      return genIf(el, state)
    } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
      return genChildren(el, state) || 'void 0'
    } else if (el.tag === 'slot') {
      return genSlot(el, state)
    } else {
      // component or element
      var code;
      if (el.component) {
        code = genComponent(el.component, el, state);
      } else {
        var data;
        if (!el.plain || (el.pre && state.maybeComponent(el))) {
          data = genData$2(el, state);
        }

        var children = el.inlineTemplate ? null : genChildren(el, state, true);
        code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
      }
      // module transforms
      for (var i = 0; i < state.transforms.length; i++) {
        code = state.transforms[i](el, code);
      }
      return code
    }
  }
```



:::