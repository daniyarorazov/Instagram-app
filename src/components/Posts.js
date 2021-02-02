import React, {Component} from 'react';
import InstaService from '../services/instaService';

// 52:10 YouTube

class Posts extends Component {

    InstaService = new InstaService();
    state = {
        posts: [],
        error: false
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            error: false
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    render() {
        return (
            <div className="left">
               
            </div>
        )
    }
}

export default Posts;