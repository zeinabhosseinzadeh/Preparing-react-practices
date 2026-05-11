import React, { Component } from 'react';
import Comments from './Comments';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { comments: null }
    }


    componentDidMount() {
        (async () => {
            try {
                const res = await fetch(`http://localhost:3001/comments?post-id=${this.props.post.id}`)
                const data = await res.json()
                console.log(data);
                this.setState({ comments: data })
            } catch (error) {
            }
        })()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.post.id !== this.props.post.id) {
            (async () => {
                try {
                    const res = await fetch(`http://localhost:3001/comments?post-id=${this.props.post.id}`)
                    const data = await res.json()
                    console.log(data);
                    this.setState({ comments: data })
                } catch (error) {
                }
            })()
        }
    }

    render() {
        return (
            <div className="container">
                <div className="post">
                    <img src={`assets/${this.props.post.image}`} alt="" />
                    <h1>{this.props.post.title}</h1>
                    <div>
                        {this.props.post.body}
                    </div>
                    <Comments comments={this.state.comments} />
                </div>
            </div>
        );
    }
}

export default Main;
