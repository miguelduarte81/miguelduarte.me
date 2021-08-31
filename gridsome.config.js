// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Miguel Duarte',
  siteUrl: 'https://miguelduarte.me',
  icon: './src/favicon.svg',

  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },

  plugins: [
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'en-gb'
        ],
        pathAliases: { // path segment alias for each locales
          'en-gb': 'en'
        },
        fallbackLocale: 'en-gb', // fallback language
        defaultLocale: 'en-gb', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'en-gb': require('./src/locales/en-gb.json')
        }
      }
    },
    {
      use: 'gridsome-source-graphql-prismic',
      options: {
        url: process.env.PRISMIC_REPO,
        fieldName: 'Prismic',
        typeName: 'Prismic',

        headers: { 
          'Prismic-Ref': process.env.PRISMIC_REF,
          Authorization: process.env.PRISMIC_TOKEN,
        },

        useMasterRef: true
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-116767382-1'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        config: {
          '/project/*' : { changefreq: 'monthly' }
        }
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        // Service Worker Options
        disableServiceWorker: false,
        cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg,gif',
        
        // Manifest Options
        manifestPath: 'manifest.json',
        title: 'Miguel Duarte',
        shortName: 'miguelduarte.me',
        startUrl: '/',
        description: 'Designer specialised in branding, digital design and development.',
        categories: ['strategy','design','communication','branding','digital','development'],
        
        display: 'standalone',
        statusBarStyle: 'default',
        themeColor: '#FD0079',
        backgroundColor: '#202022',

        icon: './src/favicon.png',
        svgFavicon: './src/favicon.svg',
        maskableIcon: true, 
        
        // screenshots: [                     
        //   {
        //       src: './src/screenshot1.png',
        //       sizes: '1280x720',
        //       type: 'image/png',
        //   },
        // ],

        // Apple MacOS Meta Tags
        appleMaskIcon: './src/favicon.svg',       
        appleMaskIconColor: '#202022',      

        // Microsoft Windows Meta Tags
        msTileColor: '#202022'
      }
    },
    {
      use: 'gridsome-plugin-purgecss'
    }
  ]
}
