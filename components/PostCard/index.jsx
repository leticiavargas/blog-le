import styles from './styles.module.scss';
import Link from "next/link";

const PostCard = ({ post }) => {
  return(
    <Link href={`/post/${post.slug}`}>
      <a>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <span>{new Date(post.date).toLocaleDateString('pt-br')}</span>

        {
          post.tags.map(tag => (
              <span key={tag.id}>#{tag.name}</span>
          ))
        }
      </a>
    </Link>
  )
}

export { PostCard }