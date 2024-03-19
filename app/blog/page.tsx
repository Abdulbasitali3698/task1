import posts from '../data/posts.json';
import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <div className='ml-4'>
        <h1 className=' text-xl font-bold'>
            Blog Page
        </h1>
        <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <h2><span className="font-bold mr-2">ID:</span>{post.id}</h2>
            <h3><span className="font-bold mr-2">Title:</span>{post.title}</h3>
            <p><span className="font-bold mr-2">Date:</span>{post.date}</p>
            <p><span className="font-bold mr-2">Excerpt:</span>{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
