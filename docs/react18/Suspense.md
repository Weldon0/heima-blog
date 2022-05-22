### Suspense
1.  suspesse嵌套的组件内部只要抛出promise错误就会loading
2. 只要promise成功了，组件才会渲染

> Suspense能够捕获子组件抛出的promise错误
> 捕获到错误以后展示fallback组件
> 捕获到错误以后可以通过then获取结果，如果成功了则继续渲染子组件

```tsx


import React, {Suspense} from 'react';

function fetchUser(id: number) {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        data: {
          id: 1,
          name: '姓名' + id
        }
      })
    }, 2000)
  }))
}

function createResource(promise: any) {
  let status = 'pending'; // 未知状态
  let result: any
  return {
    read() {
      // return 1
      if (status === 'success' || status === 'error') {
        return result;
      } else {
        throw promise.then((data: any) => {
          status = 'success';
          result = data
        }, (error: Error) => {
          status = 'error';
          result = error
        })
      }
    }
  }
}

let userRes = createResource(fetchUser(1))
function User() {
  let result: any = userRes.read()
  if (result.success) {
    let user = result.data
    return <div>
      {user.id} {user.name}
    </div>
  }
  return <div>234</div>
}

const MyComponent = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <User/>
    </Suspense>
  );
};

export default MyComponent;

```

:::tip Suspense组件简单实现

```js
import React, {PropsWithChildren, ReactNode} from 'react';

interface Props {
  fallback: ReactNode
}

class Suspense extends React.Component<PropsWithChildren<Props>> {

  state = {
    loading: false
  }
  componentDidCatch(error: any, errorInfo: React.ErrorInfo) {
    if (typeof error.then === 'function') {
      this.setState({
        loading: true
      })

      error.then(() => {
        this.setState({
          loading: true
        })
      })
    }
  }

  render() {
    const {children, fallback} = this.props
    if (this.state.loading) {
      return fallback
    }
    return children
  }
}

export default Suspense;

```



:::



## 四、SuspenseList

上面我们讲述了 `Suspense` 的用法，那如果有多个 `Suspense` 同时存在时，我们想控制他们的展示顺序以及展示方式，应该怎么做呢？

React 中也提供了一个新的组件：`SuspenseList`

### SuspenseList 属性

`SuspenseList` 组件接受三个属性

- `revealOrder`: 子 `Suspense` 的加载顺序
  - forwards: 从前向后展示，无论请求的速度快慢都会等前面的先展示
  - Backwards: 从后向前展示，无论请求的速度快慢都会等后面的先展示
  - together: 所有的 Suspense 都准备好之后同时显示
- tail: 指定如何显示 `SuspenseList` 中未准备好的 `Suspense`
  - 不设置：默认加载所有 Suspense 对应的 fallback
  - collapsed：仅展示列表中下一个 Suspense 的 fallback
  - hidden: 未准备好的项目不限时任何信息
- children: 子元素
  - 子元素可以是任意 React 元素
  - **当子元素中包含非  `Suspense` 组件时，且未设置 `tail` 属性，那么此时所有的 `Suspense` 元素必定是同时加载，设置 `revealOrder` 属性也无效。当设置 `tail` 属性后，无论是 `collapsed` 还是 `hidden`，`revealOrder` 属性即可生效**
  - 子元素中多个 `Suspense` 不会相互阻塞

### SuspenseList 使用

`User` 组件

```jsx
import React from "react";

function wrapPromise(promise) {
    let status = "pending";
    let result;
    let suspender = promise.then(
        (r) => {
            status = "success";
            result = r;
        },
        (e) => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        },
    };
}

// 网络请求，获取 user 数据
const requestUser = (id) =>
    new Promise((resolve) =>
        setTimeout(
            () => resolve({ id, name: `用户${id}`, age: 10 + id }),
            id * 1000
        )
    );

const resourceMap = {
    1: wrapPromise(requestUser(1)),
    3: wrapPromise(requestUser(3)),
    5: wrapPromise(requestUser(5)),
};

const User = (props) => {
    const resource = resourceMap[props.id];
    const user = resource.read();
    return <div>当前用户是: {user.name}</div>;
};

export default User;
复制代码
```

`App` 组件

```jsx
import React from "react";
import ReactDOM from "react-dom";

const User = React.lazy(() => import("./User"));
// 此处亦可以不使用 React.lazy()，直接使用以下 import 方式引入也可以
// import User from "./User"

const App = () => {
    return (
        <React.SuspenseList revealOrder="forwards" tail="collapsed">
            <React.Suspense fallback={<div>Loading...</div>}>
                <User id={1} />
            </React.Suspense>
            <React.Suspense fallback={<div>Loading...</div>}>
                <User id={3} />
            </React.Suspense>
            <React.Suspense fallback={<div>Loading...</div>}>
                <User id={5} />
            </React.Suspense>
        </React.SuspenseList>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
复制代码
```

### 使用 SuspenseList 后效果图

![SuspenseList 用法图例](https://wuxiaohui-1254415986.cos.ap-nanjing.myqcloud.com/uPic/510c737523214ac48ecbe5079a17cfb6~tplv-k3u1fbpfcp-zoom-in-crop-mark:1304:0:0:0.awebp)




### 使用errorboundary防止页面报错

```ts
import React, {Component, PropsWithChildren} from 'react';

interface Props {
  fallback: React.ReactNode
}

class ErrorBoundary extends Component<PropsWithChildren<Props>> {

  // 从错误对象中映射状态
  static getDerivedStateFromError (error: any) {
    return {
      hasError: true,
      error: error
    }
  }

  state = {
    hasError: false,
    error: null
  }

  render() {
    console.log(this.state)
    if(this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default ErrorBoundary;

```

使用方法

```ts
const MyComponent = () => {
  return (
    <>
      <ErrorBoundary fallback={<div>出错了</div>}>
        <Suspense fallback={<div>loading</div>}>
          <User/>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
```

