import React, { Component } from 'react';

import './css/index.css'
import {Link} from 'react-router-dom'


class index extends Component {
    state = {
        data:[],
    }

    componentDidMount(){
        fetch("http://47.100.98.54:9020/api/goods")
        .then(res => res.json())
        .then(data => {
            if( data.status === 200 ){
                let arr = [];

                for( var i=14; i<20; i++  ){
                    arr.push( data.data[i] ) 
                }

                this.setState({
                    data: arr
                })
            }
        })
    }

    render() {
        return (
            <div className="Notbook">
                
                <div className="Notbook_Selected">
                    <Link to="/"><img src={require("./img/1.jpg")} alt=""/></Link>
                </div>
                <ul className="Notbook_list">

                    {
                        this.state.data.length > 0 && (
                            this.state.data.map(item => {
                                return(
                                    <li key={item.id}><Link to={`/shopbuys/${item.shopid}`}>
                                        <div className="Notbook_list_pic">
                                            <img src={item.picurl} alt=""/>   
                                        </div>
                                        <div className="Notbook_list_int">
                                            <p>{item.title}</p>
                                            <p>{item.des}</p>
                                            <p>￥{item.price} <span>{item.font}</span></p>
                                        </div>
                                    </Link></li>
                                )
                            })
                            )
                    }
                    
                </ul>
                <div className="Notbook_Moreprdu">
                    <Link to="/">
                        <p> 更多小米笔记本产品 > </p>
                    </Link>

                </div>
                <div className="Notbook_activity">
                    <Link to="/"><img src={require('./img/6.jpg')} alt="笔记本"/></Link>
                </div>    
            </div>
        );
    }
}

export default index;