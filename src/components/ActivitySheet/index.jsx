import React, { Component } from "react";
import "./style.scss";

export default class ActivitySheet extends Component {
  componentDidMount() {
    document.body.style.overflow = "hidden";
    document.body.style.position = "relative";
    document.getElementsByTagName("body")[0].style.height =
      window.screen.height + "px";
  }
  componentWillUnmount() {
    document.body.style.overflow = "visible";
    document.body.style.position = "";
    document.getElementsByTagName("body")[0].style.height = "auto";
  }

  render() {
    return (
      <div className="activity-sheet">
        <div className="sheet-shade" />
        <div className="sheet-comment">
          <h2 className="sheet-title">header</h2>
          <div className="sheet-list">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
