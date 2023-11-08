import { useEffect, useState } from "react";
import { GetPublishedBlogPosts } from "../services/notion-service";
import { PostCard } from '../components';
import styles from './home.module.scss';

const Home = ({ posts }) => {

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

export default Home;

export const getStaticProps = async (context) => {
  const posts = await GetPublishedBlogPosts()

  return {
    props: {
      posts
    },
    revalidate: 1,
  }
}