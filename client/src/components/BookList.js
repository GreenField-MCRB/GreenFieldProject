import React from "react";
import BookCard from "./BookCard";
const BookList = (props) => {
  return (
    <div className="list">
      {props.books.map((book, i) => {
        return (
          <BookCard
            className="everything"
            key={i}
            bookImg={book.volumeInfo.imageLinks.smallThumbnail}
            bookTitle={book.volumeInfo.title}
            bookAuthor={book.volumeInfo.authors}
            bookPublish={book.volumeInfo.publishedDate}
          />
        );
      })}
    </div>
  );
};
export default BookList;
