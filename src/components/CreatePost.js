import React from "react";

const CreatePost = () => {
  return <div className="create-post-container display-flex">
      <div className="input-box">
          <input type="text" name="post" id="post" placeholder="Create Post ....." />
      </div>
      <div className="post-button">
          <button className="">Create Post!</button>
      </div>
  </div>;
};

export default CreatePost;
