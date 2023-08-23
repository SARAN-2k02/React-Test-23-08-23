import React from "react";

const TitleList = ({ titles, authors, onDelete }) => {
  return (
    <>
      <div className="ShowBooks">
        <h2 className="list">Books List 📚</h2>
        <ul>
          {titles.map((title, index) => (
            <div className="books-container">
              <h2 key={index}> Title : {title}</h2>
              <p className="para"> Author : {authors[index]}</p>
              <button className="dlt-btn" onClick={() => onDelete(index)}>
                Delete
              </button>
              {/* <button onClick={() => onUpdate()}>Update</button> */}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TitleList;
