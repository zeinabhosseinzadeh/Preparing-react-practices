import React from "react";

export default function Chat({ avatarImg, message, time, isLeft }) {
  return (
    <div className={`chat ${isLeft && "chat-left"}`}>
      <div className="chat-avatar">
        <a
          className="avatar avatar-online"
          data-toggle="tooltip"
          href="#"
          data-placement="left"
          title=""
          data-original-title="Edward Fletcher"
        >
          <img src={avatarImg} alt="..." />
          <i></i>
        </a>
      </div>
      <div className="chat-body">
          <div className="chat-content">
               <p>{message}</p>
               <p className="chat-time">{time}</p>
          </div>
      </div>
    </div>
  )
}
