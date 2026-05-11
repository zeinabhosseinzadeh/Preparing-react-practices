import React from "react";

export default function SideBar({ posts, handlePost }) {
  const items = posts.map((e,index) => (
    <li key={index} onClick={() => handlePost(index)}>
      {e.title}
    </li>
  ));
  return (
    <aside>
      <ul>{items}</ul>
    </aside>
  );
}
