'use client'
import React, { useState } from "react";
import Folders from "./Folders";
import { useRecoilState, useRecoilValue } from "recoil";
import { codeFiles, leftExpandState } from "@/state/State";
import { explorer as data } from "@/data/DirectoryData";

const Directory = () => {
  const collapse = useRecoilValue(leftExpandState);
  const [file, setFile] = useRecoilState(codeFiles);
  
  const selectFile = (id) => {
    function findAndSelect(node) {
      if (node.id === id) {
        node.isSelected = true;
        setFile((prev) => {
          const uniqueIds = new Set(prev);
          uniqueIds.add(id);
          const updatedFile = [...uniqueIds]
          return updatedFile;
        });
      } else {
        node.isSelected = false;
      }
      if (node.items) {
        for (let item of node.items) {
          findAndSelect(item);
        }
      }
    }
    findAndSelect(data);
  }

  return (
    <div className={`bg-gray-900 p-3 w-1/4 rounded-sm h-[calc(100vh-210px)] min-w-80 relative ${collapse && 'hidden'}`}>
      <h6 className="border-b border-gray-600 text-sm pb-2 mb-2">Folders & Files</h6>
      <Folders explorer={data} selectFile={selectFile} />
    </div>
  )
};

export default Directory;
