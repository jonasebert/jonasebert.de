// src/routes/api/posts/+server.js
import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

// Hilfsfunktion, um das Datum im gewünschten Format auszugeben
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('de-DE', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
}

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();

  // Beiträge sortieren
  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date);
  });

  // Datum der sortierten Beiträge im gewünschten Format ausgeben
  const postsWithFormattedDate = sortedPosts.map(post => ({
    ...post,
    meta: {
      ...post.meta,
      date: formatDate(post.meta.date)
    }
  }));

  return json(postsWithFormattedDate);
};
