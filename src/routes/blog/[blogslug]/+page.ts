import { apiDomain } from '$lib/store';
import * as ph from '@prismicio/helpers';

export async function load({ params, fetch }) {
  // Fetch posts
  let posts = [];
  let heading = '';
  let keywords = [];
  let image = [];

  try {
    const postsRes = await fetch(`https://${apiDomain}/api?type=blog&itemtype=post&postid=${params.blogslug}`);

    if (postsRes.ok) {
      const postsData = await postsRes.json();
      posts = postsData.data;
      heading = ph.asText(postsData.data.title);
      keywords = postsData.data.tags.join(', ');
      image = ph.asImageSrc(postsData.data.teaser_image);
    } else {
      console.error('Error fetching posts:', postsRes.statusText);
    }
  } catch (error) {
    console.error('Error fetching posts:', error);
  }

  return {
    post: posts,
    heading: heading,
    keywords: keywords,
    image: image
  };
}