import React from "react";

const Posts = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="post-user-name"> <i class="far fa-user"></i> Shashwat Kumar Singh</div>
        <div className="post-user-options">
          <i class="fas fa-th-list"></i>
        </div>
      </div>
      <div className="card-body">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis,
        error voluptatibus! Ratione voluptatibus consequuntur repudiandae,
        quidem vero sequi, aspernatur officiis exercitationem debitis nostrum id
        quos, et reiciendis enim laudantium quia.
      </div>
      <div className="card-footer">
          <div className="left-card-footer display-flex"><i class="far fa-heart"></i> &nbsp; <h5>Like</h5></div>
          <div className="right-card-footer display-flex"><i class="far fa-comment"></i> &nbsp; <h5>Comment</h5></div>
      </div>
    </div>
  );
};

export default Posts;
