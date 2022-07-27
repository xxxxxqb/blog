---
title: 組件事件
descript: 組件事件
lastUpdated: true
---

# 組件事件

### 触发与监听事件

在組件的模板表達式中，可以直接使用 $emit 方法，通過傳入事件名稱來拋出一個傳給父組件事件

``` vue
<button @click="$emit('computedNum')">add num</button>
```

父組件可以通過 v-on來監聽事件：

``` 
<EmitComponents @computed-num="consoe.log('this is a customer event')" />
```

### 事件參數

可以給 $emit 提供一個(或多個)值作為額外的參數

``` vue
<button @click="$emit('computedNum', 1)">add num</button>
```

在父組件中監聽事件，我們可以先簡單寫一個內聯的箭頭函數作為監聽器，此時可以訪問到事件附帶的參數:

``` vue
<EmitComponents @computed-num="(n) => consoe.log(n)" />
```

或者自定義一個方法：

``` vue
<template>
  <EmitComponents @computed-num="computed" />
</template>
<script>
    export default {
        methods: {
            computed (n) {
                console.log(n)
            }
        }
    }
</script>
```

### 声明触发的事件

#### 選項式api

组件要触发的事件可以显式地通过 `emits `选项来声明：

``` vue
emits: ['computedNum']
```

在`<script>` 中使用

``` vue
<template>
    <label for="num"></label>
    <input id="num" type="text" v-model.number="num">
    <button @click="computed">substr num</button>
</template>
<script>

export default {
  data () {
    return {
      num: 0
    }
  },
  emits: ['computedNum'],
  methods: {
    computed () {
      // 不用聲明可以直接使用
      this.$emit('computedNum', this.num, 'add')
    }
  }
}
</script>

```



#### 組合式api

組件要觸發的事件可以顯式地通過 defineEmits() 宏來聲明：

``` vue
<script setup>
const emit = defineEmits(['computedNum'])
</script>
```

在 `<template>` 中使用的 `$emit` 方法不能在組件的 `<script setup>` 部分中使用。 但`defineEmits()` 會返回一個相同作用的函數供我們使用

``` vue
<template>
    <label for="num"></label>
    <input id="num" type="text" v-model.number="num">
    <button @click="computed">substr num</button>
</template>
<script setup>
import { ref } from 'vue'

const emit = defineEmits(['computedNum'])

const num = ref(0)

function computed() {
    emit('computedNum', num.value)
}
</script>

```

`defineEmits() `宏不能在子函數中使用，他必須直接放置在 `<script setup>`

#### 事件校驗

和對 prop 添加類型校驗的方式類似，所有觸發的事件也可以使用對象形式來描述。

(並不會阻止事件繼續執行， 只會跑出一個警告，建議在父組件執行相關事件再次驗證並阻止事件執行)

``` vue
  emits: {
    computedNum: (n) => {
      if (n) {
        return true
      } else {
        console.warn('n is empty')
        return false
      }
    }
  }
```

``` vue
<script setup>
const emit = defineEmits({
    computedNum: (n) => {
      if (n) {
        return true
      } else {
        console.warn('n is empty')
        return false
      }
    }
  })

</script>
```

#### 配合v-model 使用

from表單相關可以通過`v-model` 實現數據雙向綁定

``` vue
 <input id="num" type="text" v-model.number="num">
```

等價於

``` vue
 <input id="num" type="text" :value=num @input="($event) => num = $event.target.value">
```

當使用在一個組件上時，`v-model` 是這樣做的：

```vue
<VmodelComponent
 v-model="customInput"
 @update:modelValue="(value) => customInput = value" /> // 此行可以省略
```

為了使組件能像這樣工作，內部的` <input> `組件必須：

1. 綁定` value` attribute 到 `modelValue  ` prop
2. 輸入新的值時在 `input `元素上觸發 update:modelValue 事件

``` vue
<template>
<label for="customInput"> custom input</label>        
<input type="text" id="customInput" :value="modelValue" @input="changeParentValue">
</template>

<script setup>
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])
function changeParentValue ($event){
    emits('update:modelValue', $event.target.value)
}
</script>
```

另一種在組件內實現 v-model 的方式是使用一個可寫的 computed property，給出 getter 和 setter:

- get 方法需返回 modelValue property 
-  set 方法需觸發相應的事件

``` vue
<template>
<label for="customInput"> custom input</label>        
<input type="text" id="customInput" v-model="modelValue">
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const modelValue = computed({
    get() {
        return props.modelValue
    }
    set(value) {
        emits('update:modelValue', $event.target.value)
    }
})
</script>
```

### `v-model` 參數

默認情況下，`v-model` 在組件上都是使用 `modelValue` 作為 prop，以 `update:modelValue` 作為對應的事件。

我們可以通過給 `v-model` 指定一個參數來更改這些名字：

``` vue
<VmodelComponent
 v-model:title="customInput"
```

在這個例子中，子組件應該有一個 title prop，並通過觸發 update:title 事件更新父組件值

``` vue
<template>
<label for="customInput"> custom input</label>        
<input type="text" id="customInput" v-model="title">
</template>

<script setup>
import { computed } from 'vue'
const props = defineProps(['title'])
const emits = defineEmits(['update:title'])
const title = computed({
    get() {
        return props.title
    },
    set(value) {
        emits('update:title', value)
    }
})
</script>
```

#### 處理多個`v-model` 參數

``` vue
// 父組件
<VmodelComponent2
  v-model:first-name="first"
  v-model:last-name="last"
/>
```

``` vue
/// 子組件
<script setup>
defineProps({
  firstName: String,
  lastName: String
})

defineEmits(['update:firstName', 'update:lastName'])
</script>

<template>
  <input
    type="text"
    :value="firstName"
    @input="$emit('update:firstName', $event.target.value)"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```

#### 處理 `v-model` 修飾符`

當我們在學習輸入綁定時，我們知道了 v-model 有一些內置的修飾符，例如 `.trim`，`.number `和 `.lazy`,這些修飾符在組件上使用`v-model`是沒有效果。

但是我們可以自定義修飾式，例如我們可以創建一個自定義的修飾符 `.capitalize`，自動將` v-model` 綁定輸入的字符串值第一個字母轉為大寫。

``` vue
// 父組件
<UserName
  v-model:first-name.capitalize="first"
  v-model:last-name="last"
/>
```

要給組件的 v-model 添加修飾符，都可以通過 `modelModifiers` (參數名+Modifiers )prop 在組件內訪問到。

我們需要創建一個`prop`對象，默認是一個空對象：

``` vue
defineProps({
  firstName: String,
  lastName: String,
  firstNameModifiers: {
    default: () => ({})
  }
})
```

組件的 `firstNameModifiers` prop 包含了` capitalize` 且其值為 `true`，因為它在模板中的 `v-model `綁定上被使用了

下來開始檢索 `modelModifiers` 對象的 key 並寫一個處理函數來改變拋出事件附帶的值

``` vue
<script setup>
const props = defineProps({
  firstName: String,
  lastName: String,
  firstNameModifiers: {
    default: () => ({})
  }
})
const emits = defineEmits(['update:firstName', 'update:lastName'])

function emitValue(e){{
    let value = e.target.value
    console.log(value)
     if (props.firstNameModifiers.capitalize) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    emits('update:firstName', value)
}}

</script>

<template>
  <input
    type="text"
    :value="firstName"
    @input="emitValue"
  />
  <input
    type="text"
    :value="lastName"
    @input="$emit('update:lastName', $event.target.value)"
  />
</template>
```

