import React from "react";

export default function Note({ title, content }) {
  return (
    <div className="shadow-lg rounded-3 p-3">
      <p>{title}</p>
      <p>{content}</p>
    </div>
  );
}
