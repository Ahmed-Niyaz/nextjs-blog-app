import React from 'react'

const SubsTableItem = ({_id: id, email, date, index, deleteEmail}) => {
  return (
    <tr className='bg-white border-b text-left'>
        <th scope='col' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
            {index}. {email ? email: 'No email'}
        </th>
        <td className='px-6 py-4 hidden sm:block'>{new Date(date).toDateString()}</td>
        <td onClick={() => deleteEmail(id)} className='px-6 py-4 cursor-pointer'>x</td>
    </tr>
  )
}

export default SubsTableItem