import { useEffect, useState } from "react";
import { GetPublishedBlogPosts } from "../services/notion-service";
import { PostCard } from '../components';
import styles from './home.module.scss';

const Home = () => {

  return (
    <article>
      HOME
    </article>
  )
};

export default Home;

export const getStaticProps = async (context) => {
  const posts = await GetPublishedBlogPosts();
  console.log("GETSTATCPOSTS ... ")

  return {
    props: {
      posts
    },
    revalidate: 1,
  }
}