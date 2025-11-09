import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { LandingPage } from './pages/LandingPage.tsx'
import { ThemeProvider } from './design-system/theme'
import { ToastProvider } from './design-system/components'

const isLandingPage = window.location.pathname === '/' || window.location.pathname === '/accessibility-learning/' || window.location.pathname === '/accessibility-learning';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <ToastProvider>
        {isLandingPage ? <LandingPage /> : <App />}
      </ToastProvider>
    </ThemeProvider>
  </StrictMode>,
)
