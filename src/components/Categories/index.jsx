import React, { Component } from "react";
import "./style.scss";

export default class Categories extends Component {
  handleClick(id) {
    this.props.onClick(id);
  }
  render() {
    const categories = this.props.categories;
    const { categoryId } = this.props;
    return (
      <div className="categories">
        <ul className="category-list">
          {categories.map((val, index) => (
            <li
              key={index}
              onClick={this.handleClick.bind(this, val.id)}
              className={`category-item ${categoryId === val.id && "activity"}`}
            >
              {val.name}
            </li>
          ))}
        </ul>
        <div
          className="show-more-btn"
          onClick={() => {
            this.props.onMoreClick();
          }}
        >
          <i className="iconfont icon-unfold" />
        </div>
      </div>
    );
  }
}
