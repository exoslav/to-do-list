import App from './App'
import HomePage from './routes/homepage/HomePage'
import Category from './routes/categoryDetail/categoryDetail'

const routes = [
  {
    path: '/',
    id: 'APP',
    component: App,
    routes: [
      {
        path: '/',
        exact: true,
        id: 'HOMEPAGE',
        component: HomePage
      },
      {
        path: '/:category',
        exact: true,
        id: 'CATEGORIES',
        component: Category
      }
    ]
  }
]

export default routes
