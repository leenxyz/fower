import App from './app'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'

export default [
  {
    component: App,
    routes: [
      {
        path: '/404',
        component: NotFound,
      },
      {
        path: '/',
        component: Home,
      },

    ],
  },
]
