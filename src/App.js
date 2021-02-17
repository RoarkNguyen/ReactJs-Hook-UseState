import { useEffect, useState } from "react";
import PostList from "./components/PostList";

function App() {
  const [postList, setPostList] = useState([{ id: 1, title: "hiih" }]);
  useEffect(() => {
    async function fetchPostList(params) {
      //...
      try {
        const requestUrl =
          "http://js-post-api.herokuapp.com/api/posts?_limit=12&_page=2";
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log(responseJSON.data);
        const { data } = responseJSON;

        setPostList(data);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }
    console.log("Post List");

    fetchPostList();
  }, []);
  useEffect(() => {
    console.log("Todo List");
  }, []);
  return (
    <div className="app">
      <div>Welcome to study React Hook</div>
      <div>React Hooks - Posts List</div>

      <PostList posts={postList} />
    </div>
  );
}

export default App;
