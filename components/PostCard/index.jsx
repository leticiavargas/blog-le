import styles from './styles.module.scss';
import Link from "next/link";
import { Tag } from '../index';


const PostCard = ({ post }) => {
  return(
    <Link href={`/post/${post.slug}`}>
      <a className={styles.container}>
        <h2 className={styles.title}>{post.icon ? post.icon.emoji : "" }{post.title}</h2>
        <p className={styles.meta}>
          <time>{new Date(post.date).toLocaleDateString('pt-br', { month: 'long', day: '2-digit', year: 'numeric' })}</time>
          <span> - Comentários?</span>
        </p>
        <p>{post.description}</p>
        <span></span>
        <div className={styles.tagList}>
          {post.tags.map(tag => (<Tag key={tag.id}>{tag.name}</Tag>))}
        </div>
      </a>
    </Link>
  )
}

export { PostCard }