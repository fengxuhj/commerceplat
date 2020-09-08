import React, { Component } from 'react';

import {
    NavLink
}from 'react-router-dom'
import './css/index.css'
import {connect} from 'react-redux'

@connect(
    state => ({shop:state}),
    {}
)

class index extends Component {
    render() {
        let num = this.props.shop.catCount.num || false

        return (
            <div className="foot_one">
                <footer className="foot_bot">
                    <div className="footd ">
                        <NavLink to="/">
                            <i className="iconfont icon-shouye1"></i>
                            <span> 首页 </span>
                        </NavLink>
                    </div>
                    <div className="footd ">
                        <NavLink to="/bMap">
                            <i className="iconfont icon-ditu"></i>
                            <span> 地图 </span>
                        </NavLink>
                        
                    </div>
                    <div className="footd  ">
                        <NavLink to="/shoppingcat">
                            <i className="iconfont icon-gouwuche">
                                <em>{num}</em>
                            </i>
                            <span> 购物车 </span>
                        </NavLink>
                    
                    </div>
                    <div className="footd ">
                        <NavLink to="/my">
                            <i className="iconfont icon-shouye"></i>
                            <span> 我的 </span>
                        </NavLink>
                        
                    </div>
                </footer>
            </div>
        );
    }
}

export default index;