import { assets } from '@/Assests/assets'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({_id : id, authorImg, author, title, date, index, deleteBlog}) => {


  return (
    <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            <p>{index}</p>
            <Image width={40} height={40} src={authorImg ? authorImg : assets.profile_icon} alt='profile' />
            <p>{author ? author : 'No author name'}</p>
        </th>
        <td className='px-6 py-4'>
            {title ? title : 'no title'}
        </td>
        <td className='px-6 py-4'>
            {new Date(date).toDateString()}
        </td>
        <td onClick={() => deleteBlog(id)} className='px-6 py-4 cursor-pointer'>
            x
        </td>
    </tr>
  )
}

export default BlogTableItem