import * as ph from '@prismicio/helpers';
import { getDesc } from "$lib/util/TextHelpers.js";

export async function load({ params, fetch }) {
  const api = process.env.JONAS_EBERT_API_URL;
  const res = await fetch(`${api}/api?type=blog&itemtype=post&postid=${params.slug}`);
  
  if (res.ok) {
    const post = await res.json();
    return {
      posts: post.data,
      title: ph.asText(post.data.title),
      // description: getDesc(
      //   ph.asText(post.data.body[0].primary.content),
      //   250
      // ),
      keywords: post.data.tags.join(", "),
      image: ph.asImageSrc(post.data.teaser_image)
    };
  } else {
    // Error handling
    return {
      posts: []
    };
  }
}