import React, { useMemo, useState } from 'react'
import { usePosts } from '../context/PostsContext'
import PostCard from './PostCard'


const PostList: React.FC = () => {
const { posts } = usePosts()
const [filter, setFilter] = useState('')


const filtered = useMemo(() => {
const q = filter.trim().toLowerCase()
if (!q) return posts
return posts.filter((p) => p.title.toLowerCase().includes(q))
}, [posts, filter])


return (
<section style={{ padding: 20 }}>
<div className="list-header">
<h2>Danh sách bài viết ({posts.length})</h2>
<input placeholder="Tìm theo tiêu đề..." value={filter} onChange={(e) => setFilter(e.target.value)} />
</div>
<div className="grid">
{filtered.map((p) => (
<PostCard key={p.id} post={p} />
))}
</div>
</section>
)
}


export default PostList