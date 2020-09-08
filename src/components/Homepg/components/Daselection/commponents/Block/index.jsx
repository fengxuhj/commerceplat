import React, { Component } from 'react';

import './css/index.css'
import {Link} from 'react-router-dom'

class index extends Component {
    render() {
        return (
            <div className="Block">
                <ul className="Block_list">
                    <li><Link to={`/shopbuys/42`}>
                        <div className="Block_list_pic">
                            <img src={require("./img/1.png")} alt=""/>   
                        </div>
                        
                    </Link></li>
                    <li><Link to={`/shopbuys/41`}>
                        <div className="Block_list_pic">
                            <img src={require("./img/2.jpg")} alt=""/>   
                        </div>
                        
                    </Link></li>
                    <li><Link to={`/shopbuys/39`}>
                        <div className="Block_list_pic">
                            <img src={require("./img/3.jpg")} alt=""/>   
                        </div>
                       
                    </Link></li>
                    <li><Link to={`/shopbuys/38`}>
                        <div className="Block_list_pic">
                            <img src={require("./img/4.jpg")} alt=""/>   
                        </div>
                       
                    </Link></li>
                    
                </ul>
                <div className="Block_activity">
                    <Link to="/"><img src={require('./img/5.jpg')} alt="小米"/></Link>
                </div>  

                <div className="Block_Moreprdu">
                    <a href="/">
                        <p> 了解小米 </p>
                    </a>
                </div> 
            </div>
        );
    }
}

export default index;
