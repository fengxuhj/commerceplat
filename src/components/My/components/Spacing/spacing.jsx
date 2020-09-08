import React, {Component} from "react";

import "./css/index.css"

import {
    Link
} from 'react-router-dom'

class Spacing extends Component {
    render() {
        return (
            <div className={"spacing"}>

                 <ul className={"spacing_items"}>
                    <li className={"items_list"}>
                        <Link to="/">
                            <p> 会员中心 </p>
                            <i className={"iconfont icon-youjiantou"}></i>
                        </Link>
                    </li>
                    <li className={"items_list"}>
                        <Link to="/">
                            <p> 我的优惠 </p>
                            <i className={"iconfont icon-youjiantou"}></i>
                        </Link>
                    </li>
                    <li className={"items_list"}>
                        <Link to="/">
                            <p> 服务中心 </p>
                            <i className={"iconfont icon-youjiantou"}></i>
                        </Link>
                    </li>
                    <li className={"items_list"}>
                        <Link to="/">
                            <p> 小米之家 </p>
                            <i className={"iconfont icon-youjiantou"}></i>
                        </Link>
                    </li>
                    <li className={"items_list"}>
                        <Link to="/">
                            <p> F码通道 </p>
                            <i className={"iconfont icon-youjiantou"}></i>
                        </Link>
                    </li>
                    <li className={"items_list"}>
                        <Link to="/">
                            <p> 设置 </p>
                            <i className={"iconfont icon-youjiantou"}></i>
                        </Link>
                    </li>
                </ul>

                <div className={"s_bottom"}></div> 
            </div>
        );
    }
}

export default Spacing;