import React from "react";
import "./App.css";
// import {
//   MDBBtn,
//   MDBCard,
//   MDBCardBody,
//   MDBCardImage,
//   MDBCardTitle,
//   MDBCardText,
//   MDBRow,
//   MDBCol,
//   MDBView,
//   MDBIcon,
// } from "mdbreact";
const BookCard = (props) => {
  return (
    <div className="everything">
      <img src={props.bookImg} />
      <h1>{props.bookTitle}</h1>
      <h2>{props.bookAuthor}</h2>
      <p>{props.bookPublish}</p>
    </div>
  );
};
export default BookCard;

{
  /* <MDBCol md="4">
        <MDBCard wide cascade id="image-container">
          <MDBView cascade>
            <MDBCardImage
              className="imageBk"
              hover
              overlay="white-slight"
              className="card-img-top"
              src={props.bookImg}
              alt="Card cap"
            />
          </MDBView>

          <MDBCardBody cascade className="text-center">
            <MDBCardTitle className="card-title">
              <strong>{props.bookTitle}</strong>
            </MDBCardTitle>

            <p className="font-weight-bold blue-text">{props.bookAuthor}</p>

            <MDBCardText>{props.bookPublish} </MDBCardText>

            <MDBCol md="12" className="d-flex justify-content-center">
              <a href="!#" className="px-2 fa-lg li-ic">
                <MDBIcon fab icon="linkedin-in"></MDBIcon>
              </a>

              <a href="!#" className="px-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter"></MDBIcon>
              </a>

              <a href="!#" className="px-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f"></MDBIcon>
              </a>
            </MDBCol>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
  */
}
