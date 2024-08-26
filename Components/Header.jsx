import { assets } from '@/Assests/assets'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Header = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (email) {
      const formData = new FormData();
      formData.append('email', email);
      const response = await axios.post('/api/email', formData);
  
      if (response.data.success) {
        toast.success(response.data.message);
        setEmail('');
      }else {
        toast.error(response.data.message);
      }
    } else {
      toast.error('Enter email id')
    }
    

  }

  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
        <div className='flex justify-between items-center'>
            <Image src={assets.blog} width={50} height={50} alt='logo' className='' />
            <Link href={`/admin/addProduct`}>
            <button className='flex items-center gap-2 font-medium py-2 px-3 sm:py-3 sm:px-6 border border-solid border-black cursor-pointer  hover:shadow-[7px_7px_0px_#000000]'>Add Blog <Image src={assets.arrow}  /></button>
            </Link>
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Latest Blogs</h1>
            <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt, mollitia tempora saepe facere magnam corrupti? Ad adipisci fugit veniam, neque ut consequuntur dolores animi magni hic veritatis et blanditiis eveniet.</p>
            <form onSubmit={handleSubmit} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black rounded-md'>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='Enter your email' className='pl-4 outline-none w-full rounded-md' />
                <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Header