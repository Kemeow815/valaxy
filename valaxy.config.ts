import type { UserThemeConfig } from 'valaxy-theme-yun'
import { defineValaxyConfig } from 'valaxy'
import { addonGitLog } from 'valaxy-addon-git-log'
import { addonComponents } from 'valaxy-addon-components'
import { addonLightGallery } from 'valaxy-addon-lightgallery'
import { addonWaline } from 'valaxy-addon-waline'
import { addonBangumi } from 'valaxy-addon-bangumi'
import { addonMeting } from 'valaxy-addon-meting'
import { addonVercount } from 'valaxy-addon-vercount'
import { addonLive2d } from 'valaxy-addon-live2d'
import { addonFace } from 'valaxy-addon-face'
import { VitePWA } from 'vite-plugin-pwa'

// add icons what you will need
const safelist = [
  'i-ri-home-line',
]

/**
 * User Config
 */
export default defineValaxyConfig<UserThemeConfig>({
  // site config see site.config.ts
  
  addons: [
    addonLightGallery(),
    addonVercount({
      api: 'cn'
    }),
    addonMeting({
      global: true,
      /** @see https://github.com/metowolf/MetingJS */
      props: {
        id: '2049540645',
        server: 'netease',
        type: 'song',
      },
    }),
    addonComponents(),
    addonWaline({
      serverURL: 'https://waline2.kemeow.top/',
    }),
    addonBangumi({
      api: 'https://bangumi.kemeow.top/api',
      bilibiliUid: '3546643173477234',
      bgmEnabled: false,
    }),
    addonGitLog({
      repositoryUrl: 'https://github.com/Kemeow815/valaxy.git',
    }),
    addonLive2d({
      enableLive2D: ['XiaoYun', 'Tia', 'Pio'],
      live2DCollection: {
        XiaoYun: {
          message: '来自云游君的小云 ~',
          models: ['https://cdn.jsdelivr.net/npm/@yunyoujun/live2d@latest/小云.model3.json'],
        },
        // https://github.com/fghrsh/live2d_api
        Tia: {
          message: '来自 Potion Maker 的 Tia 酱 ~',
          models: 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/Potion-Maker/Tia/index.json',
          textures: 'https://api.github.com/repos/fghrsh/live2d_api/contents/model/Potion-Maker/Tia/textures',
        },
        Pio: {
          message: '来自 Potion Maker 的 Pio 酱 ~',
          models: 'https://cdn.jsdelivr.net/gh/fghrsh/live2d_api/model/Potion-Maker/Pio/index.json',
          textures: 'https://api.github.com/repos/fghrsh/live2d_api/contents/model/Potion-Maker/Pio/textures',
        },
      },
      skipHello: true
    }),
    addonFace({
      // 配置
      defaultSuffix: 'webp'
    }),
  ],

  vite: {
    plugins: [
      // https://vite-pwa-org.netlify.app/
      VitePWA(),
    ],
  },

  siteConfig: {
    // 启用评论
    comment: {
      enable: true
    },
  },

  theme: 'yun',

  themeConfig: {
    banner: {
      enable: true,
      title: '克喵的次元站',
    },

    pages: [
      {
        name: '我的小伙伴们',
        url: '/links/',
        icon: 'i-ri-genderless-line',
        color: 'dodgerblue',
      },
      {
        name: 'Bangumi 追番',
        url: '/Bangumi/',
        icon: 'i-ri-folder-video-line',
        color: 'hotpink',
      },
    ],

    footer: {
      since: 2025,
      beian: {
        enable: false,
        icp: '苏ICP备17038157号',
      },
    },
  },

  unocss: { safelist },
})
