export const loaderBlog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  if (!res.ok)
    throw {
      status: res.status,
      statusText: "No encontrado,",
    };

  return { posts };
};
