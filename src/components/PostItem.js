import React from 'react';

import PostHeader from './PostHeader';
import PostComments from './PostComments';

function PostItem(post) {
  return (
    <div className="post">
      <PostHeader author={post.author} date={post.date} />
      <p className="post-content">{post.content}</p>
      <PostComments comments={post.comments} />
    </div>
  )
}


export default PostItem;