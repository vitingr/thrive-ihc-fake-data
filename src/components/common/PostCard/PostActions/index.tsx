'use client'

import { useState } from 'react'

import { Comment } from '../icons/Comment'
import { FillFavourite } from '../icons/FillFavourite'
import { FillHeart } from '../icons/FillHeart'
import { OutlineFavourite } from '../icons/OutlineFavourite'
import { OutlineHeart } from '../icons/OutlineHeart'
import { Share } from '../icons/Share'

export const PostActions: React.FC = () => {
  const [favouritedPost, setFavouritedPost] = useState<boolean>(false)
  const [isPostLiked, setIsPostLiked] = useState<boolean>(false)

  return (
    <>
      <div className="flex w-full justify-between gap-8 px-4">
        <figure className="flex items-center gap-4 lg:gap-5">
          {isPostLiked ? (
            <button onClick={() => setIsPostLiked(false)}>
              <FillHeart className="animate__animated animate__fadeIn h-4 w-4 cursor-pointer text-blue-500 transition-all duration-300 hover:brightness-125 lg:h-5 lg:w-5" />
            </button>
          ) : (
            <button onClick={() => setIsPostLiked(true)}>
              <OutlineHeart className="animate__animated animate__fadeIn h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
            </button>
          )}
          <Comment className="h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
          <Share className="h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
        </figure>
        <figure className="flex items-center">
          {favouritedPost ? (
            <button onClick={() => setFavouritedPost(false)}>
              <FillFavourite className="animate__animated animate__fadeIn h-4 w-4 cursor-pointer text-blue-500 transition-all duration-300 hover:brightness-125 lg:h-5 lg:w-5" />
            </button>
          ) : (
            <button onClick={() => setFavouritedPost(true)}>
              <OutlineFavourite className="animate__animated animate__fadeIn h-4 w-4 cursor-pointer text-slate-600 transition-all duration-300 hover:text-blue-500 lg:h-5 lg:w-5" />
            </button>
          )}
        </figure>
      </div>
      <p className="w-full px-4 text-sm text-slate-600">10 curtidas</p>
    </>
  )
}
