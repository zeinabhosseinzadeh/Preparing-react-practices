import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inp: "",
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handleMessage(this.state.inp)
    this.setState({ inp: "" });
  }

  render() {
    return (
      <>
        <div className="panel-footer">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Say something"
                value={this.state.inp}
                onChange={(e) => this.setState({ inp: e.target.value })}
              />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="submit">
                  Send
                </button>
              </span>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Footer;
