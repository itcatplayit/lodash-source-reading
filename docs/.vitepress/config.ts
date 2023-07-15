import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  ignoreDeadLinks: true,
  lastUpdated: true,
  cleanUrls: true,
  title: "lodash源码解析",
  description: "lodash源码解析，从0到1",
  returnToTopLabel: '回到顶部',
  // rewrites: {
    // 'seasons/:pkg/index.md': 'seasons/:pkg.md',
  // },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
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
    outline: [1, 4],
    nav: [
      { text: '文章', link: '/articles/architecture', activeMatch: '/articles/', },
      { text: '从0到1', link: '/seasons/s1e001', activeMatch: '/seasons/', },
    ],
    sidebar: [
      {
        text: '文章',
        // collapsed: true,
        items: [
          { text: '架构', link: '/articles/architecture', activeMatch: '/articles/', },
        ]
      },
      {
        text: '从0到1',
        // collapsed: true,
        items: [
          { text: 's1e001', link: '/seasons/s1e001', activeMath: '/seasons/', },
          { text: 's1e002', link: '/seasons/s1e002', activeMath: '/seasons/', },
        ]
      }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: '<a href="https://github.com/itcatplayit/lodash-source-reading/blob/master/LICENSE">MIT 开源协议</a>.',
      copyright: '版权 © 2022-至今 <a href="https://github.com/itcatplayit">itcatplayit</a>',
    },
    darkModeSwitchLabel: '亮暗切换',
    // sidebarMenuLabel: 'Menu',
    returnToTopLabel: '回到顶部',
    outlineTitle: '页面导航',
    lastUpdatedText: '最后更新于',
    editLink: {
      pattern: 'https://github.com/itcatplayit/lodash-source-reading/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页面',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/itcatplayit/lodash-source-reading' }
    ]
  },
})
