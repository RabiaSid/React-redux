import logo from './logo.svg';
import './App.css';
import PostsList from './features/posts/PostsList';
import AddPostForm from './features/posts/AddPostForm';
// import { Counter } from './features/counter/Counter';

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostsList />
      {/* <Counter /> */}
    </div>
  );
}

export default App;
