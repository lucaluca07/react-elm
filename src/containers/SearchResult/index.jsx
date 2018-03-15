import React, {Component} from 'react'
import {connect} from 'react-redux'
import SearchHeader from '../../components/SearchHeader'

class SearchResult extends Component{
    constructor(){
        super()
        this.splitSearch = this.splitSearch.bind(this)
    }
    splitSearch(key){
        const search = this.props.location.search.slice(1)
        const obj = {}
        search.split('&').forEach(element => {
            const arr = element.split('=')
            obj[arr[0]] = decodeURI(arr[1])
        });
        return obj[key]
    }

    render(){
        const keyword = this.splitSearch("keyword")
        return(
            <div>
                <SearchHeader value={keyword}/>
            </div>
        )
    }
}

export default connect()(SearchResult)