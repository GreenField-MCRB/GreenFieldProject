import React from "react";
const BookCard = (props) => {
  return (
    <div className="everything">
      <img src={props.bookImg} alt="" />
      <h1>{props.bookTitle}</h1>
      <h2>{props.bookAuthor}</h2>
      <p>{props.bookPublish}</p>
    </div>
  );
};
export default BookCard;
