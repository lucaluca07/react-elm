import React,{Component} from 'react'
import {connect} from 'react-redux'
import SearchHeader from '../../components/SearchHeader'
import SearchWord from '../../components/SearchWord'
import SearchTips from '../../components/SearchTips'
import {getTypeAhead,getHotSearchWrods} from '../../actions/search'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            showSearchWord:true,
            keyword:""}
        this.handleChange = this.handleChange.bind(this)
        this.handleEnter = this.handleEnter.bind(this)
    }
    async componentDidMount(){
        const {dispatch,longitude,latitude} = this.props
        dispatch(await getHotSearchWrods(longitude,latitude))
    }
    async handleChange(keyword){
        const {dispatch,longitude,latitude} = this.props
        if(keyword.length === 0){
            this.setState({showSearchWord:true,keyword:keyword})
        }else{
            this.setState({showSearchWord:false,keyword:keyword})
        }
        //防止请求太频繁
        if(!this.time){
            this.time = new Date()
            dispatch(await getTypeAhead(keyword, longitude, latitude))
        }else{
            if(new Date() - this.time > 500){
                this.time = new Date()
                dispatch(await getTypeAhead(keyword, longitude, latitude))
            }
        }  
    }
    handleEnter(keyword){
        this.props.history.push(`/search/shop?keyword=${keyword}`)
    }
    render(){
        const {typeahead,hotSearchWords} = this.props
        const {showSearchWord,keyword} = this.state
        const {restaurants,words,search_word} = typeahead
        return(<div>
                <SearchHeader 
                    onChange={this.handleChange}
                    onEnter={this.handleEnter}/>
                {showSearchWord
                ?<div>
                    <SearchWord title="热门搜索" data={hotSearchWords}/>
                </div>
                :<div>
                    <SearchTips restaurants={restaurants} 
                        words={words} 
                        search_word={search_word} 
                        keyword={keyword}/>
                </div>
                }
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {typeahead, hotSearchWords} = state.search
    const {longitude,latitude} = state.location
    return {
        typeahead,
        hotSearchWords,
        longitude,
        latitude
    }
}
export default connect(mapStateToProps)(Search)