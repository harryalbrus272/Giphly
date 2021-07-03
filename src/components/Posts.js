import React from "react";

const Posts = () => {
  //This component contains dummy posts
  return (
    <div className="card">
      <div className="card-header">
        <div className="post-user-name">
          {" "}
          <i className="far fa-user"></i> Shashwat Kumar Singh
        </div>
        <div className="post-user-options">
          <i className="fas fa-th-list"></i>
        </div>
      </div>
      <div className="card-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
        error voluptatibus! Ratione voluptatibus consequuntur repudiandae,
        quidem vero sequi, aspernatur officiis exercitationem debitis nostrum id
        quos, et reiciendis enim laudantium quia.
        <img
          height="200"
          width="400"
          src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
          alt="laptop"
        />
      </div>
      <div className="card-footer">
        <div className="left-card-footer display-flex">
          <i className="far fa-heart"></i> &nbsp; <h5>Like</h5>
        </div>
        <div className="right-card-footer display-flex">
          <i className="far fa-comment"></i> &nbsp; <h5>Comment</h5>
        </div>
      </div>
    </div>
  );
};

export default Posts;
