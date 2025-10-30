import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import PostList from './components/PostList'
import PostDetail from './components/PostDetail'
import PostForm from './components/PostForm'


const App: React.FC = () => {
return (
<div>
<Navbar />
<main className="container">
<Routes>
<Route path="/" element={<Navigate to="/posts" replace />} />
<Route path="/posts" element={<PostList />} />
<Route path="/posts/create" element={<PostForm mode="create" />} />
<Route path="/create" element={<PostForm mode="create" />} />
<Route path="/posts/:id" element={<PostDetail />} />
<Route path="/posts/edit/:id" element={<PostForm mode="edit" />} />
<Route path="*" element={<h2 style={{ padding: 20 }}>404 - Not found</h2>} />
</Routes>
</main>
</div>
)
}


export default App