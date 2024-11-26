import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/boke/",
  title: "lidiudiu blog",
  description: "李丢丢学习笔记网站",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '文章目录',
    outline: [1,6],
    nav: [
      { text: '首页', link: '/' },
      { text: '前端三件套', link: '/markdown-examples' }
    ],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档"
          },
          modal: {
            noResultsText: "没有找到结果",
            resetButtonTitle: "清除搜索内容",
            footer: {
              selectText: "选择",
              navigateText: "切换"
            },
          },
        },
       },
    },
    logo: '/logo.ico',  
    sidebar: [
      {
        text: '前端三件套',
        items: [
          { text: 'html', link: '/markdown-examples' },
          { text: 'css', link: '/api-examples' },
          { text: 'js', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lidiudiudiu' },
      { 
        icon: 'csdn.svg', 
        link: 'https://blog.csdn.net/weixin_73802561?spm=1000.2115.3001.5343' 
      },
    ]
  }
})
