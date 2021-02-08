import Link from "next/link";
import { Layout } from "~components/Layout";
import { Container } from "~components/Container";
import { client } from "~lib/contentful";
import { BlogPostType } from "~types/contentful.types";

interface BlogProps {
  posts: Array<BlogPostType>;
}

function Blog({ posts }: BlogProps) {
  return (
    <>
      <Layout>
        <Container>
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
            "No posts"
          )}
        </Container>
      </Layout>
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
