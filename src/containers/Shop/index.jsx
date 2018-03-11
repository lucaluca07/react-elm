import React,{Component} from 'react';
import Header from '../../components/Header'
import FilterBar from '../../components/FilterBar'

export default class Shop extends Component{

    componentDidMount(){
        
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
        const targetName = this.splitSearch('target_name')
        return(<div>
                <Header title={targetName}/>
                <FilterBar/>
            </div>
        )
    }
}