import React from "react";
import BookCard from "./BookCard";
const BookList = (props) => {
  /**
   * @BookList is a function that maps over all searched books(currently we're limiting the search to 1 book so in order to fully utilise this function you need to increase the limit.)
   */
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return <BookCard className="everything" key={i} book={book} />;
      })}
    </div>
  );
};
export default BookList;
