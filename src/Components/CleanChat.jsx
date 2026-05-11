import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";

class CleanChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "chat-online",
      messageList: [
        {
          type: "sent",
          message: "Good morning, sir.What can I do for you?",
          time: "10:42:24",
        },
        {
          type: "receive",
          message: "Well, I am just looking around.",
          time: "10:52:24",
        },
        {
          type: "sent",
          message: "If necessary Hello, please ask me.",
          time: "10:52:24",
        },
      ],
      avatar: {
        client:
          "https://img.icons8.com/?size=100&id=23516&format=png&color=000000",
        support:
          "https://img.icons8.com/?size=100&id=20749&format=png&color=000000",
      },
    };
  }

  handleMessage(msg) {
    this.setState({
      messageList: [
        ...this.state.messageList,
        {
          type: "sent",
          message: msg,
          time: new Date().toLocaleTimeString()
        }
      ]
    })
  }

  render() {
    return (
      <div className="container bootstrap snippets">
        <dive className="col-md-7 col-xs-12 col-md-offset-2">
          <div className="panel" iud="chat">
            <Header title={this.state.title} />
            <Body messageList={this.state.messageList}avatar={this.state.avatar}/>
            <Footer handleMessage={this.handleMessage.bind(this)} />
          </div>
        </dive>
      </div>
    );
  }
}

export default CleanChat;
