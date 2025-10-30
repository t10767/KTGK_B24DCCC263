import React, { createContext, useContext, useState } from 'react'
updatePost: (id: string, updated: Partial<Post>) => void
deletePost: (id: string) => void
findPost: (id: string) => Post | undefined
}


const PostsContext = createContext<PostsContextValue | undefined>(undefined)


export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
const [posts, setPosts] = useState<Post[]>(samplePosts)


const createPost = (post: Omit<Post, 'id' | 'createdAt'>) => {
const newPost: Post = {
...post,
id: String(Date.now()),
createdAt: new Date().toISOString(),
}
setPosts((p) => [newPost, ...p])
}


const updatePost = (id: string, updated: Partial<Post>) => {
setPosts((p) => p.map((x) => (x.id === id ? { ...x, ...updated } : x)))
}


const deletePost = (id: string) => {
setPosts((p) => p.filter((x) => x.id !== id))
}


const findPost = (id: string) => posts.find((p) => p.id === id)


return (
<PostsContext.Provider value={{ posts, createPost, updatePost, deletePost, findPost }}>
{children}
</PostsContext.Provider>
)
}


export function usePosts() {
const ctx = useContext(PostsContext)
if (!ctx) throw new Error('usePosts must be used within PostsProvider')
return ctx
}