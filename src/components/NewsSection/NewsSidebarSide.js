import React, { Fragment } from "react";
import handleSubmit from "src/utils/handleSubmit";

const SidebarCommentsIcon = ({ icon = "" }) => {
  return (
    <div className="sidebar__comments-icon">
      <i className={icon}></i>
    </div>
  );
};

const NewsSidebarSide = ({
  posts = [],
  categories = [],
  tags = [],
  comments = [],
}) => {
  const onSubmit = (data) => console.log(data);

  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__search">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="sidebar__search-form"
        >
          <input type="search" placeholder="Search" name="search" />
          <button type="submit">
            <i className="icon-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsSidebarSide;
