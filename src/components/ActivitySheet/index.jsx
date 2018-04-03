import React, { Component } from "react";
import "./style.scss";

export default class ActivitySheet extends Component {
  static defaultProps = {
    close: true,
    zIndex:1000
  };
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
  handleClick() {
    this.props.onClick && this.props.onClick();
  }
  render() {
    const { title, close,zIndex } = this.props;
    return (
      <div 
      style={{zIndex:zIndex}}
      className="activity-sheet">
        <div className="sheet-shade" onClick={this.handleClick.bind(this)} />
        <div className="sheet-comment">
          {close && (
            <div className="close-tag" onClick={this.handleClick.bind(this)}>
              <i className="iconfont icon-close" />
            </div>
          )}
          {title && <h2 className="sheet-title">{title}</h2>}
          <div className="sheet-list">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
