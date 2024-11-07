// Post.js
import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaComment, FaBookmark, FaRegBookmark } from 'react-icons/fa';
import '../App.css';

function Post({ post, isLoggedIn }) {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const toggleLike = () => {
    if (isLoggedIn) setLiked(!liked);
  };

  const toggleBookmark = () => {
    if (isLoggedIn) setBookmarked(!bookmarked);
  };

  return (
    <div className="post-container">
      <div className="post-author">{post.author}</div>
      <img src={post.image} alt="Post" className="post-image" />
      <div className="post-description">{post.description}</div>
      <div className="post-icons">
        <span onClick={toggleLike}>
          {liked ? <FaHeart className="icon liked" /> : <FaRegHeart className="icon" />}
        </span>
        <span className="icon">
          <FaComment />
        </span>
        <span onClick={toggleBookmark}>
          {bookmarked ? <FaBookmark className="icon bookmarked" /> : <FaRegBookmark className="icon" />}
        </span>
      </div>
    </div>
  );
}

export default Post;
