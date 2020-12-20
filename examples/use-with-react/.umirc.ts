import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/babel-preset', component: '@/pages/babel-preset' },
        { path: '/jsx-pragma', component: '@/pages/jsx-pragma' },
      ],
    },
  ],
  extraBabelPresets: ['@styli/babel-preset-styli'],
  styles: ['http://localhost:8000/styli.css'],
  chainWebpack(memo) {
    memo.module
      .rule('styli-loader')
      .test(/\.tsx$/)
      .use('styli-loader')
      .loader('styli-loader')
      .options({});
  },
});
