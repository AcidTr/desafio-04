import React from 'react';

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      <div className="divider" />
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img src={comment.author.avatar} className="avatar" />
          <p>
            <span>
              {comment.author.name}
            </span>
            {comment.content}
          </p>
        </div>
      ))}
    </div>
  )
}

export default PostComments;