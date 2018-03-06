import React,{Component} from 'react';
import Header from '../../components/Header'
import SearchInput from '../../components/SearchComponent'

export default class Loaction extends Component{

    render(){
        return(
            <div style={{height:'100%', width:"100%",position:'absolute', backgroundColor:"#f4f4f4"}}>
                <Header title={"选择收货地址"}/>
                <SearchInput/>
            </div>
        )
    }
}