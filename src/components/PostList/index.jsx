import React from "react";
import PropTypes from "prop-types";

PostList.propTypes = {};

function PostList(props) {
  const { posts } = props;
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
