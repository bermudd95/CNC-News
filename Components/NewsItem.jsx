import React from 'react'

const NewsItem = ( { title, description, url, urlToImage }) => {
  return (
    <div className='border border-black rounded-lg m-10'>
        <div className='flex flex-col justify-items-center m-5 text-center'>
            <img className='w-[500px] self-center' src={urlToImage}/>
            <h2 className='font-bold py-5'>
                <a href={url}>
                    {title}
                </a>
            </h2>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}

export default NewsItem