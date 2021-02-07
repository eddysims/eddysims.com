import { client } from '../../lib/contentful';
import Link from 'next/link';
import { Layout } from '../../components/Layout';
import { Container } from '../../components/Container';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';

export async function getStaticPaths() {
  const data = await client.getEntries({
    content_type: 'post'
  });

  return {
    paths: data.items.map(item => (
      //@ts-expect-error
      { params: { slug: item?.fields?.slug } }
    )),
    fallback: true
  }
}

export async function getStaticProps({ params }) {
  const data = await client.getEntries({
    content_type: 'post',
    'fields.slug': params.slug
  });

  return {
    props: {
      post: data.items[0]
    },
    revalidate: 1,
  }
}

function BlogPost({ post }) {
  console.log(post)
  if (!post) {
    return <div>404</div>
  }

  return (
    <Layout>
      <Container>
        <h1>{post?.fields?.title}</h1>
        <div><p><strong>Published on:</strong> {post?.fields?.publishDate}</p></div>
        <div>{documentToReactComponents(post?.fields?.content, {
          renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => (
              <Image
                src={`https:${node.data.target.fields.file.url}`}
                width={node.data.target.fields.file.details.image.width}
                height={node.data.target.fields.file.details.image.width}
              />
            )
          }
        })}</div>
      </Container>
    </Layout>
  )
}

export default BlogPost;

