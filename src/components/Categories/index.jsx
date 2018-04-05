import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import style from "./style.scss";

class Categories extends Component {
  handleClick(id) {
    this.props.onClick(id);
  }
  render() {
    const categories = this.props.categories;
    const { categoryId } = this.props;
    return (
      <div styleName="categories">
        <ul styleName="category-list">
          {categories.map((val, index) => (
            <li
              key={index}
              onClick={this.handleClick.bind(this, val.id)}
              styleName={`category-item ${categoryId === val.id ? "activity":""}`}
            >
              {val.name}
            </li>
          ))}
        </ul>
        <div
          styleName="show-more-btn"
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

export default CSSModules(Categories,style,{allowMultiple:true});
