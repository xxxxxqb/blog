---
title: 程式設計式導航
descript: 程式設計式導航
lastUpdated: 程式設計式導航
---

# 程式設計式導航

除了使用 `<router-link>` 創建 a 標籤來定義導航連結，我們還可以借助 router 的實例方法，通過編寫代碼來實現

## 導航到不同的位置

**注意：在** **Vue** **實例中，你可以通過** `$router` **訪問路由實例。因此你可以調用** `this.$router.push`**。**

想要導航到不同的 URL，可以使用 `router.push` 方法。這個方法會向 history 棧添加一個新的記錄，所以，當使用者點擊流覽器後退按鈕時，會回到之前的 URL。

 ``` js
 // 字串路徑
 router.push('/users/eduardo')
 
 // 帶有路徑的物件
 router.push({ path: '/users/eduardo' })
 
 // 命名的路由，並加上參數，讓路由建立 url
 // params只能和name配合使用
 router.push({ name配合使用: 'user', params: { username: 'eduardo' } })
 
 // 帶查詢參數，結果是 /register?plan=private
 query只能和path配合使用
 router.push({ path: '/register', query: { plan: 'private' } })
 
 // 帶 hash，結果是 /about#team
 router.push({ path: '/about', hash: '#team' })
 ```

### 替換當前位置

 `router.replace`的作用類似於 `router.push`，唯一不同的是，它在導航時不會向 `history` 添加新記錄，正如它的名字所暗示的那樣——它取代了當前的條目

也可以直接在傳遞給 `router.push` 的 `routeLocation` 中增加一個屬性 `replace: true` ：

```js
router.push({ path: '/home', replace: true })
// 相当于
router.replace({ path: '/home' })
```

| 声明式                            | 编程式                |
| --------------------------------- | --------------------- |
| `<router-link :to="..." replace>` | `router.replace(...)` |

## 横跨历史

該方法採用一個整數作為參數，表示在歷史堆疊中前進或後退多少步，類似於 `window.history.go(n)`。

``` js
// 向前移動一條記錄，與 router.forward() 相同
router.go(1)

// 返回一條記錄，與 router.back() 相同
router.go(-1)

// 前進 3 條記錄
router.go(3)

// 如果沒有那麼多記錄，靜默失敗
router.go(-100)
router.go(100)
```

