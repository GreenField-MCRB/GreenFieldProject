import React from "react";
const Bookview = (props) => {
  return (
    <div className="book">
      <form onSubmit={props.searchBook} className="search-form">
        <input
          placeholder="search for books"
          className="search-bar"
          type="text"
          onChange={props.searching}
        ></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default Bookview;
