import React from 'react' ;
import Carousel from 'nuka-carousel' ;
import {sliceArray} from '../../util/sliceArray'
import './style.scss'

const Swiper = ({foodentry}) => {
    const arr = sliceArray(foodentry,10)
    return (
        <Carousel>
                {arr.map((item,index)=>(
                    <div className="carousel-item" key={index}>
                        {item.map((val,index) => (
                            <div key={index} className="item-child">
                                <div className="container">
                                    <img src={val.image_hash} alt={val.description}/>
                                </div>
                                <div className="title">{val.name}</div>
                            </div>
                        ))}
                    </div>
                ))}
      </Carousel>
    ) ;
}

export default Swiper ;