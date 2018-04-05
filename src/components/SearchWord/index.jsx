import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";

class SearchWord extends Component {
  render() {
    const { title, del, data, onDelClick, onWordClick } = this.props;
    return (
      <div styleName="search-words">
        <h3 styleName="title">
          <span>{title}</span>
          {del && (
            <i
              onClick={() => {
                onDelClick && onDelClick();
              }}
              className="iconfont icon-lajixiang"
            />
          )}
        </h3>
        <ul styleName="word-list">
          {data.map((val, index) => (
            <div
              styleName="word"
              onClick={() => {
                onWordClick && onWordClick(val);
              }}
              key={index}
            >
              {val}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default CSSModules(SearchWord,styles,{allowMultiple:true});
