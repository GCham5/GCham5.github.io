import React from 'react'

const Comments = ({comments}) => {

    const commentList = comments.length ? (
        comments.map(comment => {
            return (
                <div className="container comment" key={comment.id}>
                    <span>{comment.content}</span>
                    <hr className="commentHr"></hr>
                </div>
            )
        })
    ) : (
        <p className="center"> No comments</p>
    )
    return(
        <div className="comments container">
            {commentList}
        </div>
    )
}

export default Comments