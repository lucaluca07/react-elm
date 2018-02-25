import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import throttle from '../../util/throttle'
import debounce from '../../util/debounce'
import './style.scss'

export default class InfiniteScroll extends Component {
    static propTypes = {
        pageStart: PropTypes.number,
        threshold: PropTypes.number,
        hasMore: PropTypes.bool,
        autoLoad: PropTypes.bool,
        loadNext: PropTypes.func.isRequired,
        spinLoader: PropTypes.element,
        noMore: PropTypes.element
    }

    static defaultProps = {
        pageStart: 0,
        threshold: 200,
        hasMore: false,
        autoLoad: true,
        spinLoader: <div style={{textAlign: 'center', fontSize: 12, lineHeight: 1.5, paddingTop: 10, paddingBottom: 10, clear: 'both'}}>Loading...</div>,
        noMore: null
    }

    constructor(){
        super()
        this.state = {
            loading: false,
            showGoTop:false
        }
        this.showBackTop = this.showBackTop.bind(this)
    }

    componentWillMount () {
        this.page = this.props.pageStart
        //节流
        this.scroller = throttle(this.scrollHandler,100)
        //防抖
        this.finalShowbackTop = debounce(this.showBackTop,50)
        this.autoLoaded = false
    }

    componentDidMount () {
        
        this.attachScrollEvent()
    }

    componentWillUpdate (nextProps, nextState) {
        if (this.props.children.length < nextProps.children.length) {
            this.setState({
                loading: false
            })
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (this.props.children.length > prevProps.children.length) {
            setTimeout(() => {
                this.attachScrollEvent()
            }, 0)
        }
    }

    componentWillUnmount () {
        this.detachScrollEvent()
    }

    calcTop = (element) => {
        if (!element) {
            return 0
        }
        return element.offsetTop + this.calcTop(element.offsetParent)
    }

    scrollHandler = () => {
        let offset
        const el = ReactDOM.findDOMNode(this.refs.loadmore)
        console.log("scroll")
        
        let scrollTop = window.pageYOffset !== undefined ? 
            window.pageYOffset : 
            (document.documentElement || document.body.parentNode || document.body).scrollTop
        offset = this.calcTop(el) + el.offsetHeight - scrollTop - window.innerHeight
        if (offset < Number(this.props.threshold)) {
            
            this.detachScrollEvent()

            if (typeof this.props.loadNext === 'function') {
                this.setState({
                    loading: true
                })
                this.props.loadNext(this.page += 1)
            }
        }
    }

    showBackTop(){
        let scrollTop = window.pageYOffset !== undefined ? 
            window.pageYOffset : 
            (document.documentElement || document.body.parentNode || document.body).scrollTop
        if(scrollTop >= 300){
            this.setState({showGoTop:true})
        }else{
            this.setState({showGoTop:false})
        }
    }

    attachScrollEvent = () => {
        if (!this.props.hasMore) {
            return
        }
      
        window.addEventListener('scroll', this.scroller, false)
        window.addEventListener('resize', this.scroller, false)
        //改变尺寸不会改变scrolltop大小,只需要监听滚动事件即可
        window.addEventListener('scroll', this.finalShowbackTop, false)

        if (this.props.autoLoad && !this.autoLoaded) {
            this.autoLoaded = true
            this.scroller()
        }
    }

    detachScrollEvent = () => {
        window.removeEventListener('scroll', this.scroller, false)
        window.removeEventListener('resize', this.scroller, false)
        window.removeEventListener('scroll', this.finalShowbackTop, false)
    }

    backTop(){
        window.scrollTo(0,0);
    }

    render () {
        const { pageStart, threshold, hasMore, autoLoad, loadNext, spinLoader, noMore, children, ...props} = this.props
        const {showGoTop, loading} = this.state
        console.log(showGoTop)
        return (
            <div {...props}>
                {children}
                {loading && hasMore && <div style={{textAlign: 'center'}}>{spinLoader}</div>}
                {!hasMore && noMore}
                <div ref="loadmore"></div>
                {showGoTop?<div className="back-top" 
                    onClick={this.backTop.bind(this)}
                >top</div>:""}
            </div>
        )
    }
}