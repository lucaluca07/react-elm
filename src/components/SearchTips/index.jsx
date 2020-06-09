import React, { Component } from "react";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";
import getImgSrc from "../../util/getImgSrc";
import "./style.scss";

class SearchTips extends Component {
  handleClickWord(keyword) {
    const onClick = this.props.onClick;
    onClick && onClick(keyword);
  }
  render() {
    const { keyword, restaurants, words, search_word } = this.props;
    return (
      <div className="search-tips">
        {restaurants || words ? (
          <div className="tips">
            {restaurants.map((val, index) => (
              <Link key={index} to={`/shop/${val.id}`}>
                <div className="shop-tips">
                  <img
                    className="shop-img"
                    src={getImgSrc(val.image_path)}
                    alt="ele"
                  />
                  <div className="shop-info">
                    <div className="shop-name">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: val.name
                            .split(search_word)
                            .join(`<span class="keyword">${search_word}</span>`)
                        }}
                      />
                      {val.tags.map(val => (
                        <span
                          className="tag"
                          style={{ background: `#${val.name_color}` }}
                        >
                          {val.name}
                        </span>
                      ))}
                    </div>
                    <div>评价{val.rating}</div>
                  </div>
                </div>
              </Link>
            ))}
            {words.map((val, index) => (
              <div
                key={index}
                className="word-tips"
                onClick={this.handleClickWord.bind(this, val)}
              >
                <i className="iconfont icon-sousuoxiao" />
                <p
                  className="word"
                  dangerouslySetInnerHTML={{
                    __html: val
                      .split(search_word)
                      .join(`<span class="keyword">${search_word}</span>`)
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="search-word">
            <i className="iconfont icon-sousuoxiao" />
            查找<span className="keyword">“{keyword}“</span>
          </div>
        )}
      </div>
    );
  }
}

export default SearchTips;
