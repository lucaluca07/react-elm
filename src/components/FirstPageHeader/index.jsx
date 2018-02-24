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
    componentWillUnmount(){
        window.removeEventListener('scroll',this.handleScroll)
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
    handleClick(){
        console.log("Click")
    }
    render(){
        const searchFixed = this.state.searchFixed
        return(
            <div className="first-page-header">
                <div className="header-address" ref="address">当前地址</div>
                {searchFixed
                    ?<div className="header-search-input"></div>
                    :""}
                <div className={`header-search-input ${searchFixed?"search-fixed":""}`}
                    onClick={this.handleClick.bind(this)}
                >搜索</div>
                

            </div>
        )
    }
    
}

export default FirstPageHeader ;