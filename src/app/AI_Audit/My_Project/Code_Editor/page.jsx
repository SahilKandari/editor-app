import React from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import Directory from '@/components/Directory';
import CodeEditor from '@/components/CodeEditor';
import IssuesCount from '@/components/IssuesCount';

const page = () => {
  
  return (
    <div className='bg-gray-800 p-3 rounded-sm'>
      <div className='flex justify-between items-center gap-3 border-b-2 pb-3 border-gray-700 mb-3'>
        <div className='flex gap-1 items-center'>
          <Image src='/Upload Contract Icon.png' width={28} height={28} alt='file image'/> 
          <h2 className='text-xl'>Sample Project</h2>
        </div>
        <Button className="ml-auto">Audit Now</Button>
        <Button bg="dark" isNew={true}>Options</Button>
      </div>
      <div className='flex gap-3'>
        <Directory/>
        <CodeEditor/>
        <IssuesCount/>
      </div>
    </div>
  )
}

export default page