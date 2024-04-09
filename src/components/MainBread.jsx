'use client'
import { usePathname, useRouter  } from 'next/navigation'
import React from 'react'

const getPartialPath = (fullPath, targetSubstring) => {
  let parts = fullPath.split('/');
  parts = parts.filter((pathName) => (pathName !== ''))
  let resultParts = [];
  for (let i = 0; i < parts.length; i++) {
      resultParts.push(parts[i]);
      if (parts[i] === targetSubstring) {
          break;
      }
  }
  return '/' + resultParts.join('/');
}


const MainBread = () => {
  const router = useRouter();

  const paths = usePathname();
  let pathNames = paths.replaceAll('_', ' ').split('/');
  pathNames = pathNames.filter((pathName) => (pathName !== ''));



  const redirectTo = (pathName) => {
    var newPath = getPartialPath(paths, pathName.replaceAll(' ', '_'))
    router.push(newPath);
  }

  return (
    <div className='flex items-center gap-2 py-4'>
      {
        pathNames.map((pathName, i) => (
          <div key={i} className={`cursor-pointer flex items-center gap-2 text-xs ${pathNames.length - 1 !== i && 'text-gray-400'}`}>
            <div onClick={() => redirectTo(pathName)}>{pathName}</div>
            {pathNames.length - 1 !== i && <div>/</div>}
          </div>
        ))
      }
    </div>
  )
}

export default MainBread