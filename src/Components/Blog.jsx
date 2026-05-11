import React, { Component } from "react";
import SideBar from "./SideBar";
import Main from "./Main";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      currentIndexPost: null,
    };
  }

  componentDidMount() {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3001/posts`);
        const data = await res.json();
        this.setState({
          posts: data,
          currentIndexPost: 0,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }

  handlePost(index) {
    this.setState({
      currentIndexPost: index,
    });
  }

  render() {
    return (
      <div className="root">
        {this.state.posts ? (
          <>
            <SideBar
              posts={this.state.posts}
              handlePost={this.handlePost.bind(this)}
            />
            <Main post={this.state.posts[this.state.currentIndexPost]} />
          </>
        ) : (
          <h2>Is Loading</h2>
        )}
      </div>
    );
  }
}

export default Blog;
