import React, { Component } from "react";

import "./style.scss";

class SearchWord extends Component {
  render() {
    const { title, del, data, onDelClick, onWordClick } = this.props;
    return (
      <div className="search-words">
        <h3 className="title">
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
        <ul className="word-list">
          {data.map((val, index) => (
            <div
              className="word"
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

export default SearchWord;
