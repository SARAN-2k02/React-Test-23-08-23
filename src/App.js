import "./App.css";
import AddBooks from "./Components/AddBooks";
import TitleList from "./Components/TitleList";

import React, { useState } from "react";
// import AddBooks from "./AddTitle";

const App = () => {
  let [titles, setTitles] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleAddBooks = (title, author) => {
    setTitles([...titles, title]);
    setAuthors([...authors, author]);
  };

  const handleDeleteTitle = (index) => {
    const newTitles = [...titles];
    const newAuthors = [...authors];

    newTitles.splice(index, 1);
    newAuthors.splice(index, 1);
    setTitles(newTitles);
    setAuthors(newAuthors);
    // console.log(newTitles);
    // console.log(newAuthors);
  };

  return (
    <div className="Main">
      {/* <AddBooks /> */}

      <AddBooks Addon={handleAddBooks} />
      <TitleList
        titles={titles}
        authors={authors}
        onDelete={handleDeleteTitle}
      />
      <h2 className="total">Total Books Are :{titles.length}</h2>
    </div>
  );
};

export default App;
