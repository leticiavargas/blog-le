import { useEffect, useState } from "react";
import NotionService from "../services/notion-service";
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
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts()

  return {
    props: {
      posts
    },
  }
}