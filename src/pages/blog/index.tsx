import Head from "next/head";
import Link from "next/link";

import { client } from "~lib/contentful";
import { BlogPostType } from "~types/contentful.types";

interface BlogProps {
  posts: Array<BlogPostType>;
}

function Blog({ posts }: BlogProps) {
  return (
    <>
      <Head>
        <title>Blog | Eddy Sims</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <h1>Blog</h1>
        <p>
          One of my goals in 2021 is to get better at writing. To do so I plan
          to write blog articles about things front end development related.
        </p>

        <hr />
        {posts.length > 0 ? (
          <ul>
            {posts.map((post) => (
              <li key={post?.sys?.id}>
                <Link href={`/blog/${post?.fields?.slug}`} passHref>
                  {post?.fields?.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          "There are currently no posts to show"
        )}
      </>
    </>
  );
}

export async function getStaticProps() {
  const data = await client.getEntries({
    content_type: "post",
  });

  return {
    props: {
      posts: data.items,
    },
    revalidate: 1,
  };
}

export default Blog;
