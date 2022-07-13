import { DotLoading } from 'antd-mobile'
import React, { ReactElement } from 'react'
import { useRoutes, useNavigate, Navigate, RouteObject } from 'react-router-dom'
import routes, { routeType } from './route'
type resType = routeType & RouteObject

export default function Routes() {
  const element = useRoutes(renderRoutes(routes) as RouteObject[])
  return element
}

function renderRoutes(routes: Array<routeType>) {
  return routes.map((item: routeType) => {
    const res: resType = { ...item }
    if (!item?.path) return

    // component
    if (item?.component) {
      res.element = (
        <BeforeEach route={item}>
          <item.component />
        </BeforeEach>
      )
    }

    // children
    if (item?.children) {
      res.children = renderRoutes(item.children) as resType[]
    }

    // 重定向
    if (item?.redirect) {
      res.element = <Navigate to={item.redirect} replace />
    }

    return res
  })
}

function BeforeEach(props: { route: routeType; children: ReactElement }) {
  if (props?.route?.meta?.title) {
    document.title = props.route.meta.title
  }
  console.log('router beforeEach', props.route)
  //if(props?.route?.meta?.needLogin){
  // 看是否登录
  // const navigate = useNavigate();
  // navigate('/login');
  //}

  return (
    <React.Suspense
      fallback={
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <DotLoading />
        </div>
      }
    >
      {props.children}
    </React.Suspense>
  )
}
