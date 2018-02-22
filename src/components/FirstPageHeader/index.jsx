import React from 'react' ;
import ReactDOM from 'react-dom'
import './style.scss'

class FirstPageHeader extends React.Component {
    constructor(props){
        super(props)
        this.state={searchFixed:false}
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll,10)
        
    }
    handleScroll(){
        const node = ReactDOM.findDOMNode(this.refs.address)
        const {bottom} = node.getBoundingClientRect()
        if(bottom <= 0){
            this.setState({searchFixed:true})
        }
        else{
            this.setState({searchFixed:false})
        }
    }

    render(){
        return(
            <div className="first-page-header">
                <div className="header-address" ref="address">当前地址</div>
                <div className="header-search-input">搜索</div>
                {this.state.searchFixed
                    ?<div className="header-search-input search-fixed">搜索</div>
                    :""
                }

            </div>
        )
    }
    
}

export default FirstPageHeader ;