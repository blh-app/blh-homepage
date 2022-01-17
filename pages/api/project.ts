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
  limit?: number
};

 
export async function getProjects(params: GetPageParams = {}) {
  const query = { 
    // locale: params.locale,
    // 'fields.slug': params.slug,
    content_type: 'project',
    order: '-fields.created',
    // 'fields.content.sys.contentType.sys.id': params.pageContentType,
    ...params
  };
  const { items  } = await client.getEntries(query);
  return items as Entry<any>[];
}