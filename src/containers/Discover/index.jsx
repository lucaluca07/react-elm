import React,{Component} from 'react';
import RatingStar from '../../components/RatingStar'

export default class Discover extends Component{

    render(){
        return(<div>
                discover
                <RatingStar rate={4.5} scale={1}/>
            </div>
        )
    }
}