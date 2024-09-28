import React from 'react'

export default function Category({categoryId,setCategoryId}) {
  return (
    <div className='flex flex-wrap items-center justify-start h-10 m-3  gap-2 overflow-hidden '>
      <div className={`${categoryId=="0"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg font-semibold cursor-pointer`} onClick={()=>setCategoryId(0)}>All</div>
      <div className={`${categoryId=="10"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg font-semibold cursor-pointer`} onClick={()=>setCategoryId(10)}>Music</div>
      <div className={`${categoryId=="20"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg font-semibold cursor-pointer`} onClick={()=>setCategoryId(20)}>Gaming</div>
      <div className={`${categoryId=="17"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg font-semibold cursor-pointer`} onClick={()=>setCategoryId(17)}>Sports</div>
      <div className={`${categoryId=="28"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg font-semibold cursor-pointer`} onClick={()=>setCategoryId(28)}>Technology</div>
      <div className={`${categoryId=="23"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg font-semibold cursor-pointer`} onClick={()=>setCategoryId(23)}>Comedy</div>
      <div className={`${categoryId=="25"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg font-semibold cursor-pointer`} onClick={()=>setCategoryId(25)}>News</div>
      <div className={`${categoryId=="24"?`bg-black text-white`:`bg-gray-200 text-slate-800`} px-4 py-1 rounded-lg font-semibold cursor-pointer`} onClick={()=>setCategoryId(24)}>Entertainment</div>

    </div>
  )
}
