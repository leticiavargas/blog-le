import { PostCard } from '../components';

const Blog = ({ posts }) => {

  return (
    <article>
      {
        posts?.map((post) => (
          <PostCard key={post.id} post={post}/>
        ))
      }
    </article>
  )
};

export default Blog;