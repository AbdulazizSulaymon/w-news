import React, { Component } from "react";
import "./head.css";
import begin from "./3d";

export default class Head extends Component {
  componentDidMount() {
    begin();
  }

  render() {
    return (
      <section className="head pt-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex align-items-center">
              <h1 className="text-center text-lg-left my-3 mt-lg-2 mb-lg-5 mx-2">
                World news
              </h1>
            </div>
            <form></form>
            <div className="col-lg-6 d-flex align-items-center justify-content-center">
              <canvas id="scene"></canvas>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
