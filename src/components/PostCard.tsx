import React from 'react'
import { Post } from '../types'
import { useNavigate } from 'react-router-dom'
import { usePosts } from '../context/PostsContext'


const PostCard: React.FC<{ post: Post }> = ({ post }) => {
const navigate = useNavigate()
const { deletePost } = usePosts()


const onDelete = () => {
if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
deletePost(post.id)
}
}


return (
<article className="card">
<img src={post.thumbnail} alt={post.title} className="thumb" />
<div className="card-body">
<h3>{post.title}</h3>
<div className="meta">{post.author} • {new Date(post.createdAt).toLocaleDateString()}</div>
<p>{post.content.slice(0, 100)}{post.content.length > 100 ? '...' : ''}</p>
<div className="card-actions">
<button onClick={() => navigate(`/posts/${post.id}`)}>Đọc thêm</button>
<button onClick={() => navigate(`/posts/edit/${post.id}`)}>Sửa</button>
<button onClick={onDelete}>Xóa</button>
</div>
</div>
</article>
)
}


export default PostCard