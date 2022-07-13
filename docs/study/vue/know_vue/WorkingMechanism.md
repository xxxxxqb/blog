---
title: Vue的工作機制
descript: Vue的工作機制
lastUpdated: true
---

# Vue的工作機制

### Vue模块组成

以一個簡單Vue組件從創建到渲染到web頁面的過程，來看Vue的工作機製。

Vue共有三個核心模塊，分別是: 

|   Vue Modules   |   名稱   |
| :-------------: | :------: |
| Reactive Module | 響應模塊 |
| Compiler Module | 編譯模塊 |
| Renderer Module | 渲染模塊 |

其中渲染模塊分為三個階段，分別是：

- Render phase 渲染階段
- Mount phase 掛載階段
- Patch phase 補丁階段

### 工作過程

1.  首先，編譯模塊會將HTML模板編譯成一個render 函數。響應模塊初始化響應式對象。

2. 渲染模塊進入第一階段：渲染。

調用render 函數，為其建立一個指向響應式對象的引用，返回一個虛擬dom。

3. 渲染模塊進入第二階段：掛載。

調用mount函數，使用虛擬dom創建頁面。

4. 最後，如果被監視的響應式對象發生了變化，渲染模塊就進入第三階段：補丁。

先重新調用render函數，創建一個新的虛擬dom。

與舊的虛擬dom比較，頁面只改變不同的部分，重新加載web頁面。

### 虛擬dom 和 真實dom的區別

