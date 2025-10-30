import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { PostsProvider } from './context/PostsContext'
import './index.css'


createRoot(document.getElementById('root')!).render(
<React.StrictMode>
<BrowserRouter>
<PostsProvider>
<App />
</PostsProvider>
</BrowserRouter>
</React.StrictMode>
)