import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

function App() {
  return (
    <main>
      <h1>Blogzinho</h1>
      <PostForm onPostCreated={() => window.location.reload()} />
      <PostList />
    </main>
  );
}

export default App;
