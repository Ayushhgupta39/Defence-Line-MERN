import React from 'react'
import { BsClock } from 'react-icons/bs'

const NewsCard = ({ author, content, description, date, title, url, urlToImage }) => {
  return (
    <div className="flex m-2 p-2 items-center text-black">
      <div className="flex flex-col sm:flex-row">
        <img className="sm:h-48" src={urlToImage} alt="news_image" />

        <div className="flex flex-col mx-4 justify-between my-1">
          <div className="flex items-center text-gray-400">
            <BsClock className="text-yellow-400 mr-2" />
            <div className="flex text-xs sm:text-sm gap-4">
              <p>{date}</p>
              <p>{author}</p>
            </div>
          </div>

          <p className="font-bold">{title}</p>
          <p className="text-sm sm:text-base">{description}</p>

          <div className="flex my-1 sm:my-0">
            <button
              type="button"
              className="border-2 text-sm sm:text-inherit p-1 border-yellow-400 hover:bg-yellow-400 hover:text-white"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsCard
