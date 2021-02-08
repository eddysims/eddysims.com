type PostFields = {
  title: string;
  slug: string;
  publishDate: string;
  /**
   * disable no any here as content is a rich text type from
   * contentful. This may be switched when I move to contentful gql
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any;
};

export type BlogPostType = {
  fields: PostFields;
  sys: {
    id: string;
  };
};
