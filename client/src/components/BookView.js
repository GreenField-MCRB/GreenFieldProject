import React from "react";
import Message from "./Message";
import ReactDOM from "react-dom";
class Bookview extends React.Component {
  OnClick = () => {
    // ReactDOM.render(<Message />, document.getElementById("root"));
  };
  render() {
    return (
      <div className="book">
        <form role="form" id="form-buscar" onSubmit={this.props.searchBook}>
          <div className="form-group">
            <div className="input-group">
              <input
                spellCheck="false"
                id="1"
                className="form-control"
                type="text"
                name="search"
                placeholder="Search..."
                required
                onChange={this.props.searching}
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
          <button id="btnn2" type="submit" className="button">
            favourites
          </button>
        </form>
      </div>
    );
  }
}
export default Bookview;
