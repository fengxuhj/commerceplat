import React, {Component} from "react";

import "./css/index.css"

import Head from "./components/Head/head"
import Orders from "./components/Order/order";
import OrderNav from "./components/Ordernav/ordernav";
import Spacing from "./components/Spacing/spacing";
import Footetr from "./components/Footetr";



class My extends Component {
    render() {
        return (
            <div className="My">
                <Head />
                <Orders/>
                <OrderNav/>
                <Spacing />
                <Footetr />
            </div>
        );
    }
}

export default My;