import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import styles from "./style.scss";

class SearchTips extends Component {
  render() {
    const { keyword, restaurants, words, search_word } = this.props;
    return (
      <div styleName="search-tips">
        {restaurants || words ? (
          <div styleName="tips">
            {restaurants.map((val, index) => (
              <div key={index} styleName="shop-tips">
                <img
                  styleName="shop-img"
                  src="https://fuss10.elemecdn.com/a/a9/e6089ce3150798b80b44cb622ff95png.png?imageMogr/format/webp/thumbnail/48x/"
                  alt="ele"
                />
                <div styleName="shop-info">
                  <div styleName="shop-name">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: val.name
                          .split(search_word)
                          .join(`<span class="keyword">${search_word}</span>`)
                      }}
                    />
                    <span styleName="tag">减</span>
                  </div>
                  <div>评价4.8</div>
                </div>
              </div>
            ))}
            {words.map((val, index) => (
              <div key={index} styleName="word-tips">
                <i className="iconfont icon-sousuoxiao" />
                <p
                  styleName="word"
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
          <div styleName="search-word">
            <i className="iconfont icon-sousuoxiao" />
            查找<span styleName="keyword">“{keyword}“</span>
          </div>
        )}
      </div>
    );
  }
}

export default CSSModules(SearchTips,styles,{allowMultiple:true});