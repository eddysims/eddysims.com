const apiBasePath = "https://dev.to/api";

export const fetchDevToArticles = async () => {
  const data = await fetch(`${apiBasePath}/articles/me/published`, {
    headers: {
      "api-key": process.env.DEV_TO_API_KEY as string,
      accept: "application/vnd.forem.api-v1+json",
    },
  }).then((res) => res.json());

  return data;
};
