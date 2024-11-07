// Feed.js
import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import Post from './Post';
import '../App.css';

function Feed() {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "newsProvider123",
      image: "https://via.placeholder.com/600x400",
      description: "First post description!",
      likes: 10,
      comments: 2,
    },
    {
      id: 2,
      author: "newsProvider456",
      image: "https://via.placeholder.com/600x400",
      description: "Another day, another post!",
      likes: 5,
      comments: 1,
    },
  ]);

  return (
    <div className="feed-container">
      <h2>Feed</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            user={user}
            isLoggedIn={!!user}
            onLike={(postId) => {
              setPosts((prevPosts) =>
                prevPosts.map((p) =>
                  p.id === postId && !p.likes.includes(user.id)
                    ? { ...p, likes: [...p.likes, user.id] }
                    : p
                )
              );
            }}
            onComment={(postId, comment) => {
              setPosts((prevPosts) =>
                prevPosts.map((p) =>
                  p.id === postId
                    ? { ...p, comments: [...p.comments, { userId: user.id, text: comment }] }
                    : p
                )
              );
            }}
          />
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

export default Feed;
