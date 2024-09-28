import React from 'react'
import VideoCard from './VideoCard'

export default function Feed({apiData}) {
    console.log(apiData)
  return (
    <div>
      <div className="flex flex-wrap  items-stretch justify-between">
          {apiData.map((item, index) => (
            <div className="lg:w-1/3 md:w-1/2 p-2 w-full" key={index}>
              <VideoCard key={index} item={item} />
            </div>
          ))}
        </div>
    </div>
  )
}
