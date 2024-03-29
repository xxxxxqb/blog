const { defaultTheme } = require('vuepress')
const { palettePlugin } = require('@vuepress/plugin-palette')
module.exports = {
    lang: 'zh-CN',
    title: '笔记',
    description: '学习之路与问题总结',  
    base: '/blog',
    locales: {
      '/': {
        lang: 'zh-CN',
        title: '笔记',
        description: '学习之路与问题总结'
      },
      '/en/': {
        lang: 'en-US',
        title: 'Note',
        description: 'study'
      }
    },
    theme:defaultTheme({
      repo: 'https://github.com/xxxxxqb/blog',
      repoLabel: 'github',
      docsRepo: 'https://github.com/xxxxxqb/blog',
      docsBranch: 'master',
      docsDir:'docs',

      locales:{
        '/':{
          selectLanguageText: '选择语言',
          selectLanguageName: '简体中文',
          editLinkText: '编辑此页',
          lastUpdatedText: '最后更新',
          contributors: false,
          home: '/',
          navbar: [
            {
              text: '首页',
              link: '/'
            },
            {
              text: '笔记',
              link: '/note/'
            },
            {
              text: '学习',
              children: [
                {
                  text: 'vue',
                  link: '/study/vue/know_vue/README.md'
                }
              ]
            }
          ],
          sidebar:{
            '/study/vue/': [
              {
                text: '認識vue',
                children: [
                  {
                    text: '什麼是vue',
                    link: '/study/vue/know_vue/README.md'
                  },
                  {
                    text: 'vue的工作原理',
                    link: '/study/vue/know_vue/WorkingPrinciple.md'
                  },
                  {
                    text: 'vue的工作機制',
                    link: '/study/vue/know_vue/WorkingMechanism.md'
                  },
                  {
                    text: '使用vue的多種方式',
                    link: '/study/vue/know_vue/WaysOfUsingVue.md'
                  }
                ]
              },
              {
                text: '安裝',
                link: '/study/vue/install/README.md'
              },
              {
                text: '單組件文件',
                children:[
                  {
                    text: '單組件文件',
                    link: '/study/vue/SFC/SFC.md'
                  },
                  {
                    text: 'setup',
                    link: '/study/vue/SFC/setup.md'
                  }
                ]
              },
              {
                text: '編寫風格',
                link: '/study/vue/style/README.md'
              },
              {
                text: '基礎',
                children:[
                  {
                    text: '創建一個 Vue 應用',
                    link: '/study/vue/basic/README.md'
                  },
                  {
                    text: '模板語法',
                    link: '/study/vue/basic/template_syntax.md'
                  }
                  ,
                  {
                    text: '聲明響應式狀態',
                    link: '/study/vue/basic/reactivity_fundamentals.md'
                  },
                  {
                    text: '列表渲染',
                    link: '/study/vue/basic/list_rendering.md'
                  },
                  {
                    text: '事件處理',
                    link: '/study/vue/basic/event.md'
                  },
                  {
                    text: '計算屬性',
                    link: '/study/vue/basic/computed.md'
                  },
                  {
                    text: '偵聽器',
                    link: '/study/vue/basic/watch.md'
                  },
                  {
                    text: '表單綁定',
                    link: '/study/vue/basic/form.md'
                  },
                  {
                    text: '獲取元素ref',
                    link: '/study/vue/basic/ref.md'
                  },
                  {
                    text: '生命周期',
                    link: '/study/vue/basic/statement-period.md'
                  }
                ]
              },
              {
                text: '組件',
                children: [
                  {
                    text: '註冊組件',
                    link: '/study/vue/components/register.md'
                  },
                  {
                    text: 'Prop',
                    link: '/study/vue/components/prop.md'
                  },
                  {
                    text: 'emit',
                    link: '/study/vue/components/emit.md'
                  },
                  {
                    text: 'Slot',
                    link: '/study/vue/components/Slot.md'
                  },
                  {
                    text: 'Provide&Inject',
                    link: '/study/vue/components/Provide&Inject.md'
                  }
                ]
              },
              {
                text: '樣式相關',
                children: [
                  {
                    text: 'class 和 style 綁定',
                    link: '/study/vue/css/class&style.md'
                  },
                  {
                    text: '單文件組件 CSS 功能',
                    link: '/study/vue/css/單文件組件CSS功能.md'
                  }
                ]
              },
              {
                text: '路由',
                children: [
                  {
                    text: '路由基礎',
                    link: '/study/vue/route/basic.md'
                  },
                  {
                    text: '路由',
                    link: '/study/vue/route/Route.md'
                  },
                  {
                    text: '路由',
                    link: '/study/vue/route/Route.md'
                  },
                  {
                    text: '路由守衛',
                    link: '/study/vue/route/Route.md'
                  },
                  {
                    text: '程式設計式導航',
                    link: '/study/vue/route/ProgrammedNavigation.md'
                  },
                  {
                    text: 'Vue Router 和組合式API',
                    link: '/study/vue/route/setup.md'
                  },
                  {
                    text: '路由懶加載',
                    link: '/study/vue/route/laoding.md'
                  }
                ]
              }
            ]
          },
        },
        '/en/': {
          selectLanguageText: 'Language',
          selectLanguageName: 'English',
          editLinkText: 'Edit this page',
          lastUpdatedText: 'Last Updated',
          contributors: false,
          home: '/en/',
          navbar: [
            {
              text: '首页',
              link: '/'
            },
            {
              text: '笔记',
              link: '/en/note/'
            },
            {
              text: '学习',
              children: [
                {
                  text: 'vue',
                  link: '/en/study/vue/'
                }
              ]
            }
          ]
        }
      }
    }),
    plugins: [
      palettePlugin({
        userStyleFile: '.vuepress/styles/custom.css'
      }),
      "import", {
        "libraryName": "vue-canvas-effect",
        "libraryDirectory": "src/components"
      }
    ],
  }