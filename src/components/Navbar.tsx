import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const activeStyle = ({ isActive }: { isActive: boolean }) => ({
padding: '8px 12px',
textDecoration: 'none',
color: isActive ? 'white' : 'black',
background: isActive ? '#007bff' : 'transparent',
borderRadius: 6,
})


const Navbar: React.FC = () => {
const navigate = useNavigate()
return (
<nav className="navbar">
<div className="nav-inner container">
<div className="logo" onClick={() => navigate('/posts')} style={{ cursor: 'pointer' }}>
<strong>MyBlog</strong>
</div>
<div className="links">
<NavLink to="/posts" style={activeStyle} end>
Trang chủ
</NavLink>
<button className="btn" onClick={() => navigate('/posts/create')}>
Viết bài
</button>
</div>
</div>
</nav>
)
}


export default Navbar