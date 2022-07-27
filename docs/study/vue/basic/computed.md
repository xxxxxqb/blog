---
title: 計算屬性
descript: 計算屬性
lastUpdated: true
---

# Computed

模板中的表達式雖然方便，但也只能用來做簡單的操作。

如果在模板中寫太多邏輯，會讓模板變得臃腫，難以維護。

``` vue
<template>
  <ul>
    <template v-for="item in lists" :key="item">
      <li v-if="item.age > 18">
        {{ `${item.name} - ${item.age} - ${item.sex}` }}
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      lists: [
        {
          name: '小明',
          age: 18,
          sex: 'women'
        },
        {
          name: '小紅',
          age: 17,
          sex: 'women'
        },
        {
          name: '小白',
          age: 16,
          sex: 'women'
        },
        {
          name: '小智',
          age: 20,
          sex: 'men'
        },
        {
          name: '小冬',
          age: 22,
          sex: 'men'
        },
        {
          name: '小李',
          age: 19,
          sex: 'men'
        }
      ]
    }
  }
}
</script>
```



使用計算屬性來描述依賴響應式狀態的復雜邏輯。

``` vue
<template>
  <ul>
    <template v-for="item in formatlist" :key="item">
      <li>
        {{ `${item.name} - ${item.age} - ${item.sex}` }}
      </li>
    </template>
  </ul>
</template>

<script>
export default {
  computed: {
    formatlist () {
      return this.lists.filter(items => items.age > 18)
    }
  },
  data () {
    return {
      lists: [
        {
          name: '小明',
          age: 18,
          sex: 'women'
        },
        {
          name: '小紅',
          age: 17,
          sex: 'women'
        },
        {
          name: '小白',
          age: 16,
          sex: 'women'
        },
        {
          name: '小智',
          age: 20,
          sex: 'men'
        },
        {
          name: '小冬',
          age: 22,
          sex: 'men'
        },
        {
          name: '小李',
          age: 19,
          sex: 'men'
        }
      ]
    }
  }
}
</script>

```

### 計算屬性緩存 vs 方法

在表達式中調用一個函數也會獲得和計算屬性相同的結果。

不同之處在於計算屬性值會基於其響應式依賴被緩存。一個計算屬性僅會在其響應式依賴更新時才重新計算。這意味著只要`lists` 不改變，無論多少次訪問 `formatlist` 都會立即返回先前的計算結果，而不用重復執行 getter 函數。

`Date.now() `並不是一個響應式依賴, 不能直接應用在computed中。

### 可寫計算屬性

計算屬性默認僅能通過計算函數得出結果。

當嘗試修改一個計算屬性時，你會收到一個運行時警告。

只在某些特殊場景中你可能才需要用到「可寫」的屬性，你可以通過同時提供` getter `和 `setter `來創建：

```js
export default {
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe'
    }
  },
  computed: {
    fullName: {
      // getter
      get() {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set(newValue) {
        [this.firstName, this.lastName] = newValue.split(' ')
      }
    }
  }
}
```

再運行` this.fullName = 'John Doe' `時，`setter `會被調用而` this.firstName `和` this.lastName `會隨之更新。

### 組合式api 使用

``` vue
<script setup>
import { reactive, computed } from 'vue'

const list = reactive([])

// 一个计算属性 ref
const formatlist = computed(() => {
  return lists.filter(items => items.age > 18)
})
const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ')
  }
</script>

<template>
  <ul>
    <template v-for="item in lists" :key="item">
      <li v-if="item.age > 18">
        {{ `${item.name} - ${item.age} - ${item.sex}` }}
      </li>
    </template>
  </ul>
</template>
```

