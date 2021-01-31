import React, {Component} from 'react';
import Post from './Post';


class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80" alt="inst" />
                <Post src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FyfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" alt="second" />
            </div>
        )
    }
}

export default Posts;