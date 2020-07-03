import React from "react";
const Bookview = (props) => {
  return (
    // <div className="book">
    //   <form onSubmit={props.searchBook} className="search-form">
    //     <input
    //       placeholder="search for books"
    //       className="search-bar"
    //       type="text"
    //       onChange={props.searching}
    //     ></input>
    //     <button className="search-button" type="submit">
    //       Search
    //     </button>
    //   </form>
    // </div>
    <div className="book">
      <form role="form" id="form-buscar" onSubmit={props.searchBook}>
        <div className="form-group">
          <div className="input-group">
            <input
              id="1"
              className="form-control"
              type="text"
              name="search"
              placeholder="Search..."
              required
              onChange={props.searching}
            />
            <span className="input-group-btn">
              <button className="btn btn-success" type="submit">
                <i
                  className="glyphicon glyphicon-search"
                  aria-hidden="true"
                ></i>{" "}
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Bookview;
