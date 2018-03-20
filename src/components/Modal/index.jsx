import React,{Component} from 'react'
import './style.scss'

export default class Modal extends Component{
    constructor(){
        super()
        this.state = {top:0}
    }
    handleTouchStart(e){
        e.preventDefault();
        console.log("start", e.touches[0].pageY)
    }
    handleTouchMove(e){
        e.preventDefault();
        console.log("move",e.touches[0].pageY)
    }
    handleTouchEnd(e){
        e.preventDefault();
        console.log("end")
    }
    render(){
        const top = this.state.top
        return(
            <div className="modal">
                <div className="content"
                    style={{marginTop:top}}
                    onTouchStart = {this.handleTouchStart}
                    onTouchMove = {this.handleTouchMove}
                    onTouchEnd = {this.handleTouchEnd}
                ></div>
            </div>
        )
    }
}