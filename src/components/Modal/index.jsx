import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './style.scss'

export default class Modal extends Component{
    static propTypes = {
        displacement: PropTypes.number,
        children: PropTypes.element,
        callback: PropTypes.func,
    }
    static defaultProps = {
        displacement: 100,
        children:<div style={{height:'300px', width:'200px',background:'#fff'}}></div>
    }
    constructor(){
        super()
        this.state = {
            top:0,
            startY:0,
            showTips:false,
            tipsText:"下拉关闭"
        }
        this.handleTouchStart = this.handleTouchStart.bind(this)
        this.handleTouchMove = this.handleTouchMove.bind(this)
        this.handleTouchEnd = this.handleTouchEnd.bind(this)
        this.handleModalClick = this.handleModalClick.bind(this)
        this.handleCotentClick = this.handleCotentClick.bind(this)
    }
    componentDidMount(){
        document.body.style.overflow = "hidden"
        document.getElementsByTagName('body')[0].style.height = window.innerHeight+'px'
    }
    componentWillMount(){
        document.body.style.overflow = "visible"
        document.getElementsByTagName('body')[0].style.height = "auto"
    }
    handleTouchStart(e){
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        console.log("start", e.touches[0].pageY)
        this.setState({startY:e.touches[0].pageY,showTips:true})
    }
    handleTouchMove(e){
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation();
        const {displacement} = this.props
        const startY = this.state.startY
        const moveY = e.touches[0].pageY
        const move = moveY - startY
        if(move > displacement){
            this.setState({tipsText:"释放关闭"})
        }
        this.setState({top:move/2})
    }
    handleTouchEnd(e){
        e.preventDefault();
        e.nativeEvent.stopImmediatePropagation();
        const {callback,displacement} = this.props
        const top = this.state.top
        if(top > displacement){
            callback&&callback()
        }
        this.setState({top:0,showTips:false,tipsText:"下拉关闭"})
    }
    handleModalClick(){
        const {callback} = this.props
        console.log(2222222)
        callback&&callback()
    }
    handleCotentClick(e){
        e.preventDefault()
    }
    
    render(){
        const {top,showTips,tipsText} = this.state
        return(
            <div className="modal" onClick={this.handleModalClick}> 
                <div className="content"
                    ref="content"
                    style={{marginTop:top}}
                    onTouchStart = {this.handleTouchStart}
                    onTouchMove = {this.handleTouchMove}
                    onTouchEnd = {this.handleTouchEnd}
                    onClick={this.handleCotentClick}
                >
                    {showTips&&<div className="tips">{tipsText}</div>}
                    {this.props.children}
                </div>
            </div>
        )
    }
}