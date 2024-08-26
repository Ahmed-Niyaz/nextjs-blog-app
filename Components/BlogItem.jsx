import { assets, blog_data } from '@/Assests/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogItem = ({_id : id, title, image, description, category, date, author, author_img}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black hover:shadow-[7px_7px_0px_#000000] hover:translate-y-1 rounded-md'>
        <Link href={`/blogs/${id}`}>
        <Image src={image} alt='image' width={400} height={400} className='border-black border-b rounded-t-md' />
        </Link>
        <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
        <div className='p-5'>
        <Link href={`/blogs/${id}`}>
            <h5 className='mb-2 text-lg font-medium tracking-tighter text-gray-900'>{title}</h5>
        </Link>
            <p className='mb-3 text-sm tracking-tighter text-gray-700' dangerouslySetInnerHTML={{__html:description.slice(0, 120) + '...'}}></p>
            <Link href={`/blogs/${id}`} className='inline-flex items-center py-2 font-semibold text-center hover:translate-x-1'>
                Read More <Image alt='arrow' src={assets.arrow} width={12} className='ml-2'/>
            </Link>
        </div>
    </div>
  )
}

export default BlogItem