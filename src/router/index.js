const routes = [
  {
    path: '/about/',
    name: 'about',
    component: () => import('@/views/Abort.vue'),
  },
  {
    path: '/home/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
  }
  
];
export default routes;