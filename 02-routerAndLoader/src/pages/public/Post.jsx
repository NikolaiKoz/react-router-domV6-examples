import { useLoaderData } from "react-router-dom";

export default function Post() {
  const { post } = useLoaderData();
//   console.log(post);
  return (
    <div>
      <h1>
        [ {post.id} ] - {post.title}
      </h1>
      <p>{post.body}</p>
    </div>
  );
}
