import React, { Component } from 'react';
import Comment from './Comment';
import AddComment from './AddComment';
import '../../css/Comment.css'


class CommentSection extends Component {
    state = {
        comments: [
            { id: 1, content: 'Awesome creative!' },
            { id: 2, content: 'Very good beats' }
        ]
    }


    addComment = (comment) => {
        comment.id = Math.random()
        let comments = [...this.state.comments, comment];
        this.setState({
            comments: comments
        })
      }

      render() {
        return (
          <div className=" container">
            <Comment comments={this.state.comments} />
            <AddComment addComment={this.addComment} />
          </div>
        );
      }
}

export default CommentSection