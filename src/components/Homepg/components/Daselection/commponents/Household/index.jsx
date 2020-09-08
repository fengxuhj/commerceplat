import React, { Component } from 'react';

import './css/index.css'
class index extends Component {
    render() {
        return (
            <div className="Household">
                
                <div className="Household_Selected">
                    <a href="/"><img src={require("./img/1.jpg")} alt=""/></a>
                </div>
                <ul className="Household_list">
                    <li><a href="/">
                        <div className="Household_list_pic">
                            <img src={require("./img/2.jpg")} alt=""/>   
                        </div>
                    </a></li>
                    <li><a href="/">
                        <div className="Household_list_int">
                            <p>小米VR一体机</p>
                            <p>超乎寻常的虚拟体验</p>
                            <p>￥1499 <span>起</span></p>
                        </div>
                    </a></li>
                    <li><a href="/">
                        <div className="Household_list_int">
                            <p>米家电水壶 </p>
                            <p>1.5L 大容量，满足多人同时饮水</p>
                            <p>￥99 <span></span></p>
                        </div>
                    </a></li>
                    <li><a href="/">
                        <div className="Household_list_pic">
                            <img src={require("./img/3.jpg")} alt=""/>   
                        </div>
                    </a></li>
                    
                </ul>
                <div className="Household_Moreprdu">
                    <a href="/">
                        <p> 更多米家智能产品 > </p>
                    </a>

                </div>  
            </div>
        );
    }
}

export default index;