---
title: Vue Router 和組合式API
descript: Vue Router 和組合式API
lastUpdated: true
---

# Vue Router 和組合式API

## 在 `setup` 中訪問路由和當前路由

因為在 `setup` 裡面沒有訪問`this`，所以不能再直接訪問 `this.$router` 或`this.$route`。作為替代，使用 `useRouter` 函數：

``` js
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    function pushWithQuery(query) {
      router.push({
        name: 'search',
        query: {
          ...route.query,
        },
      })
    }
  },
}
```

## 導航守衛

仍然可以通過 `setup` 函數來使用組件內的導航守衛，但Vue Router 將更新和離開守衛作為組合式API 函數公開

``` js
import { onBeforeRouteLeave, onBeforeRouteUpdate } from 'vue-router'

export default {
  setup() {
    // 与 beforeRouteLeave 相同，无法访问 `this`
    onBeforeRouteLeave((to, from) => {
        
    })
    // 与 beforeRouteUpdate 相同，无法访问 `this`
    onBeforeRouteUpdate(async (to, from) => {

    })
  },
}
```

