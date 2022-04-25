import ReactMarkdown from "react-markdown";
import Head from "next/head";
import NotionService from "../../services/notion-service";
import styles from './styles.module.scss';
import { Button } from "../../components";
import { useRouter } from 'next/router';

const Post = ({markdown, post}) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name={"description"} title={"description"} content={post.description}/>
        <meta name={"og:title"} title={"og:title"} content={post.title}/>
        <meta name={"og:description"} title={"og:description"} content={post.description}/>
        <meta name={"og:image"} title={"og:image"} content={post.cover}/>
      </Head>
      <article className={styles.content}>
        <Button icon="angle-left" onClick={() => router.back() }>Voltar</Button>
        <h1>{post.icon ? post.icon.emoji : "" }{post.title}</h1>
        <hr />
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </>
  )
}


export const getStaticProps = async (context) => {
  const notionService = new NotionService();
  const p = await notionService.getSingleBlogPost(context.params?.slug);

  if (!p) {
    throw ''
  }

  return {
    props: {
      markdown: p.markdown,
      post: p.post
    },
  }
}

export async function getStaticPaths() {
  const notionService = new NotionService()

  const posts = await notionService.getPublishedBlogPosts()

  // Because we are generating static paths, you will have to redeploy your site whenever
  // you make a change in Notion.
  const paths = posts.map(post => {
    return `/post/${post.slug}`
  })

  return {
    paths,
    fallback: false,
  }
}

export default Post;