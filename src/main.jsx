import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router/dom'
import { router } from './router/Router'
import { BookProvider } from './context/BookContext'
import { Toaster } from 'react-hot-toast'
// import { ToastContainer } from 'react-toastify'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </BookProvider>
  </StrictMode>,
)
