import React, { useState } from 'react';

const Addblog = () => {
  const [blogName, setBlogName] = useState('');
  const [description, setDescription] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ blogName, description, authorName });
    alert('Blog Submitted (but not actually posted)!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Blog Name:
        <input type="text" value={blogName} onChange={(e) => setBlogName(e.target.value)} />
      </label>
      <br /> <br/>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <br /> <br/>
      <label>
        Author Name:
        <input type="text" value={authorName} onChange={(e) => setAuthorName(e.target.value)} />
      </label>
      <br /> <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Addblog;