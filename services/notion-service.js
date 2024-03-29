import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

export default class NotionService {
  constructor() {
    this.client = new Client({ auth: process.env.NOTION_ACCESS_TOKEN });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

    async getPublishedBlogPosts() {
      const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';
      // list blog posts
      const response = await this.client.databases.query({
          database_id: database,
          filter: {
            property: 'Published',
            checkbox: {
              equals: true
            }
          },
          sorts: [
            {
              property: 'Updated',
              direction: 'descending'
            }
          ]
      });
      return response.results.map(res => (NotionService.pageToPostTransformer(res)));
    }

    async getSingleBlogPost(slug) {
      let post, markdown;
      const database = process.env.NOTION_BLOG_DATABASE_ID ?? '';
        // list of blog posts
      const response = await this.client.databases.query({
        database_id: database,
        filter: {
          property: 'Slug',
          formula: {
            string: {
              equals: slug // slug
            }
          },
          // add option for tags in the future
        },
        sorts: [
          {
            property: 'Updated',
            direction: 'descending'
          }
        ]
      });
        if (!response.results[0]) {
            throw 'No results available'
        }

        // grab page from notion
        const page = response.results[0];
        const mdBlocks = await this.n2m.pageToMarkdown(page.id)
        markdown = this.n2m.toMarkdownString(mdBlocks);
        post = NotionService.pageToPostTransformer(page);

        return {
          post,
          markdown
        }
    }

    static pageToPostTransformer(page) {
      let cover = page.cover;
      if (cover) {
        switch (cover.type) {
          case 'file':
            cover = page.cover.file
            break;
          case 'external':
            cover = page.cover.external.url;
            break;
          default:
            // Add default cover image if you want...
            cover = ''
        }
      }

      return {
        id: page.id,
        cover: cover,
        icon: page.icon,
        title: page.properties.Name.title[0].plain_text,
        tags: page.properties.Tags.multi_select,
        description: page.properties.Description.rich_text[0].plain_text,
        date: page.properties.Updated.last_edited_time,
        slug: page.properties.Slug.formula.string,
        url: page.url
      }
    }
}