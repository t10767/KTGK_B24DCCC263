import React, { useEffect, useState } from 'react'
return null
}


const onSubmit = (e: React.FormEvent) => {
e.preventDefault()
const err = validate()
if (err) {
alert(err)
return
}


if (mode === 'create') {
createPost({ title, author, thumbnail, content, category })
alert('Đăng bài thành công!')
navigate('/posts')
} else if (mode === 'edit' && id) {
updatePost(id, { title, author, thumbnail, content, category })
alert('Cập nhật thành công!')
navigate(`/posts/${id}`)
}
}


const onCancel = () => {
if (mode === 'create') navigate('/posts')
else if (mode === 'edit' && id) navigate(`/posts/${id}`)
}


return (
<form className="form" onSubmit={onSubmit} style={{ padding: 20 }}>
<h2>{mode === 'create' ? 'Tạo bài viết mới' : 'Chỉnh sửa bài viết'}</h2>
<label>Tiêu đề</label>
<input value={title} onChange={(e) => setTitle(e.target.value)} />


<label>Tác giả</label>
<input value={author} onChange={(e) => setAuthor(e.target.value)} />


<label>URL ảnh thumbnail</label>
<input value={thumbnail} onChange={(e) => setThumbnail(e.target.value)} />


<label>Thể loại</label>
<select value={category} onChange={(e) => setCategory(e.target.value as Category)}>
{categories.map((c) => (
<option key={c} value={c}>{c}</option>
))}
</select>


<label>Nội dung</label>
<textarea value={content} onChange={(e) => setContent(e.target.value)} rows={12} />


<div className="form-actions">
<button type="submit">{mode === 'create' ? 'Đăng bài' : 'Cập nhật'}</button>
<button type="button" onClick={onCancel}>Hủy</button>
</div>
</form>
)
}


export default PostForm



}