import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import { useNavigate } from 'react-router-dom';


const Handlepost = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ image: '', description: '' });
  const navigate = useNavigate();

  const handlePostSubmit = (e) => {
    e.preventDefault();
    if (newPost.image && newPost.description) {
      const post = {
        id: Date.now(),
        author: user.name,
        image: URL.createObjectURL(newPost.image),
        description: newPost.description,
        likes: 0,
        comments: 0,
      };
      setPosts([post, ...posts]);
      setNewPost({ image: '', description: '' });
      navigate('/');
    }
    };
    return(
      <>
        <div>
            <div className="modal">
              <div className="modal-content">
                <h3>Create New Post</h3>
                <form onSubmit={handlePostSubmit}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setNewPost({ ...newPost, image: e.target.files[0] })}
                    required
                  />
                  <textarea
                    placeholder="Write a description..."
                    value={newPost.description}
                    onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                    required
                  />
                  <button type="submit" className="login-button">POST</button>
                </form>
              </div>
            </div>
        </div>
      </>
    );
};

export default Handlepost;
