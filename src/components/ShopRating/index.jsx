import React,{Component} from 'react'

export default class ShopRating extends Component{

    render(){
        return(
            <div>
                <div>
                    <div>
                        <div>5.0</div>
                        <div>综合评价</div>
                        <div>高于周边商家8.2%</div>
                    </div>
                    <div>
                        <div>服务态度 5.0</div>
                        <div>菜品评价 4.8</div>
                        <div>送达时间 31分钟</div>
                    </div>
                </div>
                <div>头像</div>
                <div>
                    <ul>
                        <li>全部</li>
                        <li>满意</li>
                        <li>不满意</li>
                        <li>有图</li>
                    </ul>
                    <ul>
                        <li>
                            <div></div>
                            <div>
                                <div>用户名</div>
                                <div>4星</div>
                                <div>这是评论</div>
                                <ul>
                                    <li>这是图</li>
                                    <li>这是图</li>
                                    <li>这是图</li>
                                </ul>
                                <ul>
                                    <li>这是商品名</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}