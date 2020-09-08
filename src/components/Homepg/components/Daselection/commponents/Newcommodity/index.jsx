import React, { Component } from 'react';

import './css/index.css'
import {Link} from 'react-router-dom'


class index extends Component {
    render() {
        return (
            <div className="Newcomm">
                
                <div className="Newcomm_Selected">
                    <Link to="/"><img src={require("./img/1.jpg")} alt=""/></Link>
                </div>
                <ul className="Newcomm_list">
                    <li><Link to={`/shopbuys/31`}>
                        <div className="Newcomm_list_pic">
                            <img src={require("./img/2.jpg")} alt=""/>   
                        </div>
                        <div className="Newcomm_list_int">
                            <p>米兔儿童书包2</p>
                            <p>校园生活好伴侣</p>
                            <p>￥199 <span>起</span></p>
                        </div>
                    </Link></li>
                    <li><Link to={`/shopbuys/32`}>
                        <div className="Newcomm_list_pic">
                            <img src={require("./img/3.jpg")} alt=""/>   
                        </div>
                        <div className="Newcomm_list_int">
                            <p>小米小爱智能闹钟</p>
                            <p>能听会说的人工智能闹钟</p>
                            <p>￥149 <span></span></p>
                        </div>
                    </Link></li>
                    <li><Link to={`/shopbuys/36`}>
                        <div className="Newcomm_list_pic">
                            <img src={require("./img/5.jpg")} alt=""/>   
                        </div>
                        <div className="Newcomm_list_int">
                            <p>贝医生声波电动牙刷</p>
                            <p>声波净齿，软毛护龈</p>
                            <p>￥99 <span></span></p>
                        </div>
                    </Link></li>
                    <li><Link to={`/shopbuys/34`}>
                        <div className="Newcomm_list_pic">
                            <img src={require("./img/4.jpg")} alt=""/>   
                        </div>
                        <div className="Newcomm_list_int">
                            <p>米家互联网洗烘一体机</p>
                            <p>洗得净、烘得干，一台就够了</p>
                            <p>￥4499 <span></span></p>
                        </div>
                    </Link></li>
                    
                </ul>
                <div className="Newcomm_Moreprdu">
                    <a href="/">
                        <p> 更多新品 > </p>
                    </a>

                </div>
                <div className="Newcomm_activity">
                    <a href="/"><img src={require('./img/6.jpg')} alt=""/></a>
                </div>    
            </div>
        );
    }
}

export default index;