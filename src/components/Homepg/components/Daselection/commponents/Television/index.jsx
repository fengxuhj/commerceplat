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

                for( var i=8; i<14; i++  ){
                    arr.push( data.data[i] ) 
                }

                this.setState({
                    data: arr
                })
                // console.log(this.state.data)
            }
        })
    }


    render() {
        return (
            <div className="Television">
                
                <div className="Television_Selected">
                    <Link to="/"><img src={require("./img/1.jpg")} alt="电视机"/></Link>
                </div>
                <ul className="Television_list">

                    {
                        this.state.data.length > 0 && (
                            this.state.data.map(item => {
                                return(
                                    <li key={item.id}><Link to={`/shopbuys/${item.shopid}`}>
                                        <div className="Television_list_pic">
                                            <img src={item.picurl} alt=""/>   
                                        </div>
                                        <div className="Television_list_int">
                                            <p>{item.title}</p>
                                            <p>{item.des}</p>
                                            <p>￥{item.price} <span>￥{Number(item.price)+200}</span></p>
                                        </div>
                                    </Link></li>
                                )
                            })
                        )
                    }
                    
                    
                </ul>
                <div className="Television_Moreprdu">
                    <Link to="/">
                        <p> 更多小米电视产品 > </p>
                    </Link>

                </div>
                <div className="Television_activity">
                    <Link to="/"><img src={require('./img/6.jpg')} alt="电视机"/></Link>
                </div>    
            </div>
        );
    }
}

export default index;