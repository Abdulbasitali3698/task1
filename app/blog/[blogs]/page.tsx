import React from 'react';
import posts from '@/app/data/posts.json';
import Link from 'next/link';

export default function Blogs({params}) {
  return (
    <div>
        <h2>Blogs Details</h2>
        <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-4">
            <h2><Link href="" className='font-bold mr-2' >ID:</Link>{post.id}</h2>
            <h3><Link href="" className="font-bold mr-2">Title:</Link>{post.title}</h3>
            <p><Link href="" className="font-bold mr-2">Date:</Link>{post.date}</p>
            <p><Link href="" className="font-bold mr-2">Excerpt:</Link>{post.excerpt}</p>
          </li>
        ))} 
      </ul>
        
    </div>
  )
}
