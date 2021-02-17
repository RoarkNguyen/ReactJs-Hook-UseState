import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import queryString from "query-string";
import PostList from "./components/PostList";
import PostFilterForm from "./components/PostFilterForm";

function App() {
  const [postList, setPostList] = useState([{ id: 1, title: "hihi" }]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });

  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList(params) {
      //...
      try {
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });
        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log("Failed to fetch post list: ", error.message);
      }
    }

    fetchPostList();
  }, [filters]);
  function handlePageChange(newPage) {
    console.log("New Page", newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }
  function HandleFilterFormChange(formValues) {
    console.log("haha", formValues);
    setFilters({
      ...filters,
      _page: 1,
      title_like: formValues.searchTerm,
    });
  }

  return (
    <div className="app">
      <div>Welcome to study React Hook</div>
      <div>React Hooks - Posts List</div>
      <PostFilterForm onSubmit={HandleFilterFormChange} />
      <PostList posts={postList} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;
