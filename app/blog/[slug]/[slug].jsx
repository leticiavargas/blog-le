'use client'

import ReactMarkdown from "react-markdown";
import styles from './styles.module.scss';
import { Button } from "@/components";
import { useRouter } from 'next/navigation';

const Post = ({ markdown, post }) => {
  const router = useRouter();

  return (
    <article className={styles.content}>
      <Button icon="angle-left" onClick={() => router.back() }>Voltar</Button>
      <h1>{post.icon ? post.icon.emoji : "" }{post.title}</h1>
      <hr />
      <ReactMarkdown>{markdown.parent}</ReactMarkdown>
    </article>
  )
}

export default Post;