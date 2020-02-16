export default {
  mode: 'spa',
  generate: {
    dir: '../electron-nuxt/static/web-interface'
  },
  vue: {
    config: {
      ignoredElements : [
        'AbsoluteLayout',
        'DockLayout',
        'FlexboxLayout',
        'GridLayout',
        'StackLayout',
        'SegmentedBarItem',
        'WrapLayout',
        'ActionBar',
        'ActionItem',
        'NavigationButton',
        'ActivityIndicator',
        'Button',
        'DatePicker',
        'Image',
        'Label',
        'ListPicker',
        'ListView',
        'Progress',
        'ScrollView',
        'SearchBar',
        'SegmentedBar',
        'Slider',
        'Switch',
        'TabView',
        'TextField',
        'TextView',
        'HtmlView',
        'WebView',
        'TimePicker',
        'Page',
        'Placeholder'
      ],
      productionTip: false
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  server: {
    host: Object.values(require('os').networkInterfaces()).flat().filter(inter => { return inter.family === 'IPv4' && !inter.internal })[0].address,
    port: '3031'
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './assets/styles/base.scss'
  ],
  styleResources: {
    sass: [
      './assets/styles/core/c-colors.scss'
    ]
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/feathers-init.js',
    './plugins/nativescript-elements.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-svg-loader'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
