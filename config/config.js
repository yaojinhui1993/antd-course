export default {
  singular: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
      },
    ],
  ],
  routes: [
    {
      path: '/',
      component: '../Layout',
      routes: [
        {
          path: '/',
          component: 'HelloWorld',
        },
        {
          path: 'dashboard',
          routes: [
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/Monitor', component: 'Dashboard/monitor' },
            { path: '/dashboard/Workplace', component: 'Dashboard/workplace' },
          ],
        },
        {
          path: '/puzzlecards',
          component: 'puzzlecards',
        },
      ],
    },
    {
      path: '/tab',
      component: './Tab',
    },
  ],
  proxy: {
    // '/dev': {
    //   target: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com',
    //   changeOrigin: true,
    // },
  },
};
