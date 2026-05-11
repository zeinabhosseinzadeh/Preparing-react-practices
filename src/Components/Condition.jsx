import React, { Component } from 'react';
import User from './User';
import Guest from './Guest';

class Condition extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLogin: false
        }
    }

    handleClick() {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }
    render() {
        return (
            <div>
                {this.state.isLogin ? <User /> : <Guest />}
                {/* <button className='' style={{backgroundColor:this.state.isLogin ? 'red':'green'}} onClick={this.handleClick.bind(this)}>{this.state.isLogin ? 'LogOut' : 'Login'}</button> */}
                <button
                    className={`btn btn-${this.state.isLogin ? 'danger' : 'success'}`}
                    onClick={this.handleClick.bind(this)}>
                    {this.state.isLogin ? 'LogOut' : 'Login'}
                </button>
            </div>
        );
    }
}

export default Condition;
