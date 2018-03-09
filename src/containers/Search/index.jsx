import React,{Component} from 'react'
import {connect} from 'react-redux'
import SearchHeader from '../../components/SearchHeader'
import SearchWord from '../../components/SearchWord'
import {getTypeAhead,getHotSearchWrods} from '../../actions/search'

class Search extends Component{
    constructor(props){
        super(props)
        this.state = {
            showSearchWord:true,
            keyword:""}
        this.handleChange = this.handleChange.bind(this)
    }
    async componentDidMount(){
        const {dispatch,longitude,latitude} = this.props
        dispatch(await getHotSearchWrods(longitude,latitude))
    }
    async handleChange(keyword){
        if(keyword.length === 0){
            this.setState({showSearchWord:true,keyword:keyword})
        }else{
            this.setState({showSearchWord:false,keyword:keyword})
        }
        
        const {dispatch,longitude,latitude} = this.props
        dispatch(await getTypeAhead(keyword, longitude, latitude))
    }
    render(){
        const {hotSearchWords} = this.props
        const {showSearchWord,keyword} = this.state
        // const {restaurants,words,search_word} = typeahead
        return(<div>
                <SearchHeader onChange={this.handleChange}/>
                {showSearchWord
                ?<div>
                    <SearchWord title="热门搜索" data={hotSearchWords}/>
                </div>
                :<div>
                    搜索{keyword}
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