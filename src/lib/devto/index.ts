import { Post } from "./devto/types";

async function fetchDev<T>(slug: string): Promise<T> {
  return await fetch(`https://dev.to/api${slug}`, {
    headers: {
      "api-key": process.env.DEV_TO_API_KEY ?? "",
    },
  })
    .then((res) => res.json() ?? [])
    .catch(() => ({ error: "Something went wrong." }));
}

export const fetchPublishedDevPosts = async () => {
  try {
    const posts: Post[] = await fetchDev("/articles/me");

    return posts.filter((post) => post.published);
  } catch {
    throw new Error("Something went wrong fetchPublishedDevPosts");
  }
};
