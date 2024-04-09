import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'

const IssuesList = ({ handleChangeComp, compData }) => {
  return (
    <>
      <h6 className='border-b border-gray-600 text-sm pb-2'>Count of Issues</h6>
      <div className='bg-gray-800 flex items-center p-3 mt-5 rounded-sm'>
        <span className={`w-[10px] h-[10px] rounded-full ${compData.color}`}/>
        <h3 className='ml-3 text-[25px] border-r border-gray-600 flex-1'>{compData.number}</h3>
        <p className='mx-3 text-sm flex-1 text-gray-400'>{compData.name}</p>
      </div>
      <h6 className='border-b border-gray-600 text-sm pb-2 mt-5 mb-4'>List of Issues</h6>
      <div className='flex flex-col h-[calc(100vh-450px)] gap-2 overflow-auto scrollbar-hidden'>
        {
          compData.issues.map((issue, i) => (
            <div key={`issue_${i}`} onClick={() => handleChangeComp(2, null, issue)} className='flex p-3 items-center justify-between bg-gray-800 rounded-sm cursor-pointer'>
              <p className='text-sm text-gray-400 w-[90%]'>#{i+1}. {issue.title}</p>
              <div className='border-l border-gray-400 w-[70px] flex justify-center mr-[-0.75rem] h-full items-center'><AiOutlineRight/></div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default IssuesList