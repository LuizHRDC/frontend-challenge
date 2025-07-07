import { useState } from "react";
import { createPost } from "../services/api";

export default function PostForm({ onPostCreated }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await createPost({ title, content });
    setTitle("");
    setContent("");
    onPostCreated();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Conteúdo"
        required
      />
      <button type="submit">Publicar</button>
    </form>
  );
}
