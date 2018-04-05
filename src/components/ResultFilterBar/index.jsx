import React, { Component } from "react";
import CSSModules from 'react-css-modules';
import FilterNav from "../FilterNav";
import AllCategory from "../AllCategory";
import styles from "./style.scss";

class ResultFilterBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFliter: false,
      orderText: "综合排序",
      categoryText: "分类",
      order: 0
    };
    this.handleSetFilterMore = this.handleSetFilterMore.bind(this);
    this.handleHiddenFilter = this.handleHiddenFilter.bind(this);
    this.handleClickCategory = this.handleClickCategory.bind(this);
  }

  handleHiddenFilter() {
    this.setState({ showFliter: false });
    document.body.style.overflow = "visible";
    document.body.style.position = "";
    document.getElementsByTagName("body")[0].style.height = "auto";
  }

  handleCilck(show) {
    const showFliter = this.state.showFliter;
    if (!!showFliter && showFliter === show) {
      this.handleHiddenFilter();
    } else {
      this.setState({ showFliter: show });
      document.body.style.overflow = "hidden";
      document.body.style.position = "relative";
      document.getElementsByTagName("body")[0].style.height =
        window.innerHeight + "px";
    }
  }

  handleSortClick(index) {
    const { onClick } = this.props;
    const orderArr = ["综合排序", "销量最高", "起送价最低", "配送最快"];
    const order = this.state.order;
    this.handleHiddenFilter();
    if (order === index) return;
    this.setState({ orderText: orderArr[index], order: index });
    onClick && onClick(index);
  }

  handleSetFilterMore(delivery, activity, support_ids, cost) {
    this.handleHiddenFilter();
    this.props.setFilterMore(delivery, activity, support_ids, cost);
  }

  handleClickCategory(id, subcategory) {
    // const text = subcategory
    this.handleHiddenFilter();
    // this.setState({categoryText:value})
    this.props.setSubMenuId(id);
  }

  render() {
    const { showFliter, orderText, order, categoryText } = this.state;
    const orderArr = ["综合排序", "销量最高", "起送价最低", "配送最快"];
    const {
      delivery,
      activity,
      support_ids,
      cost,
      category,
      setMainMenuId,
      mainCategoryId,
      subCategoryId
    } = this.props;
    const fliterMore = this.props.filterMore;
    return (
      <div styleName="result-filter-bar">
        <ul styleName="filter">
          <li
            style={{ color: showFliter === "category" ? "#3190e8" : "#333" }}
            onClick={this.handleCilck.bind(this, "category")}
          >
            <span>{categoryText}</span>
            <i className="iconfont icon-sanjiao1" />
          </li>
          <li
            style={{ color: showFliter === "sort" ? "#3190e8" : "#333" }}
            onClick={this.handleCilck.bind(this, "sort")}
          >
            <span>{order === 4 ? "综合排序" : orderText}</span>
            <i className="iconfont icon-sanjiao1" />
          </li>
          <li
            style={{
              color: showFliter === "filter" ? "#3190e8" : "#333",
              fontWeight: showFliter === "filter" ? "bold" : "normal"
            }}
            onClick={this.handleCilck.bind(this, "filter")}
          >
            <span>筛选</span>
            <i className="iconfont icon-shaixuan" />
          </li>
        </ul>
        {!!showFliter && (
          <div styleName="filter-extend">
            {showFliter === "sort" ? (
              <ul styleName="sort-list">
                {orderArr.map((val, index) => (
                  <li
                    key={index}
                    style={{
                      color: index === order ? "#3190e8" : "#333",
                      fontWeight: index === order ? "bold" : "normal"
                    }}
                    onClick={this.handleSortClick.bind(this, index)}
                  >
                    <span>{val}</span>
                  </li>
                ))}
              </ul>
            ) : showFliter === "filter" ? (
              <FilterNav
                fliterMore={fliterMore}
                setFilterMore={this.handleSetFilterMore}
                delivery={delivery}
                activity={activity}
                support_ids={support_ids}
                cost={cost}
              />
            ) : (
              <AllCategory
                category={category}
                setMainMenuId={setMainMenuId}
                setSubMenuId={this.handleClickCategory}
                mainMenuId={mainCategoryId}
                subMenuId={subCategoryId}
              />
            )}
            <div styleName="shade" onClick={this.handleHiddenFilter} />
          </div>
        )}
      </div>
    );
  }
}

export default CSSModules(ResultFilterBar,styles);