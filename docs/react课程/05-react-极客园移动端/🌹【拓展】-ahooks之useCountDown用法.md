---
title: 🌹【拓展】-ahooks之useCountDown用法
---

### 实现一个倒计时效果

需求：点击的时候开始倒计时5s

ahooks用法

1. 

```jsx
import React, { useState } from 'react';
import { useCountDown } from 'ahooks';

export default () => {
  // 1.先把目标时间初始化进去，由于初始化为undefined不会有任何及时效果
  const [targetDate, setTargetDate] = useState(); 
	
  // 2、配置的时候把targetDate初始化进去
  const [countdown] = useCountDown({
    targetDate,
    onEnd: () => {
      alert('End of the time');
    },
  });

  return (
    <>
      <button
        onClick={() => {
        	// 3、点击了设置按钮之后，手动设置一个目标时间，这个时间会传递给useCountDown
        	// 4、由于设置的时间是比当前时间多了5s，所以以目标时间开始倒计时，知道时间到了为止
          setTargetDate(Date.now() + 5000);
        }}
        // 5、如果倒计时不为0，禁用按钮
        disabled={countdown !== 0}
      >
  
        {countdown === 0 ? '发送验证码' : `${Math.round(countdown / 1000)}s后重新发送`}
      </button>
      <button
        onClick={() => {
        // 6、停止计时，只需要清除目标时间即可
          setTargetDate(undefined);
        }}
        style={{ marginLeft: 8 }}
      >
        stop
      </button>
    </>
  );
};
```

