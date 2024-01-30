export const loaderPost = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (!res.ok)
    throw {
      status: res.status,
      statusText: "No encontrado,",
    };
  const post = await res.json();

  return { post };
};
