import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Default Config" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
