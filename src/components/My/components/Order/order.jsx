import React, {Component} from "react";

import "./css/index.css"

import {
    Link
} from 'react-router-dom'

class Orders extends Component {
    render() {
        return (
            <div className={"orders"}>
                <p className={"title"}>
                    我的订单
                </p>
                <p className={"all_orders"}>
                    <Link to="/shoppingcat">
                        全部订单
                        <i className={"iconfont icon-youjiantou"}></i>
                    </Link>

                </p>
            </div>
        );
    }
}

export default Orders;