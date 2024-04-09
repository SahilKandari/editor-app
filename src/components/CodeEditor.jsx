"use client";
import { codeFiles, leftExpandState, rightExpandState } from "@/state/State";
import Editor from "@monaco-editor/react";
import Image from "next/image";
import { useRecoilState } from "recoil";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import { useEffect, useState } from "react";
import { explorer } from "@/data/DirectoryData";

const CodeEditor = () => {
  const [leftExpand, setLeftExpand] = useRecoilState(leftExpandState);
  const [rightExpand, setRightExpand] = useRecoilState(rightExpandState);
  const [codes, setCodes] = useState('');
  const [file, setFile] = useRecoilState(codeFiles);
  const [defaultLang, setDefaultLang] = useState('javascript')
  const handleCodeChange = (value) => {
    setCodes(value);
  }

  let selecCode = ''
  const getObjectById = (id, object) => {
    if (object.isSelected) {
      selecCode = object.code;
    }
    if (object.id === id) {
      return object;
    }
    if (object.items) {
      for (const item of object.items) {
        const result = getObjectById(id, item);
        if (result) {
          return result;
        }
      }
    }
    return null;
  }

  const handleSelectFile = (id) => {
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
    findAndSelect(explorer);
  }

  const filesArr = file.map(id => getObjectById(id, explorer));
  const handleRemoveFile = (id, e) => {
    e.stopPropagation();
    setFile((prev) => {
      return prev.filter((item) => {
        if (item === id) {
          filesArr.map((files) => {
            if (files.id === item) {
              files.isSelected = false;
            }
          })
        }
        return item !== id;
      });
    });
    filesArr[0].isSelected = true;
  }
  

  useEffect(() => {
    setCodes(selecCode);
    const selected = filesArr.find((file) => {
      if (file.isSelected) {
        return file;
      }
    });

    const extension = selected?.name?.split('.')[1];

    if (extension === 'html') {
      setDefaultLang('HTML')
    } else if (extension === 'css') {
      setDefaultLang('CSS')
    } else if (extension === 'json') {
      setDefaultLang('JSON');
    } else {
      setDefaultLang('JavaScript');
    }
  }, [filesArr]);

  return (
    <div
      className={`h-[calc(100vh-210px)] flex flex-col relative rounded-sm ${
        leftExpand && rightExpand
          ? "w-full"
          : leftExpand !== rightExpand
          ? "w-9/12"
          : "w-1/2"
      }`}
    >
      <div className="flex justify-start overflow-x-auto scrollbar-hidden h-[40px]">
        {
          filesArr.map((filesObj) => (
            <Button onClick={() => handleSelectFile(filesObj.id)} key={`button_${filesObj.id}`} className={`rounded-b-none	${!filesObj.isSelected && 'bg-gray-800 border-x border-gray-600'}`}>
              {filesObj.name} <AiOutlineClose className="hover:scale-110" onClick={(e) => handleRemoveFile(filesObj.id, e)} />
            </Button>
          ))
        }
      </div>
      <div className="flex-grow">
        <Editor
          className="rounded-sm"
          defaultLanguage={defaultLang}
          defaultValue="// some comment"
          theme="vs-dark"
          onChange={(value) => handleCodeChange(value)}
          value={codes}
        />
      </div>
      <Image
        className="absolute bottom-5 left-[-10px] cursor-pointer"
        onClick={() => setLeftExpand(!leftExpand)}
        src={`${leftExpand ? "/Expand.png" : "/Collapse.png"}`}
        width={20}
        height={20}
        alt="left expand"
      />
      <Image
        className="absolute bottom-5 right-[-10px] cursor-pointer"
        onClick={() => setRightExpand(!rightExpand)}
        src={`${rightExpand ? "/Collapse.png" : "/Expand.png"}`}
        width={20}
        height={20}
        alt="right expand"
      />
    </div>
  );
};

export default CodeEditor;
