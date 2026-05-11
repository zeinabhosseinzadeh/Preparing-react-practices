import React, { Component } from "react";

class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    this.timeInt = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
      console.log(new Date().toLocaleTimeString());
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeInt);
  }
  render() {
    return (
      <div>
        <p>{this.state.time}</p>
      </div>
    );
  }
}

export default Time;
