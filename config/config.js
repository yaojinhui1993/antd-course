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
          component: './HelloWorld',
        },
      ],
    },
    {
      path: '/tab',
      component: './Tab',
    },
  ],
};
