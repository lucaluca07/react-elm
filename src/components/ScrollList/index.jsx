import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import throttle from "../../util/throttle";
import debounce from "../../util/debounce";
import getScrollerParent from "../../util/getScrollerParent"
import styles from "./style.scss";

class InfiniteScroll extends Component {
  static propTypes = {
    pageStart: PropTypes.number,
    threshold: PropTypes.number,
    hasMore: PropTypes.bool,
    autoLoad: PropTypes.bool,
    loadNext: PropTypes.func.isRequired,
    spinLoader: PropTypes.element,
    noMore: PropTypes.element
  };

  static defaultProps = {
    pageStart: 0,
    threshold: 200,
    hasMore: false,
    autoLoad: false,
    spinLoader: (
      <div
        style={{
          textAlign: "center",
          fontSize: 12,
          lineHeight: 1.5,
          paddingTop: 10,
          paddingBottom: 10,
          clear: "both"
        }}
      >
        Loading...
      </div>
    ),
    noMore: null
  };

  constructor() {
    super();
    this.state = {
      loading: false,
      showGoTop: false
    };
    this.showBackTop = this.showBackTop.bind(this);
    this.getScroller = this.getScroller.bind(this)
  }

  componentWillMount() {
    this.page = this.props.pageStart;
    //节流
    this.scroller = throttle(this.scrollHandler, 10);
    //防抖
    this.finalShowbackTop = debounce(this.showBackTop, 50);
    this.autoLoaded = false;
  }

  componentDidMount() {
    this.scrollNode = this.getScroller()
    this.attachScrollEvent();
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.props.children.length < nextProps.children.length) {
      this.setState({
        loading: false
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.children.length > prevProps.children.length) {
      setTimeout(() => {
        this.attachScrollEvent();
      }, 0);
    }
  }

  componentWillUnmount() {
    this.detachScrollEvent();
  }

  calcTop = element => {
    if (!element) {
      return 0;
    }
    return element.offsetTop + this.calcTop(element.offsetParent);
  };

  scrollHandler = () => {
    let offset;
    const el = ReactDOM.findDOMNode(this.refs.loadmore);
    const { loading } = this.state;
    const top = el.getBoundingClientRect().top
    offset = top - window.screen.height;
    if (offset < Number(this.props.threshold)) {
      // this.detachScrollEvent();
      //如果正在请求不会发起下次请求
      if (typeof this.props.loadNext === "function") {
        this.setState({
          loading: true
        });
        if (!loading) {
          this.props.loadNext((this.page += 1));
        }
      }
    }
  };

  showBackTop() {
    let scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    if (scrollTop >= 300) {
      this.setState({ showGoTop: true });
    } else {
      this.setState({ showGoTop: false });
    }
  }
  getScroller(){
    const node = ReactDOM.findDOMNode(this) ;
    const parent = getScrollerParent(node)
    if(parent === document.documentElement){
      return window
    }else{
      return parent
    } 
  }
  attachScrollEvent = () => {
    if (!this.props.hasMore) {
      return;
    }
    this.scrollNode.addEventListener("scroll", this.scroller, false);
    window.addEventListener("resize", this.scroller, false);
    //改变尺寸不会改变scrolltop大小,只需要监听滚动事件即可
    this.scrollNode.addEventListener("scroll", this.finalShowbackTop, false);

    if (this.props.autoLoad && !this.autoLoaded) {
      this.autoLoaded = true;
      this.scroller();
    }
  };

  detachScrollEvent = () => {
    this.scrollNode.removeEventListener("scroll", this.scroller, false);
    window.removeEventListener("resize", this.scroller, false);
    this.scrollNode.removeEventListener("scroll", this.finalShowbackTop, false);
  };

  backTop() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      pageStart,
      threshold,
      hasMore,
      autoLoad,
      loadNext,
      spinLoader,
      noMore,
      children,
      ...props
    } = this.props;
    const { showGoTop, loading } = this.state;
    return (
      <div {...props}>
        {children}
        {loading &&
          hasMore && <div style={{ textAlign: "center" }}>{spinLoader}</div>}
        {!hasMore && noMore}
        <div ref="loadmore" />
        {showGoTop ? (
          <div styleName="back-top" onClick={this.backTop.bind(this)}>
            <i className="iconfont icon-huidaodingbu" />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default CSSModules(InfiniteScroll,styles);