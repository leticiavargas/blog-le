import Blog from './blog';
import { GetPublishedBlogPosts } from "@/services/notion-service";
 
export default async function Page({ recentPosts }) {
  const posts = await GetPublishedBlogPosts();
  console.log("GETSTATCPOSTS ... ")
  return <Blog recentPosts={posts} />
}

