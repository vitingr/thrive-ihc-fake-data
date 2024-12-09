'use client'

import { useEffect, useState } from 'react'

import { PostCard } from '@/components/common/PostCard'
import { SkeletonHorizontalCard } from '@/components/skeletons/SkeletonHorizontalCard'
import { Post } from '@/types/models/post'

import { POSTS_DATA } from './data'
import { PostFeedProps } from './types'

export const PostFeed: React.FC<PostFeedProps> = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  return isVisible ? (
    <section className="flex w-full max-w-full flex-col gap-4">
      {POSTS_DATA.map((post: Post, index: number) => (
        <PostCard key={`post-${index}`} post={post} />
      ))}
    </section>
  ) : (
    <section className="flex w-full max-w-full flex-col gap-4">
      <SkeletonHorizontalCard />
      <SkeletonHorizontalCard />
      <SkeletonHorizontalCard />
      <SkeletonHorizontalCard />
      <SkeletonHorizontalCard />
      <SkeletonHorizontalCard />
    </section>
  )
}
