/**
 * NoNullable removes any null options from types.
 * this is particularily useful for gathering types from
 * `cva` or generated graphql types
 */
export type NoNullable<T> = {
  [K in keyof T]: Exclude<T[K], null | undefined>;
};

export type ActionResult<T> = Promise<{
  error?: boolean;
  data?: T;
  message?: string;
}>;
