import { Posts, CreatePost } from "./components";
function App() {
  return (
    <div className="App">
      <CreatePost />
      {[0,1,2,3].map((item) => (<Posts key={item} />))}
    </div>
  );
}

export default App;
