---
title: 偵聽器
descript: 偵聽器
lastUpdated: true
---

# 偵聽器

監聽數據變化去改變其它狀態

## 選項式api

 `watch` 選項在每次響應式 property 發生變化時觸發一個函數：

```  vue
<template>
    <p>watch</p>
    <input type="text" v-model.number.lazy="a1" />
    <input type="text" v-model.number.lazy="b1" />
    <p>{{ sum }}</p>
    <p>{{ msg }}</p>
</template>

<script>
export default {
  data () {
    return {
      a1: 0,
      b1: 0,
      sum: 0,
      msg: ''
    }
  },
  watch: {
    a1 (newvalue, oldvalue) {
      this.sum = newvalue + this.b1
    },
    b1 (newvalue, oldvalue) {
      this.sum = newvalue + this.a1
    },
    sum (newvalue, oldvalue) {
      if (newvalue - oldvalue > 0) {
        this.msg = `sum增加了${newvalue - oldvalue}`
      } else if (newvalue - oldvalue < 0) {
        this.msg = `sum減少了${oldvalue - newvalue}`
      }
    }
  }
}
</script>
```

#### 深层侦听器

`watch` 默認是淺層的，被偵聽的 property，僅在被賦新值時，才會觸發回調函數，而嵌套 property 的變化不會觸發。

如果想偵聽所有嵌套的變更，需要深層偵聽器，即添加一個屬性`deep: true`：

``` vue
<template>
    <p>watch</p>
    <input type="text" v-model.number.lazy="num.a1" />
    <input type="text" v-model.number.lazy="num.b1" />
    <p>{{ sum }}</p>
    <p>{{ msg }}</p>
</template>

<script>
export default {
  data () {
    return {
      num: {
        a1: 0,
        b1: 0
      },
      sum: 0,
      msg: ''
    }
  },
  watch: {
    num: {
      handler (newvalue, oldvalue) {
        let s = 0
        for (const item in newvalue) {
          s += newvalue[item]
        }
        this.sum = s
      },
      deep: true
    },
    sum (newvalue, oldvalue) {
      if (newvalue - oldvalue > 0) {
        this.msg = `sum增加了${newvalue - oldvalue}`
      } else if (newvalue - oldvalue < 0) {
        this.msg = `sum減少了${oldvalue - newvalue}`
      }
    }
  }
}
</script>
```

ps： 深度偵聽需要遍歷被偵聽對象中的所有嵌套的 property，當用於大型數據結構時，開銷很大。因此請只在必要時才使用它，並且要留意性能。

#### 即時回調的偵聽器

`watch `默認是懶偵聽的：僅在偵聽源變化時，才會執行回調。但在某些場景中，我們希望在創建偵聽器時，立即執行一遍回調。

添加一個屬性`immediate: true` 來實現

``` js
 watch: {
    num: {
      handler (newvalue, oldvalue) {
        let s = 0
        for (const item in newvalue) {
          s += newvalue[item]
        }
        this.sum = s
      },
      deep: true
    },
    sum: {
      handler (newvalue, oldvalue) {
        if (newvalue - oldvalue > 0) {
          this.msg = `sum增加了${newvalue - oldvalue}`
        } else if (newvalue - oldvalue < 0) {
          this.msg = `sum減少了${oldvalue - newvalue}`
        } else {
          this.msg = '沒有變化'
        }
      },
      immediate: true
    }
  }
```

#### 回調的刷新時機
當你更改了響應式狀態，它可能會同時觸發 Vue 組件更新和偵聽器回調。

默認情況下，用戶創建的偵聽器回調，都會在 Vue 組件更新之前被調用。這意味著你在偵聽器回調中訪問的 DOM 將是被 Vue 更新之前的狀態。

如果想在偵聽器回調中能訪問被 Vue 更新之後的DOM，你需要指明 `flush: 'post` 選項

###  `this.$watch()`

也可以使用組件實例的 $watch() 方法來命令式地創建一個偵聽器：

``` js
export default {
  created() {
    this.$watch('a1', (newvulue) => {
      // ...
    })
  }
}
```

如果要在特定條件下設置一個偵聽器，或者只偵聽響應用戶交互的內容，這方法很有用。它還允許你提前停止該偵聽器。

``` vue
export default {
  created() {
    const unwatch = this.$watch('a1', (newvulue) => {
      // ...
    })
  },
   // ...当该侦听器不再需要时
   unwatch()
}
```



## 組合式api

在組合式api中，使用 `watch` 函數在每次響應式狀態發生變化時觸發回調函數

``` vue
<template>
    <input type="text" v-model.lazy.number="a1">
</template>

<script setup>
import { ref, watch } from 'vue'

const a1 = ref(0)

watch(a1, (newvalue, oldvalue) => console.log(newvalue))

</script>
```

`watch` 的第一個參數可以是不同形式的「來源」：它可以是一個 ref (包括計算屬性)、一個響應式對象、一個 getter 函數、或多個來源組成的數組：

``` js
<template>
    <input type="text" v-model.lazy.number="a1" />
    <input type="text" v-model.lazy.number="b1" />
    <input type="text" v-model.lazy.number="obj.count" />
</template>

<script setup>
import { ref, watch, reactive } from 'vue'

const a1 = ref(0)

const b1 = ref(0)

const obj = reactive({count:1})

// 單個ref
watch(a1, (newvalue, oldvalue) => console.log(newvalue))

// getter
watch(
    () => a1.value + b1.value,
    (newSum, oldSum) => {
        console.log('newSum:' + newSum)
        console.log('oldSum:' + oldSum)
    }
)

// getter
watch(
    ([a1, b1]),
    (newValue, oldValue) => {
        console.log('newa1:' + newValue)
        for (const key in newValue) {
            console.log(key + ': ' + newValue[key])
        }
        console.log(typeof oldValue) // object
        console.log('newB1:' + oldValue)
    }
)

// 不能偵聽響應式對象的 property
// watch(obj.count, (newValue) => console.log(newValue))
// 提供一个 getter 函数
watch(
  () => obj.count,
  (count) => {
    console.log(`count is: ${count}`)
  }
)

</script>
```

#### 深层侦听器

直接給 `watch()` 傳入一個響應式對象，會隱式地創建一個深層偵聽器。

``` js
watch(obj, (newValue) => console.log(newValue))
```

這不同於返回響應式對象的 getter 函數：只有在 getter 函數返回不同的對象時，才會觸發回調。

顯式地加上 deep 選項，強製轉成深層偵聽器

```
watch(
  () => obj,
  () => {
    // 仅当 obj 被替换时触发
  }，
  {deep: true}
)
```

## `watchEffect()`

watch() 是懶執行的：僅在偵聽源變化時，才會執行回調。

我们想请求一些初始数据，然后在相关状态更改时重新请求数据。我们可以这样写：

``` js
const a1 = ref(1)
const b1 = ref(0)
const sum = ref(0)

// 立即獲取
sum.value = a1.value + b1.value
// ...再侦听 a1 , b1 变化
watch(
    () => a1.value + b1.value,
    (newSum, oldSum) => {
        sum.value = newSum
    })
```

這段代碼還可以用 `watchEffect`函數 來簡化。watchEffect() 會立即執行一遍回調函數

```js
watchEffect(() => {
  sum.value = a1.value + b1.value
})
```

#### 回調的刷新時機

同樣的，使用`flush: 'post'`

``` js
watch(source, callback, {
  flush: 'post'
})

watchEffect(callback, {
  flush: 'post'
})
```

後置刷新的 watchEffect() 有個更方便的別名 watchPostEffect()：

``` js
import { watchPostEffect } from 'vue'

watchPostEffect(() => {
  /* 在 Vue 更新后执行 */
})
```

#### 停止侦听器

要手動停止一個偵聽器，請調用 watch 或 watchEffect 返回的函數：

``` js
const unwatch = watchEffect(() => {})

// ...當不再需要時
unwatch()
```

