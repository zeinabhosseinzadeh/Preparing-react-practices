import React from 'react'
import Chat from './Chat'

export default function Body({ messageList, avatar }) {
    const items = messageList.map((e, index) => {

        let isLeft = e.type === 'receive'
        return <Chat key={index} message={e.message} time={e.time} isLeft={isLeft} avatarImg={isLeft ? avatar.support : avatar.client} />
    })
    return (
        <div className="panel-body">
      <div className="chats">
        {items}
      </div>
    </div>
    )
}