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

有时需要在内联事件处理器中访问原生 DOM 事件。你可以向该处理器方法传入一个特殊的 `$event` 变量，或者使用内联箭头函数：

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

