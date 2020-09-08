import React, { Component } from 'react';

import './css/index.css'

class index extends Component {
    render() {
        return (
            <div className="Hotproduct">
                
                <div className="Hotproduct_Selected">
                    <a href="/"><img src={require("./img/1.jpg")} alt=""/></a>
                </div>
                <ul className="Hotproduct_list">
                    <li><a href="/">
                        <div className="Hotproduct_list_pic">
                            <img src={require("./img/2.jpg")} alt=""/>   
                        </div>
                        <div className="Hotproduct_list_int">
                            <p>小米盒子4c</p>
                            <p>第4代小米盒子存储，双重体验</p>
                            <p>￥199 <span></span></p>
                        </div>
                    </a></li>
                    <li><a href="/">
                        <div className="Hotproduct_list_pic">
                            <img src={require("./img/3.jpg")} alt=""/>   
                        </div>
                        <div className="Hotproduct_list_int">
                            <p>小米路由器 HD/Pro</p>
                            <p>全新一代智能家庭中心</p>
                            <p>￥499 <span>起</span></p>
                        </div>
                    </a></li>
                    <li><a href="/">
                        <div className="Hotproduct_list_pic">
                            <img src={require("./img/5.jpg")} alt=""/>   
                        </div>
                        <div className="Hotproduct_list_int">
                            <p>90分金属登机箱</p>
                            <p>去旅行，趁年轻</p>
                            <p>￥999 <span></span></p>
                        </div>
                    </a></li>
                    <li><a href="/">
                        <div className="Hotproduct_list_pic">
                            <img src={require("./img/4.jpg")} alt=""/>   
                        </div>
                        <div className="Hotproduct_list_int">
                            <p>小米米家电动滑板车</p>
                            <p>便携折叠，自由穿行</p>
                            <p>￥1999 <span></span></p>
                        </div>
                    </a></li>
                    
                </ul>
                <div className="Hotproduct_activity">
                    <a href="/"><img src={require('./img/6.jpg')} alt=""/></a>
                </div>    
            </div>
        );
    }
}

export default index;