import React, { Component } from 'react';

import "./css/index.css"
import {Link} from 'react-router-dom'

class index extends Component {
    state = {
        data: [],
    }
    componentDidMount(){
        this.getData()
        
    }

    getData = () => {
        let arr = []
        fetch('http://47.100.98.54:9020/api/buygoods/36')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.shopid){
                arr.push(data)
            }
        })
        fetch('http://47.100.98.54:9020/api/buygoods/38')
        .then(res => res.json())
        .then(data => {
            if(data.shopid){
                arr.push(data)
            }
        })
        fetch('http://47.100.98.54:9020/api/buygoods/37')
        .then(res => res.json())
        .then(data => {
            if(data.shopid){
                arr.push(data)
            }
        })
        fetch('http://47.100.98.54:9020/api/buygoods/40')
        .then(res => res.json())
        .then(data => {
            if(data.shopid){
                arr.push(data)
            }
        })
        // console.log(arr)
        this.setState({
            data: arr,
        })
    }

    render() {
        // console.log(this.state.data)
        return (
            <div className="recomm">
                <ul>
                    {
                        this.state.data.map(item => {
                            return(
                                <Link to ={`/shopbuys/${item.shopid}`} key={item.id}>
                                    <li>
                                        <img src={item.picurl} alt=""/>

                                        <div className="recomm_pip">
                                            <p> {item.title} </p>
                                            <p> ￥{item.price} </p>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })
                    }
                    
                </ul>
            </div>
        );
    }
}

export default index;