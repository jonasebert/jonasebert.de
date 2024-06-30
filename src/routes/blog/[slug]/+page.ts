import * as ph from '@prismicio/helpers';
import { getDesc } from "$lib/util/TextHelpers.js";

export async function load({ params, fetch }) {
  const apiUrl = 'https://api.jonasebert.de/api';
  const res = await fetch(`${apiUrl}?type=blog&itemtype=post&postid=${params.slug}`);
  
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
    console.error('Fehler beim Abrufen des Posts:', res.status, res.statusText);
    return {
      posts: []
    };
  }
}