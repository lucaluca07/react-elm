import React from 'react' ;
import Carousel from 'nuka-carousel' ;
import './style.scss'

const Swiper = () => {
    
    return (
        <Carousel>
            <div className="carousel-item">
                {[1,2,3,4,5,6,7,8,9,0].map(val =>(<div key={val} className="item-child">
                    <div className="stone-container"></div>
                    <div className="stone-title"></div>
                </div>))}
            </div>
            <div className="carousel-item">3</div>
      </Carousel>
    ) ;
}

export default Swiper ;