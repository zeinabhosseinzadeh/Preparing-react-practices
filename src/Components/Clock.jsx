import React, { Component } from "react";
import Time from "./Time";

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showTime: true
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        {this.state.showTime && <Time/>}
        <button
          className={`btn btn-${this.state.showTime ? "danger" : "success"}`}
          onClick={() => this.setState({ showTime: !this.state.showTime })}
        >
          {this.state.showTime ? "Hide Time" : "Show Time"}
        </button>
      </div>
    );
  }
}
export default Clock;
