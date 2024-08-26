'use client' 

import { assets, blog_data } from '@/Assests/assets';
import Footer from '@/Components/Footer';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const SingleBlog = ({params}) => {

    const [data, setData] = useState(null);
    
    const fetchBlogId = async() => {
        const response = await axios.get('/api/blog', {params: {id: params.id}});
        // console.log(response.data);
        setData(response.data)
    }

    useEffect(() => {

        fetchBlogId();

        // const blog = blog_data.find(b => b.id === Number(params.id));
        // if (!blog) {
        //     console.log('error getting blog data');
        //     return;
        // }

        // setData(blog);
        
    }, [])

  return (
    data ? 
    <>
        <div className='bg-gray-200 py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                <Image src={assets.blog} width={50} height={50} alt='logo' className='' />
                </Link>
                <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black hover:shadow-[7px_7px_0px_#000000]'>
                    Add New Blog <Image src={assets.arrow} alt='arrow' />
                </button>
            </div>   
            <div className='text-center my-24'>
                <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                <Image className='mx-auto mt-6 border border-white rounded-full' src={data.author_img} width={90} height={90} alt='author-image' />
                <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
            </div>     
        </div>
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
            <Image className='border-4  border-white' src={data.image} width={1280} height={720} alt='blog-img' />
            
            <div className='blog-content' dangerouslySetInnerHTML={{__html:data.description}}>

            </div>

            
            {/* <h1 className='my-8 text-[26px] font-semibold'>Introduction:</h1> */}
            {/* <p>{data.description}</p> */}



            {/* <h3 className='my-5 text-[18px] font-semibold'>Step 1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero incidunt, ut illo temporibus facilis itaque! Unde repudiandae eius voluptatibus maxime totam? Consequatur distinctio et ad alias! Vel, consectetur ad.</h3>
            <p className='my-3'>Before Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, molestias quod amet dolore fugiat quia aliquam, explicabo beatae reiciendis neque qui numquam.</p>
            <p className='my-3'>Before Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, molestias quod amet dolore fugiat quia aliquam, explicabo beatae reiciendis neque qui numquam.</p>

            <h3 className='my-5 text-[18px] font-semibold'>Step 2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero incidunt, ut illo temporibus facilis itaque! Unde repudiandae eius voluptatibus maxime totam? Consequatur distinctio et ad alias! Vel, consectetur ad.</h3>
            <p className='my-3'>Before Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, molestias quod amet dolore fugiat quia aliquam, explicabo beatae reiciendis neque qui numquam.</p>
            <p className='my-3'>Before Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, molestias quod amet dolore fugiat quia aliquam, explicabo beatae reiciendis neque qui numquam.</p>

            <h3 className='my-5 text-[18px] font-semibold'>Step 3: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero incidunt, ut illo temporibus facilis itaque! Unde repudiandae eius voluptatibus maxime totam? Consequatur distinctio et ad alias! Vel, consectetur ad.</h3>
            <p className='my-3'>Before Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, molestias quod amet dolore fugiat quia aliquam, explicabo beatae reiciendis neque qui numquam.</p>
            <p className='my-3'>Before Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, molestias quod amet dolore fugiat quia aliquam, explicabo beatae reiciendis neque qui numquam.</p>

            <h3 className='my-5 text-[18px] font-semibold'>Conclusion</h3>
            <p className='my-3'>Before Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, molestias quod amet dolore fugiat quia aliquam, explicabo beatae reiciendis neque qui numquam.</p> */}
            <div className='my-24'>
                <p className='text-black font font-semibold my-4'>Share this article</p>
                <div className='flex'>
                    <Image src={assets.facebook_icon} width={50} alt='img'/>
                    <Image src={assets.twitter_icon} width={50} alt='img'/>
                    <Image src={assets.googleplus_icon} width={50} alt='img'/>
                </div>
            </div>
        </div>
        <Footer />
    </>
    :
    null
  )
}

export default SingleBlog