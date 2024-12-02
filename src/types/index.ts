export type ActionResponse<T> = {
  message: string;
  error?: boolean;
  data?: T;
};
