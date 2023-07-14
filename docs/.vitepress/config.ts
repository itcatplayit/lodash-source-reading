import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  title: "lodash源码解析",
  description: "lodash源码解析，从0到1",
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh_cn: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                },
              },
            },
          },
        },
      },
    },
    // i18nRouting: true,
    logo: '/lodash.svg',
    outline: [1, 3],
    editLink: {
      pattern: 'https://github.com/itcatplayit/esbuild-tutorial/edit/main/docs/:path',
      // text: '在 GitHub 上编辑此页面',
    },
    nav: [
      { text: '文章', link: '/articles/architecture' },
      { text: '从0到1', link: '/seasons/s1e001/index' },
    ],
    sidebar: [
      {
        text: '文章',
        items: [
          { text: '架构', link: '/articles/architecture', activeMatch: '/articles/', },
        ]
      },
      {
        text: '从0到1', 
        items: [
          { text: 's1e001', link: '/seasons/s1e001/index', activeMatch: '/seasons/', },
          { text: 's1e002', link: '/seasons/s1e002/index', activeMatch: '/seasons/', },
        ]
      }
    ],

    footer: {
      message: 'Released under the <a href="https://github.com/itcatplayit/esbuild-tutorial/blob/main/LICENSE">MIT License</a>.',
      copyright: 'Copyright © 2022-present <a href="https://github.com/itcatplayit">itcatplayit</a>',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/itcatplayit/lodash-source-reading' }
    ]
  },
})
