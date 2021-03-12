import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";
import { ContentfulCollection } from "contentful";
import { client } from "~lib/contentful";
import { BlogPostType } from "~types/contentful.types";

export async function getStaticPaths() {
  const data: ContentfulCollection<BlogPostType> = await client.getEntries({
    content_type: "post",
  });

  return {
    paths: data.items.map((item) => ({ params: { slug: item?.fields?.slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const data = await client.getEntries({
    content_type: "post",
    "fields.slug": params.slug,
  });

  return {
    props: {
      post: data.items[0],
    },
    revalidate: 1,
  };
}

interface BlogPostProps {
  post: BlogPostType;
}

function BlogPost({ post }: BlogPostProps) {
  if (!post) {
    return <div>404</div>;
  }

  return (
    <>
      <h1>{post?.fields?.title}</h1>
      <div>
        <p>
          <strong>Published on:</strong> {post?.fields?.publishDate}
        </p>
      </div>
      <div>
        {documentToReactComponents(post?.fields?.content, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: (node) => (
              <Image
                src={`https:${node.data.target.fields.file.url}`}
                width={node.data.target.fields.file.details.image.width}
                height={node.data.target.fields.file.details.image.width}
              />
            ),
          },
        })}
      </div>
    </>
  );
}

export default BlogPost;
