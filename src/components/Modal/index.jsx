import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import PropTypes from "prop-types";
import styles from "./style.scss";

class Modal extends Component {
  static propTypes = {
    displacement: PropTypes.number,
    children: PropTypes.element,
    callback: PropTypes.func,
    onTouch:PropTypes.bool
  };
  static defaultProps = {
    displacement: 100,
    onTouch: true,
    children: (
      <div style={{ height: "300px", width: "200px", background: "#fff" }} />
    )
  };
  constructor() {
    super();
    this.state = {
      top: 0,
      startY: 0,
      showTips: false,
      tipsText: "下拉关闭"
    };
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleCotentClick = this.handleCotentClick.bind(this);
  }
  componentDidMount() {
    this.overflow = document.body.style.overflow;
    this.height = document.getElementsByTagName("body")[0].style.height
    document.body.style.overflow = "hidden";
    document.getElementsByTagName("body")[0].style.height =
      window.innerHeight + "px";
  }
  componentWillUnmount(){
    document.body.style.overflow = this.overflow;
    document.getElementsByTagName("body")[0].style.height = this.height;
  }
  handleTouchStart(e) {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    
    this.setState({ startY: e.touches[0].pageY });
  }
  handleTouchMove(e) {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const { displacement } = this.props;
    const startY = this.state.startY;
    const moveY = e.touches[0].pageY;
    const move = moveY - startY;
    if (move / 2 > displacement) {
      this.setState({ tipsText: "释放关闭" });
    } else {
      this.setState({ tipsText: "下拉关闭" });
    }
    this.setState({ top: move / 2, showTips: true });
  }
  handleTouchEnd(e) {
    e.preventDefault();
    e.nativeEvent.stopImmediatePropagation();
    const { callback, displacement } = this.props;
    const top = this.state.top;
    if (top > displacement) {
      callback && callback();
    }
    this.setState({ top: 0, showTips: false, tipsText: "下拉关闭" });
  }
  handleModalClick() {
    const { callback } = this.props;
    console.log(111111)
    callback && callback();
  }
  handleCotentClick(e) {
    e.stopPropagation();
  }

  render() {
    const { top, showTips, tipsText } = this.state;
    const {onTouch} = this.props
    return (
      <div styleName="modal" onClick={this.handleModalClick}>
        <div
          styleName="content"
          ref="content"
          style={{ marginTop: top }}
          onTouchStart={onTouch?this.handleTouchStart:null}
          onTouchMove={onTouch?this.handleTouchMove:null}
          onTouchEnd={onTouch?this.handleTouchEnd:null}
          onClick={this.handleCotentClick}
        >
          {showTips && <div styleName="tips">{tipsText}</div>}
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default CSSModules(Modal,styles);