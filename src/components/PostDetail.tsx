import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { usePosts } from '../context/PostsContext'


const PostDetail: React.FC = () => {
const { id } = useParams<{ id: string }>()
const navigate = useNavigate()
const { findPost, deletePost } = usePosts()


const post = id ? findPost(id) : undefined
if (!post) return <div style={{ padding: 20 }}>Bài viết không tìm thấy</div>


const onDelete = () => {
if (confirm('Bạn có chắc muốn xóa bài viết này?')) {
deletePost(post.id)
navigate('/posts')
}
}


return (
<article style={{ padding: 20 }}>
<button onClick={() => navigate('/posts')}>Quay lại</button>
<h1>{post.title}</h1>
<div className="meta">{post.author} • {new Date(post.createdAt).toLocaleString()}</div>
<img src={post.thumbnail} alt={post.title} style={{ maxWidth: '100%', marginTop: 12 }} />
<p style={{ whiteSpace: 'pre-wrap', marginTop: 12 }}>{post.content}</p>


<div style={{ marginTop: 12 }}>
<button onClick={() => navigate(`/posts/edit/${post.id}`)}>Chỉnh sửa</button>
<button onClick={onDelete}>Xóa bài viết</button>
</div>
</article>
)
}


export default PostDetail