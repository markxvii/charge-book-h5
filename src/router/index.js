import React from "react";

const Index = React.lazy(() => import('@/container/Index/index'));
const About = React.lazy(() => import('@/container/About/index'));


const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/about',
    component: About
  }
]

export default routes
