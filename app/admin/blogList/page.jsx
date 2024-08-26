'use client'
import { blog_data } from '@/Assests/assets';
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const page = () => {

    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await axios.get('/api/blog');

        setBlogs(response.data.blogs);
    }

    const deleteBlog = async(mongoId) => {
        const res =  await axios.delete('/api/blog', {
            params: {
                id: mongoId
            }
        });
        toast.success(res.data.message);
        fetchBlogs();
    }

    const addAll = async () => {
        for (const blog of blog_data) {
            const {id, title, description, image, author, author_img, category} = blog;
            console.log(id);
            async function convertImg(image) {
                const src = image.src;
                // fetch(src)
                // .then(res => res.blob())
                // .then(blob => {
                //     const urlParts = src.split('/')
                //     const last = urlParts.slice(-1);
                //     // console.log(urlParts);
                //     // console.log(last);
                //     const nameParts = last[0].split('.');
                //     // console.log(nameParts);
                //     const filename = nameParts[0] + '.' + nameParts.slice(-1);
                //     // console.log(filename);
                       
                //     const imgFile = new File([blob], filename, {type: blob.type});
                //     console.log(imgFile)
                //     return imgFile;
                // });
    
                const response = await fetch(src);
                const blob = await response.blob();
    
                const urlParts = src.split('/')
                const last = urlParts.slice(-1);
                const nameParts = last[0].split('.');
                const filename = nameParts[0] + '.' + nameParts.slice(-1);
    
                const imgFile = new File([blob], filename, {type: blob.type});
            
                return imgFile;
    
            }
    
            const imageFile = await convertImg(image)
    
            const formData = new FormData();
            formData.append("title", title);
            formData.append("description", description);
            formData.append("category", category);
            formData.append("author", author);
            formData.append("authorImg", '/author_img.png');
            formData.append("image", imageFile);
    
            const response = await axios.post("/api/blog", formData);
    
            if (response.data.success) {
                toast.success(id, 'added');
            } else {
                toast.error(response.data.message);   
            }
        }
        fetchBlogs();
    }
    
    // const deleteAll = async() => {
    // // not implemented yet

    // const response = await axios.delete('/api/blog');
    // toast.success('Deleted all blogs');
    // return;
    // }

    useEffect(() => {
        fetchBlogs();
    }, [])

  return (
    <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
        <h1>All blogs</h1>
        <div className='relative h-[80vh] max-w-[850px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide'>
            <table className='w-full text-sm text-gray-500'>
                <thead className='text-xs text-gray-700 text-left uppercase bg-gray-50'>
                    <tr>
                        <th scope='col' className='hidden sm:block px-6 py-3'>
                            Author name
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Blog Title
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Date
                        </th>
                        <th scope='col' className='px-6 py-3'>
                            Action 
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog, index) => {
                        return <BlogTableItem key={blog._id} {...blog} index={index + 1} deleteBlog={deleteBlog}/>
                    })}
                </tbody>
            </table>
        </div>
        <div className='mt-10 mb-10'>
            <button onClick={addAll} className=" mt-10 p-4 bg-black text-white">Add all from already assets for demo</button>
            {/* <button onClick={deleteAll} className=" mt-10 ml-10 p-4 bg-black text-white">Delete All</button> */}
        </div>
    </div>
  )
}

export default page