import React from "react";
import "./style.scss";
import ShopActivityList from "../ShopActivityList";

class ShopActivity extends React.Component {
  constructor() {
    super();
    this.state = { showMore: false };
  }
  toggleShowMore(e) {
    e.preventDefault();
    const showMore = this.state.showMore;
    this.setState({ showMore: !showMore });
  }

  render() {
    const activityList = this.props.activities;
    const showMore = this.state.showMore;
    const recommend = this.props.recommend;
    return (
      <div className="shop-activity">
        <div className="activity-left" />
        <div className="activity-right">
          <div className="tag-line">
            {!recommend.is_ad && recommend.reason ? (
              <div className="tag-container">
                <img
                  src="http://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/format/webp/thumbnail/!60x60r/gravity/Center/crop/60x60/"
                  alt="tag"
                />
                <span>{recommend.reason}</span>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="activities">
            <div className="activity-list">
              {showMore ? (
                <ShopActivityList data={activityList} />
              ) : (
                <ShopActivityList data={activityList.slice(0, 2)} />
              )}
            </div>
            {activityList.length > 2 ? (
              <div
                className="activityBtn"
                onClick={this.toggleShowMore.bind(this)}
              >
                <div>
                  <span>{activityList.length}个活动</span>
                  <i
                    className={`iconfont icon-sanjiao1 ${
                      showMore ? "rotate180" : "rotate0"
                    }`}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ShopActivity;
