import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen absolute text-white bg-gradient-to-r from-black aspect-video pt-36 px-10'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
          <button className='bg-white cursor-pointer text-black p-4 px-12 text-xl hover:opacity-80 rounded-lg mr-2'>
          ▷ Play
          </button>
          <button className='bg-gray-500 cursor-pointer text-white p-4 px-12 text-xl opacity-80 rounded-lg'>
            More Info
          </button>
        </div>
    </div>
  )
}

export default VideoTitle