---
title: 聲明響應式狀態
descript: 聲明響應式狀態
lastUpdated: true
---

# 聲明響應式狀態

## 選項式API

選用選項式 API 時，會用 `data` 選項來聲明組件的響應式狀態。此選項的值應為返回一個對象的函數，基于 [JavaScript Proxy（代理）](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy) 实现响应式的

Vue 將在創建新組件實例的時候調用此函數，並將函數返回的對象封裝到其響應式系統中。

此對象的任何頂層 property 都被代理到組件實例 (即方法和生命周期鉤子中的 `this`) 上。

```vue
<script>
export default {
  data () {
    return {
      count: 0
    }
  }
}
</script>
```

### 聲明方法

要為組件添加方法，需要用到 methods 選項。它應該是一個包含所有方法的對象：

```vue
<script>
export default {
  data () {
    return {
      count: 0
    }
  }
  methods：{
    increment() {
      this.count++
    }
  }
}
</script>
```



## 組合式API

使用 `reactive()` 函數創建一個響應式對象或數組（基於JavaScript Proxy）：

```vue
<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({ count: 0 })

    function increment() {
      state.count++
    }
  }
}
</script>
```

或者：

```vue
<script setup>
import { reactive } from 'vue'

const state = reactive({ count: 0 })

function increment() {
  state.count++
}
</script>
```

使用ref() 方法來創建可以使用任何值類型的響應式ref：

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
console.log(count.value)
</script>
```

`ref()` 從參數中獲取到值，將其包裝為一個帶 `.value` property 的 ref 對象

當 ref 在模板中作為頂層 property 被訪問時，它們會被自動「解包」，不需要使用 `.value`

```vue
<script setup>
import { ref } from 'vue'

const count = ref(0)
console.log(count.value)
</script>
<template>
	<span>{{ count }}</span>
</template>
```

當一個 `ref` 作為一個響應式對象的 property 被訪問或更改時，它也會自動解包:

```vue
<script setup>
import { ref, reactive } from 'vue'

const count = ref(0)

const state = reactive({
  count
})

console.log(state.count) // 0

console.log(count.value) // 0

state.count = 1
    
console.log(state.count) // 1

console.log(count.value) // 1
    
count.value = 2


console.log(state.count) // 2

console.log(count.value) // 2
    
</script>
```

#### 响应性语法糖 

響應性語法糖目前是一個實驗性功能，默認是禁用的。

$ref() 方法是一個編譯時的宏命令：它不是一個真實的、在運行時會調用的方法。而是用作 Vue 編譯器的標記，表明最終的 count 變量需要是一個響應式變量。

響應式的變量可以像普通變量那樣被訪問和重新賦值，但這些操作在編譯後都會變為帶 .value 的 ref。

```vue
<script setup>
// import { $ref } from 'vue/macros' // 全局引入，無需再次引入
let count = $ref(0)

function increment() {
  // 无需 .value
  count++
}
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>
```
