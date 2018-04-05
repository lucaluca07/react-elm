import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss'

class UserInfo extends Component{

    render(){
        return(
            <div>
                <div></div>
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>
            </div>
        )
    }
}

export default CSSModules(UserInfo,styles,{allowMultiple:true});