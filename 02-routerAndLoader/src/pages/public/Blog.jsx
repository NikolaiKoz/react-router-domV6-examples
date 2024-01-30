import { Link, useLoaderData } from "react-router-dom";

export default function Blog() {
  const { posts } = useLoaderData();
  // console.log(posts);

  return (
    <ul>
      {posts.length > 0 ? (
        posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>
              [{post.id}] - {post.title}
            </Link>
          </li>
        ))
      ) : (
        <li> No blogs found</li>
      )}
    </ul>
  );
}
