import React, {Component} from 'react';
import User from './User';

class Post extends Component {
    render() {
        return (
            <div className="post">
                <User 
                    src="https://images.unsplash.com/photo-1517265035603-faefa167335b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="man"
                    name="Scott"
                    min
                />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    some account
                </div>
                <div className="post__descr">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Iste nemo sunt magnam quidem quae expedita nobis sit dolorum 
                    consequatur nisi?
                </div>
            </div>
        )
    }
}

export default Post;