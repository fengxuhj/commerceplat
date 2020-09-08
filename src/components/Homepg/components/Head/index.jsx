import React, { Component } from 'react';

import {
    NavLink
} from 'react-router-dom'

import './css/index.css'

class index extends Component {
    render() {
        return (
            <header className='header_top'>
                <div className='header_logo'>
                    <img src={require('./img/logo.png')} width='100%' height="100%" alt="" />
                </div>
                <NavLink className="header_search" to="/sousuo">
                    <i className="iconfont icon-sousuo "></i>
                    <span>搜索商品名称</span>
                </NavLink>
                <div className="header_usr">
                    <NavLink to="/my"><i className="iconfont icon-shouye "></i></NavLink>
                </div>
            </header>
        );
    }
}

export default index;