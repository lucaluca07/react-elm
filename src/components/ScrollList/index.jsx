import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import throttle from '../../util/throttle'

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
        spinLoader: <div style={{textAlign: 'center', fontSize: 20, lineHeight: 1.5, paddingTop: 20, paddingBottom: 20, clear: 'both'}}>Loading...</div>,
        noMore: null
    }

    constructor(){
        super()
        this.state = {
            loading: false
        }
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
        console.log(offset)
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

    attachScrollEvent = () => {
        if (!this.props.hasMore) {
            return
        }
      
        window.addEventListener('scroll', this.scroller, false)
        window.addEventListener('resize', this.scroller, false)

        if (this.props.autoLoad && !this.autoLoaded) {
            this.autoLoaded = true
            this.scrollHandler()
        }
    }

    detachScrollEvent = () => {
        window.removeEventListener('scroll', this.scroller, false)
        window.removeEventListener('resize', this.scroller, false)
    }

    componentWillMount () {
        this.page = this.props.pageStart
        this.scroller = throttle(this.scrollHandler,10)
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

    // componentWillUnmount () {
    //     this.detachScrollEvent()
    // }

    render () {
        const { pageStart, threshold, hasMore, autoLoad, loadNext, spinLoader, noMore, children, ...props} = this.props

        props.ref = node => { this.selfComponent = node }

        return (
            <div {...props}>
                {children}
                {this.state.loading && hasMore && <div style={{textAlign: 'center'}}>{spinLoader}</div>}
                {!hasMore && noMore}
                <div ref="loadmore"></div>
            </div>
        )
    }
}