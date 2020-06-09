import React, { Component } from "react";
import { connect } from "react-redux";
import SearchHeader from "../../components/SearchHeader";
import SearchWord from "../../components/SearchWord";
import SearchTips from "../../components/SearchTips";
import { getTypeAhead, getHotSearchWrods } from "../../actions/search";
import { setItem, getItem } from "../../util/localstorage";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchWord: true,
      keyword: this.splitSearch("keyword") || "",
      historySearch: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.splitSearch = this.splitSearch.bind(this);
    this.clearHistorySearch = this.clearHistorySearch.bind(this);
  }

  async componentDidMount() {
    const { dispatch, longitude, latitude } = this.props;
    const historySearch = getItem("searchWord");
    const wordArr = historySearch && historySearch.split("&&");
    wordArr && wordArr.splice(-1, 1);
    const keyword = this.state.keyword;
    dispatch(await getHotSearchWrods(longitude, latitude));
    if (keyword) {
      this.setState({ showSearchWord: false, keyword: keyword });
      dispatch(await getTypeAhead(keyword, longitude, latitude));
    }
    this.setState({ historySearch: wordArr });
  }

  async handleChange(keyword) {
    const { dispatch, longitude, latitude } = this.props;
    if (keyword.length === 0) {
      this.setState({ showSearchWord: true, keyword: keyword });
    } else {
      this.setState({ showSearchWord: false, keyword: keyword });
    }
    //防止请求太频繁
    if (!this.time) {
      this.time = new Date();
      dispatch(await getTypeAhead(keyword, longitude, latitude));
    } else {
      if (new Date() - this.time > 500) {
        this.time = new Date();
        dispatch(await getTypeAhead(keyword, longitude, latitude));
      }
    }
  }

  handleEnter(keyword) {
    this.props.history.push(`/search/shop?keyword=${keyword}`);
    const historySearch = (getItem("searchWord") || "")
      .split(`${keyword}&&`)
      .join("");
    const searchWord = `${keyword}&&${`${historySearch}`}`;
    setItem("searchWord", searchWord);
  }

  clearHistorySearch() {
    setItem("searchWord", "");
    this.setState({ historySearch: false });
  }

  splitSearch(key) {
    const search = this.props.location.search.slice(1);
    const obj = {};
    search.split("&").forEach(element => {
      const arr = element.split("=");
      obj[arr[0]] = decodeURI(arr[1]);
    });
    return obj[key];
  }

  render() {
    const { typeahead, hotSearchWords } = this.props;
    const { showSearchWord, keyword, historySearch } = this.state;
    const { restaurants, words, search_word } = typeahead;
    return (
      <div style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        background: "#fff"
      }}>
        <SearchHeader
          onChange={this.handleChange}
          onEnter={this.handleEnter}
          value={keyword}
        />
        {showSearchWord ? (
          <div>
            {historySearch && (
              <SearchWord
                title="搜索历史"
                onDelClick={this.clearHistorySearch}
                onWordClick={this.handleEnter}
                data={historySearch}
                del={true}
              />
            )}
            <SearchWord
              title="热门搜索"
              onWordClick={this.handleEnter}
              data={hotSearchWords}
            />
          </div>
        ) : (
          <div>
            <SearchTips
              restaurants={restaurants}
              words={words}
              search_word={search_word}
              keyword={keyword}
              onClick={this.handleEnter}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { typeahead, hotSearchWords } = state.search;
  const { longitude, latitude } = state.location;
  return {
    typeahead,
    hotSearchWords,
    longitude,
    latitude
  };
};
export default connect(mapStateToProps)(Search);
