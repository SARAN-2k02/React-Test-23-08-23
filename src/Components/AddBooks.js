import React, { useState } from "react";

const AddBooks = ({ Addon }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const HandleAdd = () => {
    if (title && author) {
      Addon(title.toUpperCase(), author);
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <>
      <div className="main2">
        <h2>Add Book Title</h2>
        <input
          type="text"
          placeholder="Title"
          value={title}
          className="title-input"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br></br>
        <input
          type="text"
          placeholder="Author"
          value={author}
          className="author-input"
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <button className="add-btn" onClick={HandleAdd}>Add books</button>
    </>
  );
};
export default AddBooks;
