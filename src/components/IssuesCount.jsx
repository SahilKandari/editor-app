'use client'
import { rightExpandState } from '@/state/State';
import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import Button from './Button';
import { AiOutlineRight } from "react-icons/ai";
import { IssuesData } from '@/data/IssuesData';
import IssuesList from './IssuesList';
import Issue from './Issue';

const IssuesCount = () => {
  const collapse = useRecoilValue(rightExpandState);
  const [buttonSelec, setButtonSelec] = useState(0);
  const [showComp, setShowComp] = useState(0);
  const [compData, setCompData] = useState({});
  const [iss, setIssu] = useState({});
  
  const handleChangeComp = (comp, id, issue) => {
    setShowComp(comp);
    const componentData = IssuesData.find((data) => data.id === id);
    if (id === null) {
      setIssu(issue);
    } else {
      setCompData(componentData);
    }
  }
  return (
    <div className={`w-1/4 min-w-80 bg-gray-900 h-[calc(100vh-210px)] rounded-sm p-3 ${collapse && 'hidden'}`}>
      {
        showComp === 0 && 
        <>
          <h6 className='border-b border-gray-600 text-sm pb-2'>Count of Issues</h6>
          <div className='flex p-1 bg-gray-800 rounded-sm my-5'>
            <Button onClick={() => setButtonSelec(0)} className={`flex-1 ${buttonSelec !== 0 && 'bg-gray-800 text-gray-500'}`}>Current File</Button>
            <Button onClick={() => setButtonSelec(1)} className={`flex-1 ${buttonSelec !== 1 && 'bg-gray-800 text-gray-500'}`}>Full Project</Button>
          </div>
          <div className='flex flex-col gap-2 overflow-auto h-[calc(100vh-400px)] scrollbar-hidden'>
            {
              IssuesData.map((issue, i) => (
                <div key={`issueList_${i}`} onClick={() => handleChangeComp(1, issue.id)} className='flex p-3 items-center bg-gray-800 rounded-sm cursor-pointer'>
                  <span className={`w-[10px] h-[10px] rounded-full ${issue.color}`}/>
                  <h3 className='ml-3 text-[25px] border-r pr-5 border-gray-600 w-[70px]'>{issue.number}</h3>
                  <p className='mx-3'>{issue.name}</p>
                  <AiOutlineRight className='ml-auto'/>
                </div>
              ))
            }
          </div>
          <div className='flex items-center gap-3 mt-4 pt-3 border-t border-gray-600'>
            <input type="checkbox" className='w-[18px] h-[18px] cursor-pointer' />
            <p className='text-sm'>Exclude Dependency</p>
          </div>
        </>
      }
      {
        showComp === 1 && <IssuesList handleChangeComp={handleChangeComp} compData={compData} />
      }
      {
        showComp === 2 && <Issue compData={compData} iss={iss}/>
      }
    </div>
  )
}

export default IssuesCount