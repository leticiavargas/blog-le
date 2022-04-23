import { useEffect, useState } from "react";
import Head from "next/head";
import NotionService from "../services/notion-service";
import { BlogCard } from "../components/BlogCard";
import { Sidebar, PostCard } from '../components';
import styles from './home.module.scss';

const Home = ({ posts }) => {

  const title = 'Letícia Vargas';
  const description = 'Welcome to my page.'
console.log("POSTS NO HOME", posts);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name={"description"} title={"description"} content={description}/>
        <meta name={"og:title"} title={"og:title"} content={title}/>
        <meta name={"og:description"} title={"og:description"} content={title}/>
      </Head>
      <main className={styles.main}>
        <Sidebar
          author="Letícia Vargas"
        />
        <article className={styles.content}>
        {posts?.map((post) => (
                            <PostCard key={post.id} post={post}/>
                        ))}
        </article>
      </main>
      {/*
        <div className="min-h-screen">
            <main className="max-w-5xl mx-auto relative">
                <div className="h-full pt-4 pb-16 px-4 md:px-0 mx-auto">
                    <div className="flex items-center justify-center">
                        <h1 className="font-extrabold text-xl md:text-4xl text-black text-center">Notion + NextJS Sample Blog</h1>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
                        {posts?.map((post) => (
                            <BlogCard key={post.id} post={post}/>
                        ))}
                    </div>
                </div>
            </main>
        </div>
      */}
    </>
    )
};

export default Home;

export const getStaticProps = async () => {
  console.log("getStaticProps");
  const notionService = new NotionService();
  const posts = await notionService.getPublishedBlogPosts()

  return {
    props: {
      posts
    },
  }
}