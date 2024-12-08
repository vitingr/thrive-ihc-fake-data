'use client'

import { PostCard } from '@/components/common/PostCard'
import { Post } from '@/types/models/post'

import { PostFeedProps } from './types'
import { POSTS_DATA } from './data'
import { useEffect, useState } from 'react'
import { SkeletonHorizontalCard } from '@/components/skeletons/SkeletonHorizontalCard'

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
