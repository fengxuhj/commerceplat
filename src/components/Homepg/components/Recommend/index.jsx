import React, { Component } from 'react';
import './css/index.css'

import {Link} from 'react-router-dom'
class index extends Component {
    render() {
        return (
            <div className="recommend">
                <div className="recommend_left">
                    <Link to={`/shopbuys/17`}><img src={require("./img/1.jpg")} alt=""/></Link>
                </div>
                <div className="recommend_right">
                    <Link to={`/shopbuys/32`}><img src={require("./img/2.jpg")} alt=""/></Link>
                    <Link to={`/shopbuys/24`}><img src={require("./img/3.jpg")} alt=""/></Link>
                </div>
            </div>
        );
    }
}

export default index;