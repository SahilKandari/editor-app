import React from 'react'
import { rightExpandState } from '@/state/State';
import { useRecoilValue } from 'recoil';
import Button from './Button';
import Image from 'next/image'

const Issue = ({ compData, iss }) => {
  const collapse = useRecoilValue(rightExpandState);

  return (
    <div className={`w-1/4 min-w-80 bg-gray-900 h-[calc(100vh-300px)] rounded-sm p-3 ${collapse && 'hidden'}`}>
      <h6 className='border-b border-gray-600 text-sm pb-2'>Count of Issues</h6>
      <div className='flex items-center bg-gray-800 gap-3 p-3 rounded-sm mt-5'>
        <span className={`w-[10px] h-[10px] rounded-full ${compData.color}`}/>
        <p className='text-sm'>{iss.title}</p>
      </div>
      <div className='bg-gray-800 mt-3 p-3 rounded-sm h-[calc(100vh-350px)] overflow-auto scrollbar-hidden'>
        <p className='text-blue-500'>Description</p>
        <p className='text-sm'>{iss.description}</p>
        <p className='text-blue-500 mt-5'>Remediation</p>
        <p className='text-sm border-b border-gray-600 pb-3'>{iss.remediation}</p>
        <div className='flex justify-end gap-3 mt-3'>
          <Button>Auto Fix Code</Button>
          <Image className='cursor-pointer' src="/Tertiary Button.png" alt='red flag' width={40} height={40}  />
        </div>
      </div>
    </div>
  )
}

export default Issue