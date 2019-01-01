export default {
  singular: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
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
      ],
    },
    {
      path: '/tab',
      component: './Tab',
    },
  ],
};
