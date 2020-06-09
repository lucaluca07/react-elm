import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import style from "./style.scss";

class ActivitySheet extends Component {
  static defaultProps = {
    close: true,
    zIndex:1000
  };
  componentDidMount() {
    this.overflow = document.body.style.overflow;
    this.position = document.body.style.position;
    this.height = document.getElementsByTagName("body")[0].style.height
    document.body.style.overflow = "hidden";
    document.body.style.position = "relative";
    document.getElementsByTagName("body")[0].style.height =
      window.screen.height + "px";
  }
  componentWillUnmount() {
    document.body.style.overflow = this.overflow;
    document.body.style.position = this.position;
    document.getElementsByTagName("body")[0].style.height = this.height;
  }
  handleClick() {
    this.props.onClick && this.props.onClick();
  }
  render() {
    const { title, close,zIndex } = this.props;
    return (
      <div 
      style={{zIndex:zIndex}}
      styleName="activity-sheet">
        <div styleName="sheet-shade" onClick={this.handleClick.bind(this)} />
        <div styleName="sheet-comment">
          {close && (
            <div styleName="close-tag" onClick={this.handleClick.bind(this)}>
              <i className="iconfont icon-close" />
            </div>
          )}
          {title && <h2 styleName="sheet-title">{title}</h2>}
          <div styleName="sheet-list">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default CSSModules(ActivitySheet,style);
