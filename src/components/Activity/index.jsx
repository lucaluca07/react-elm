import React from 'react'
import './style.scss'
import ActivityItem from '../ActivityItem'

const Activity = ({data}) => (

    <div className="activity">
        <ActivityItem title={data.name} color={data.name_color} subTitle={data.description} describe={<div><span style={{color:`#${data.name_color}`}}>{data.more.population}</span>正在抢></div>} img={data.image_hash}/>
        <div style={{flex:"0 0 5px"}}></div>
        <ActivityItem 
            title="品质套餐" 
            subTitle="搭配齐全吃得好" 
            describe={<span 
                style={{color:"#af8260"}}>立即抢购</span>} 
                img="http://fuss10.elemecdn.com/b/e1/0fa0ed514c093a7138b0b9a50d61fpng.png%3FimageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/"/>
    </div>
)

export default Activity