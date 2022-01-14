// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createClient, Entry } from 'contentful';
const client = createClient({
  space: "lj4c55zc5uoh", // ID of a Compose-compatible space to be used \
  accessToken: "0zksBXLPfFzIGvTBoEXthyCU8ksRjO863ZqUjn9BrLg", // delivery API key for the space \
});

type GetPageParams = {
  pageContentType?: string;
  slug?: string;
  locale?: string;
};


type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 
  res.status(200).json({ name: 'John Doe' })
}

export async function getBlogPosts(params: GetPageParams = {}) {
  const query = { 
    // locale: params.locale,
    // 'fields.slug': params.slug,
    content_type: 'blogPost',
    // 'fields.content.sys.contentType.sys.id': params.pageContentType,
    ...params
  };
  const { items  } = await client.getEntries(query);
  return items as Entry<any>[];
}