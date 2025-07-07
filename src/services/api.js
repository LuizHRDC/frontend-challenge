const API = 'http://localhost:3001/posts';

export async function getPosts() {
  const res = await fetch(API);
  return res.json();
}

export async function createPost(post) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(post)
  });
  return res.json();
}

export async function deletePost(id) {
  await fetch(`${API}/${id}`, { method: 'DELETE' });
}
