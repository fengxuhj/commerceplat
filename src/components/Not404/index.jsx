import React, { Component } from 'react';

import './css/index.css'

class index extends Component {
    render() {
        return (
            <div className={'container'}>
                <img src={require("./img/1.jpg")} alt="404"/>
                <p className={'sorry'}> 咦~页面不见了~ </p>
                <p className="goto">
                    <a href="/" > 返回首页 </a>
                </p>
            </div>
        );
    }
}

export default index;