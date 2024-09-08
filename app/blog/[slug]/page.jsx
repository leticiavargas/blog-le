
import { GetPublishedBlogPosts, GetSingleBlogPost } from "@/services/notion-service";
import Post from './[slug]';
 
async function getPost(slug) {
  return await GetSingleBlogPost(slug);
}
 
export default async function Page({ params }) {

  const result = await getPost(params.slug)
  return <Post markdown={result.markdown} post={result.post} />
}



