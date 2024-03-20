
import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <div className='ml-4'>
        <h1 className=' text-xl font-bold'>
            Blog Page
        </h1>
        <h3>
          <Link href="/blog/[blogs]?blogs=1">go to the Blogs</Link>
        </h3>
        
    </div>
  )
}
