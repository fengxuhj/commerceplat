import React, {Component} from "react";

import "./css/index.css"
import {
    Link
} from 'react-router-dom'

class OrderNav extends Component {
    render() {
        return (
            <div className={"order_nav"}>
                <ul>
                    <li>
                        <Link to="/shoppingcat">
                            <div className={"icon"}>
                                <img src={require("./img/nav_01.png")} alt="nav"/>
                                <p>待付款</p>
                            </div>
                            
                        </Link>
                    </li>
                    <li>
                        <Link to="/shoppingcat">
                            <div className={"icon"}>
                                <img src={require("./img/nav_02.png")} alt="nav"/>
                                <p>待收货</p>
                            </div>
                           
                        </Link>
                    </li>
                    <li>
                        <Link to="/">
                            <div className={"icon"}>
                                <img src={require("./img/nav_03.png")} alt="nav"/>
                                <p>退换修</p>
                            </div>
                            
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default OrderNav;