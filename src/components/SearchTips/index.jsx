import React,{Component} from 'react'
import './style.scss'

export default class SearchTips extends Component{

    render(){
        const {keyword,restaurants,words,search_word} = this.props
        return(
            <div className="search-tips">
            {restaurants||words
            ?<div className="tips">
                {restaurants.map((val,index) => (<div key={index} className="shop-tips">
                    <img className="shop-img" src="https://fuss10.elemecdn.com/a/a9/e6089ce3150798b80b44cb622ff95png.png?imageMogr/format/webp/thumbnail/48x/" alt="ele"/>
                    <div className="shop-info">
                        <div className="shop-name">
                            <p dangerouslySetInnerHTML={{__html:val.name.split(search_word).join(`<span class="keyword">${search_word}</span>`)}}></p>
                            <span className="tag">减</span>
                        </div>
                        <div className="rate">评价4.8</div>
                    </div>
                </div>))}
                {words.map((val,index) => (<div key={index} className="word-tips">
                    <i className="iconfont icon-sousuoxiao"></i>
                    <p className="word" dangerouslySetInnerHTML={{__html:val.split(search_word).join(`<span class="keyword">${search_word}</span>`)}}></p>
                </div>))
                }
                
            </div>
            :<div className="search-word">
                <i className="iconfont icon-sousuoxiao"></i>
                查找<span className="keyword">“{keyword}“</span></div>
            }
            </div>
        )
    }
}

