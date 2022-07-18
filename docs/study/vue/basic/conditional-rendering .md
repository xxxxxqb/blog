---
title: 條件渲染
descript: 條件渲染
lastUpdated: true
---

# 條件渲染

### v-if

`v-if` 指令被用於按條件渲染一個區塊。這個區塊只會在指令的表達式為真時才被渲染

也可以使用 `v-else` 為 `v-if` 添加一個「else 區塊」。

`v-else-if` 提供的是相應於 `v-if` 的「else if 區塊」，可以連續多次重復使用

```vue
<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    countIncrement () {
      this.count += 1
    },
    subtract () {
      this.count -= 1
    }
  }
}

</script>
<template>
    <button @click="countIncrement">+1</button>
    <button @click="subtract">-1</button>
    <p v-if="count === 0">当count = 0, 显示的内容</p>
    <p v-else-if="count>0">当count &gt; 0, 显示的内容</p>
    <p v-else>当count &lt; 0, 显示的内容</p>
</template>

```

### v-show

另一個可以用來按條件顯示一個元素的指令是 `v-show`。其用法基本一樣：

```vue
    <p v-show="count === 0">v-show显示内容</p>
```

### v-if 和 v-show的區別

1. `v-if`動態的向DOM樹內添加或者刪除DOM元素；「真正」的條件渲染，因為它會確保在切換過程中條件塊內的事件監聽器和子組件適當地被銷毀和重建；在初始渲染條件為假時，什麽也不做。有更高的切換消耗
2. `v-show`通過設置DOM元素的display樣式屬性控製顯示和隱藏；不管初始條件是什麽，元素總是會被渲染，並且只是簡單地基於 CSS 進行切換。有更高的初始渲染消耗
3. `v-if`適合運行條件很少改變的情況； `v-show`適合頻繁切換的情況。