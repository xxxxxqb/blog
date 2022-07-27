---
title: 獲取元素ref
descript: 獲取元素ref
lastUpdated: true
---

### ref

有時候我們仍然需要直接訪問底層 DOM 元素。要實現這一點，我們可以使用特殊的 `ref` attribute：

``` vue
<input type="text" ref="focus_input" />
```

`ref `是一個特殊的 attribute，和` v-for `中提到的` key `類似。它允許我們在一個特定的 DOM 元素或子組件實例被掛載後，獲得對它的直接引用。

### 訪問模板ref

#### 響應api

挂载结束后 ref 都会被暴露在 `this.$refs` 之上

```vue
<script>
export default {
  mounted () {
    console.log(this.$refs)
    console.log(this.$refs.focus_input)
    this.$refs.focus_input.focus()
    // this.$refs['focus_input'].focus()
  }
}
</script>

<template>
  <input ref="focus_input" />
</template>
```



#### 組合式api

為了通過組合式 API 獲得該模板 ref，我們需要聲明一個同名的 ref：
``` vue
<script setup>
import { ref, onMounted } from 'vue'

// 聲明一個 ref 來存放該元素的引用
// 必須和模板 ref 同名
// 只可以在組件掛載後才能訪問 ref。如果想在模板中的表達式上訪問 input，在初次渲染時會是 null。這是因為在初次渲染前這個元素還壓根不存在呢！
const input = ref(null)

onMounted(() => {
  input.value.focus()
})

// 如果你試圖觀察一個模板 ref 的變化，確保考慮到 ref 的值為 null 的情況
watchEffect(() => {
  if (input.value) {
    input.value.focus()
  } else {
    // 此時還未掛載，或此元素已經被卸載（例如通過 v-if 控製）
  }
})
</script>

<template>
  <input ref="input" />
</template>
```
## v-for 上的ref

 ### 選項式 API
 當 ref 在 v-for 中使用時，相應的 ref 中包含的值是一個數組：

``` vue
<script>
export default {
  data() {
    return {
      list: [
        /* ... */
      ]
    }
  },
  mounted() {
    console.log(this.$refs.items)
  }
}
</script>

<template>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
</template>
```

組合式api
``` vue
 <script setup>
import { ref, onMounted } from 'vue'

const list = ref([])

const items = ref([])

onMounted(() => console.log(items.value))
</script>

<template>
  <ul>
    <li v-for="item in list" ref="items">
      {{ item }}
    </li>
  </ul>
</template>
```