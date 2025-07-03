import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes/index.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'
// import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Provider > */}
       <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
    {/* </Provider> */}
   

  </StrictMode>,
)
