import { base } from "$app/paths";
import * as ph from '@prismicio/helpers';
import { getDesc } from "$lib/util/TextHelpers.js";

// @type {import('./$types').PageLoad}
export async function load({ params, fetch, data }) {
  const res = await fetch(`${base}/blog/${params.slug}.json`);
  const post = await res.json();
  return {
    post: post.post,
    title: ph.asText(post.post.data.title),
    // description: getDesc(
    //   ph.asText(post.post.data.body[0].primary.content),
    //   250
    // ),
    keywords: post.post.tags.join(", "),
    image: ph.asImageSrc(post.post.data.teaser_image),
  };
}