import React from 'react'
import Loadable from 'react-loadable'
import { renderRoutes } from 'react-router-config'
import Loading from '@/components/Loading'

const RootRoute = (
  { route } //根路由
) => <div>{renderRoutes(route.routes)}</div>

const routes = [
  {
    component: RootRoute,
    routes: [
      {
        path: '/',
        exact: true,
        component: Loadable({
          loader: () => import('@/views/Home/index'),
          loading: Loading
        })
      }
    ]
  }
]
export default routes
