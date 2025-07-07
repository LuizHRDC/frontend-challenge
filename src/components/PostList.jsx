import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../services/api";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  async function loadPosts() {
    const data = await getPosts();
    setPosts(data);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
            <button
              onClick={async () => {
                await deletePost(p.id);
                loadPosts();
              }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
