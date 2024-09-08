'use-client'

import { PostCard } from '@/components';

const Blog = ({ recentPosts }) => {

  return (
    <article>
      {
        recentPosts?.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))
      }
    </article>
  )
};

export default Blog;
