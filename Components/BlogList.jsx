'use client'
import { blog_data } from '@/Assests/assets'
import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import axios from 'axios'

const BlogList = () => {

    const [categories, setCategory] = useState('All');
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');

        setBlogs(response.data.blogs);
    }

    useEffect(() => {
        fetchBlogs();
    }, [])

  return (
    <div>
        <div className='flex justify-center gap-6 my-10'>
            <button className={`${categories === 'All' ? 'bg-black text-white' : null}  py-1 px-4 rounded-sm`} onClick={() => setCategory('All')}>All</button>
            <button className={`${categories === 'Technology' ? 'bg-black text-white py-1 px-4 rounded-sm' : null} `} onClick={() => setCategory('Technology')}>Technology</button>
            <button className={`${categories === 'Startup' ? 'bg-black text-white py-1 px-4 rounded-sm' : null} `} onClick={() => setCategory('Startup')}>Startup</button>
            <button className={`${categories === 'Lifestyle' ? 'bg-black text-white py-1 px-4 rounded-sm' : null} `} onClick={() => setCategory('Lifestyle')}>Lifestyle</button>
        </div>
        <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
            {blogs.map(blog => {
                const {_id : id, title, image, description, category, date, author, author_img} = blog;

                if (categories === 'All' || categories === category) {
                    return <BlogItem key={id} {...blog} />
                }
            })}
        </div>
    </div>
  )
}

export default BlogList