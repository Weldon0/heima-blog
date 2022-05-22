---
icon: creative
category: 项目笔记
---

# 人力资源系统



需求：url查询参数转对象

```js
const url = 'www.itheima.net?id=1&name=黑马&age=18'

function getParams(url) {
  // 自己实现这个方法
}

const paramsObj = getPrams(url)
console.log(paramsObj)
// 希望打印到的结果是
{
  id: 1,
  age: 18,
  name: '黑马'  
}
```

