import React, { Component } from 'react';
import{
    NavLink
} from 'react-router-dom'

import './css/index.css'
class index extends Component {
    render() {
        return (
            <div className="Search">
                <div className="Search_head">
                    <NavLink to="/">
                        <i className="iconfont icon-zuojiantou1"></i>
                    </NavLink>
                    <div className="Search_head_sou">
                        <span> 搜索功能仅供测试没有数据接口 </span>
                    </div>
                    <a href="javascript:;">
                        <i className="iconfont icon-sousuo"></i>
                    </a>
                </div>

                <div className="Search_hot">
                    <h3> 热门搜索 </h3>
                    <div className="Search_hot_pic">
                        <img src={require("./img/1.jpg")} alt="热门搜索" />
                    </div>
                    <div className="Search_hot_list">
                        <p>
                            <span>红米Note 7</span>
                            <span>小米年年货节</span>
                            <span>净水滤芯免费领</span>
                        </p>
                        <p>
                            <span>米家台灯Pro</span>
                            <span>小米盒子4 SE套装版</span>
                            <span>小米8</span>
                        </p>
                        <p>
                            <span>小米MIX 3</span>
                        </p>
                    </div>
                    <div className="Search_fen">
                    <p>
                            <span>手机</span>
                            <span>电视</span>
                            <span>笔记本</span>
                            <span>盒子</span>
                            <span>路由器</span>
                            <span>手环</span>
                            <span>平板</span>
                        </p>
                        <p>
                            <span>手表</span>
                            <span>投影</span>
                            <span>VR</span>
                            <span>穿戴</span>
                            <span>影音</span>
                            <span>空气净化器</span>
                            <span>耳机</span>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default index;