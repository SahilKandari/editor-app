"use client";
import React, { useState } from 'react'
import Image from "next/image";
import { AiFillCaretDown, AiFillCaretRight  } from "react-icons/ai";

const Folders = ({ explorer, selectFile }) => {
  const [expand, setExpand] = useState(false);

  return (
    <>
      {explorer?.isFolder ?
        <div className="flex flex-col py-1 my-1">
          <div
            className={`cursor-pointer flex items-center gap-2 hover:text-blue-500 ${
              expand && "text-blue-500"
            }`}
            onClick={() => setExpand(!expand)}
          >
            {expand ? (
              <>
                <AiFillCaretDown/>
                <Image src="/Selected Folder Icon.png" width={16} height={16} alt='folders' />
              </>
            ) : (
              <>
                <AiFillCaretRight/>
                <Image src="/Unselected Folder.png" width={16} height={16} alt='folders' />
              </>
            )}
            {explorer.name}
          </div>
        <div className={`${expand ? "pl-3 block" : "hidden"}`}>
          {explorer?.items.map((folder) => (
            <Folders key={`folder_${folder.id}`} explorer={folder} selectFile={selectFile} />
          ))}
        </div>
        </div>
      :
        <div key={`file_${explorer.id}`} className={`cursor-pointer flex items-center gap-2 py-1 my-1 pl-6 hover:text-blue-500 rounded-sm ${explorer.isSelected && 'bg-blue-950 text-blue-500'}`} onClick={() => selectFile(explorer.id)}>
          <Image src="/Unselected File.png" width={12} height={12} alt='files' /> {explorer?.name}
        </div>
      }
    </>
  )
}

export default Folders