import { HomeLayout } from '@/pages/_layout/home-layout'
import { HomePage } from '@/pages/app/home'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
])
