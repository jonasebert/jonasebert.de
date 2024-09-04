import * as ph from '@prismicio/helpers';
// import { getDesc } from "$lib/util/TextHelpers.js";

export async function load({ params, fetch }) {
  const apiUrl = 'https://api.jonasebert.de/api';

  // Abrufen der Blog-Posts
  const postsRes = await fetch(`${apiUrl}?type=blog&itemtype=post&postid=${params.slug}`);
  let posts = [];
  let heading = '';
  let description = '';
  let keywords = [];
  let image = [];
  if (postsRes.ok) {
    const postsData = await postsRes.json();
    posts = postsData.data;
    heading = ph.asText(postsData.data.title);
    // description = getDesc(ph.asText(postsData.data.body[0].primary.content), 250);
    keywords = postsData.data.tags.join(', ');
    image = ph.asImageSrc(postsData.data.teaser_image);
  } else {
    console.error('Fehler beim Abrufen der Posts:', postsRes.status, postsRes.statusText);
  }

  return {
    posts,
    heading,
    description,
    keywords,
    image
  };
}