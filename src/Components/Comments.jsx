import React from "react";

export default function Comments({ comments }) {
  const items = comments?.map((e, index) => (
    <div key={index} className="comment">
      <p>{e.body}</p>
      {/* console.log(e); */}
    </div>
  ));
  return (
    <div className="comments">
      <p> Comments</p>
      {items}
    </div>
  );
}
