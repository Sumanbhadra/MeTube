import React, { useState } from 'react'
import { HiAdjustmentsHorizontal, HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'

export default function SearchCategory() {
    const [categoryId, setCategoryId] = useState(0)
  return (
    <div className="flex items-center font-semibold">
        <div className='flex flex-wrap items-center justify-start h-10 m-3 pt-1  gap-2 overflow-hidden bg-gradient-to-l from-gray-300 via-white to-white'>
            <div className={`${categoryId=="0"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg  cursor-pointer`} onClick={()=>setCategoryId(0)}>All</div>
            <div className={`${categoryId=="1"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg  cursor-pointer`} onClick={()=>setCategoryId(1)}>Shorts</div>
            <div className={`${categoryId=="2"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg  cursor-pointer`} onClick={()=>setCategoryId(2)}>Videos</div>
            <div className={`${categoryId=="3"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg  cursor-pointer`} onClick={()=>setCategoryId(3)}>Unwatched</div>
            <div className={`${categoryId=="4"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg  cursor-pointer`} onClick={()=>setCategoryId(4)}>Watched</div>
            <div className={`${categoryId=="5"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg  cursor-pointer`} onClick={()=>setCategoryId(5)}>Recently Uploaded</div>
            <div className={`${categoryId=="6"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg  cursor-pointer`} onClick={()=>setCategoryId(6)}>Live</div>
            <div className={`${categoryId=="7"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg  cursor-pointer`} onClick={()=>setCategoryId(7)}>Song</div>

        </div>
        <div className="flex items-center gap-2 ">
        <h1>Filters</h1>
        <span className="text-2xl text-gray-600"><HiOutlineAdjustmentsHorizontal />
        </span>
        </div>
        
    </div>

  )
}
