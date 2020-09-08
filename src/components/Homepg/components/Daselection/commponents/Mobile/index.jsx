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

                for( var i=0; i<6; i++  ){
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
            <div className="Mobile">

            <div className="Mobile_Selected">
                <Link to="/"><img src={require("./img/1.jpg")} alt="手机"/></Link>
            </div>
                <ul className="Mobile_list">

                    {
                        this.state.data.length > 0 && (
                            this.state.data.map(item => {
                                return(
                                    <li key={item.id}><Link to={`/shopbuys/${item.shopid}`}>
                                        <div className="Mobile_list_pic">
                                            <img src={item.picurl} alt=""/>   
                                        </div>
                                        <div className="Mobile_list_int">
                                            <p> {item.title} </p>
                                            <p> {item.des} </p>
                                            <p>￥{item.price} <span>{item.font}</span></p>
                                        </div>
                                    </Link></li>
                                )
                            })
                            )
                    }

                </ul>
                <div className="Mobile_activity">
                    <Link to="/"><img src={require('./img/6.jpg')} alt="手机"/></Link>
                </div>    
            </div>
        );
    }
}

export default index;