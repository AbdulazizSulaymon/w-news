import React, { Component } from "react";
import "./footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid footer">
          <div className="d-flex align-items-center justify-content-center">
            <img src="/img/logoWhite.png" alt="w-news"></img>
            <h6 className="m-0 ml-2">the latest and greatest world news</h6>
          </div>
          <div></div>
        </div>
      </footer>
    );
  }
}
