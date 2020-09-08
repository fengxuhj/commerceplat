import React, { Component } from 'react';

import {
    NavLink
} from 'react-router-dom'

import  './css/index.css'
import Recomm from './component/Recommend'
import Shopwares from './component/Shopwares'
import {connect} from 'react-redux'

@connect(
    state => ({shop:state}),
    {}
)

class index extends Component {
    state = {
        data: [],
    }

    componentDidMount(){
        this.setState({
            data: this.props.shop.catCount
        })
    }


    render() {
        // console.log(this.props.shop)
        // console.log(this.state)
        return (
            <div className="Shopping">

                <div className="Shopping_head">
                    <NavLink exact to="/">
                        <i className="iconfont icon-zuojiantou1"></i>
                    </NavLink>
                    <p> 购物车 </p>
                    <NavLink to="/sousuo">
                        <i className="iconfont icon-sousuo"></i>
                    </NavLink>
                </div>

                <div className="Shopping_land">
                    <p> 登陆后享受更多优惠 </p>

                    <NavLink className="Shopping_goland" to="/my">
                        <span> 去登陆 </span>
                        <i className="iconfont icon-youjiantou"></i>
                    </NavLink>
                </div>

                <Shopwares />

                <div className="Shopping_hint">
                    温馨提示 : 商品是否购买成功 , 以最终下单为准 , 请尽快结算
                </div>

                <div className="Shopping_hobby">
                    <img src={require("./img/2.jpg")} alt="" />
                </div>

                <Recomm />
            </div>
        );
    }
}

export default index;