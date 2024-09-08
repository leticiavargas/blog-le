import Image from "next/image";
import styles from './styles.module.scss';
import Link from "next/link";
import { Tag } from '../index';


const PostCard = ({ post }) => {
  const postDay = new Date(post.publishedDate).toLocaleDateString('pt-br', { month: 'long', day: '2-digit', year: 'numeric' }).split(" de ")
  
  return (
   <article className={styles.postContainer}>
    <aside className={styles.aside}>
      
      <p className={styles.day}>{postDay[0]}</p>
      <div className={styles.vertical}>
        <p className={styles.month}>{postDay[1]}</p>
        <p className={styles.year}>{postDay[2]}</p>
        {
          post.tags?.map((tag) => (
              <Tag key={tag.id}>{tag.name}</Tag>
            ))
        }

        <p className={styles.comment}>2 comentários</p>
      </div>
    </aside>
    <section className={styles.content}>
      <h2 className={styles.title}>{`${post.icon?.emoji} ${post.title}`}</h2>
      <p className={styles.author}>by Letícia</p>
      {post.cover && 
        <Image 
          className={styles.image}
          src={post.cover}
          unoptimized
          alt="image"
          width={0}
          height={0}
        />
      }
      <p className={styles.post}>{post.description}</p>
      <Link href={`/blog/${post.slug}`} className={styles.readMore}>Leia mais</Link>
    </section>
   </article>
   
   
   
    /*
    <Link href={`/post/${post.slug}`} className={styles.container}>
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
    </Link>*/
  )
}

export { PostCard }