---
title: 事件處理
descript: 事件處理
lastUpdated: true
---

#  事件處理

### 監聽事件

使用 v-on 指令 (簡寫為 @) 來監聽 DOM 事件和運行 JavaScript 代碼。用法：v-on:click="methodName" 或 @click="methodName"。

事件處理器的值可以是：

- JavaScript 語句 

- 某個方法

##### JavaScript 語句 

```vue
<template>
    <button @click="count++">+1</button>
    <p>{{ count }}</p>
</template>

<script>

export default {
  name: 'eventsHandler',
  data () {
    return {
      count: 0
    }
  }
}

</script>

```

##### 調用方法

```vue
<template>
    <button @click="say('arvin')">say</button>
</template>

<script>

export default {
  methods: {
    say (name) {
      alert('hello,' + name + '!')
    }
  }
}

</script>
```

有時需要在內聯事件處理器中訪問原生 DOM 事件。可以向該處理器方法傳入一個特殊的 $event 變量，或者使用內聯箭頭函數：

```vue
<template>
    <button @click="say('arvin', $event)">say</button>
    <button @click="(event) => {return say('arvin', event)}">say</button>
	<button @click="(event) => say('arvin', event)">say</button> // 箭頭函數簡寫
</template>

<script>

export default {
  methods: {
    say (name, event) {
      alert('hello,' + name + '!')
      console.log(event)
    }
  }
}

</script>
```

### 事件修飾符

###### .stop

阻止事件冒泡，相當於`event.stopPropagation()`

###### .prevent

阻止元素默認行為，如何`<a>`跳轉鏈接，`<from>`加載頁面

事件修飾符可以使用鏈式書寫`.stop.prevent`

###### .self

當event.target是目標本身時才會觸發。

###### .capture

捕获模式, 指向内部元素的事件，在被内部元素处理前，先被外部处理

###### .once

event只觸發一次

###### .passive

修飾符一般用於觸摸事件的監聽器

``` vue
<template>

    <!-- 默認，執行 clickA 事件，並執行a默認跳轉事件 -->
    <a @click="clickA()" href="https://www.baidu.com">鏈接</a>

    <!-- .prevent, 只執行clickA 事件，阻止a默認跳轉事件 -->
    <a @click.prevent="clickA()" href="https://www.baidu.com">鏈接</a>

    <!-- 點擊<a>, 先執行clickA事件,在執行 clickP 事件 -->
    <p @click="clickP">
      <a @click.prevent="clickA()" href="https://www.baidu.com">鏈接</a>
    </p>

    <!-- .stop 阻止冒泡事件， 點擊a執行 clickA 事件 -->
    <p @click="clickP">
      <a @click.stop.prevent="clickA()" href="https://www.baidu.com">鏈接</a>
    </p>

    <!-- .capture 捕获模式, 指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
    <p @click.capture="clickP">
      <a @click.prevent="stop($event)" href="https://www.baidu.com">鏈接</a>
    </p>

    <!-- .self 當event.target是目標本身時才會觸發。阻止向下冒泡-->
    <p @click.self="clickP">
      <a @click.prevent="clickA()" href="https://www.baidu.com">鏈接</a>
    </p>
    <p @click.once="clickP">

    </p>
</template>

<script>

export default {
  methods: {
    clickA () {
      // event.stopPropagation().preventDefault()
      alert('我點擊了鏈接')
    },
    clickP () {
      alert('我點擊了P標籤')
    }
  }
}

</script>
<style>
  p{
    width: 100px;
    height: 200px;
    background-color: #999999;
  }
</style>
```

### 按鍵修飾符

Vue 為一些常用的按鍵提供了別名：

- `.enter`
- `.tab`
- `.delete` (捕獲「Delete」和「Backspace」兩個按鍵)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

系統按鍵修飾符：

- `.ctrl`
- `.alt`
- `.shift`
- `.meta`在 Macintosh 鍵盤上，meta 是 Command 鍵 (⌘)。在 Windows 鍵盤上，meta 鍵是 Windows 鍵 (⊞)。

``` vue
<template>
  <!-- 鍵盤按下q時，執行事件 -->
  <input type="text" v-on:keyup.q="inputEvent">
  <!-- 鍵盤按下enter時，執行事件 -->
  <input @keyup.enter="inputEvent" />
  <!-- Alt + Enter -->
<input @keyup.alt.enter="inputEvent" />

<!-- 點擊 並 按下ctrl執行click事件 -->
<button @click.ctrl="click">按鈕</button>

<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="click">按鈕</button>

<!-- 鼠標右擊時觸發事件 -->
<button @click.right="click">按鈕</button>

</template>

<script>

export default {
  methods: {
    inputEvent (event) {
      console.log(event)
    },
    click () {
      alert('點擊按鈕')
    }
  }
}

</script>
<style>
  p{
    width: 100px;
    height: 200px;
    background-color: #999999;
  }
</style>
```



###### `.exact` 修飾符

允許控製觸發一個事件所需的確定組合的系統按鍵修飾符。

``` vue
<!-- 当按下 Ctrl 时，即使同时按下 Alt 或 Shift 也会触发 -->
<button @click.ctrl="onClick">A</button>

<!-- 仅当按下 Ctrl 且未按任何其他键时才会触发 -->
<button @click.ctrl.exact="onCtrlClick">A</button>

<!-- 仅当没有按下任何系统按键时触发 -->
<button @click.exact="onClick">A</button>
```

### 鼠标按键修饰符

- `.left`
- `.right`
- `.middle`
