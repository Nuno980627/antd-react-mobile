import React from 'react'
export interface routeType {
  path: string
  component?: any
  children?: Array<routeType>
  meta?: {
    title?: string
  }
  redirect?: string
}

const Test = React.lazy(() => import('@/views/test'))
const Home = React.lazy(() => import('@/views/home'))

const routes: Array<routeType> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/test',
    component: Test,
    meta: {
      title: '测试'
    }
  }
  // {
  //     path: '*',
  //     component: () => import('@/pages/Error/404'),
  //     meta: {
  //         title: '404'
  //     }
  // }
]

export default routes
