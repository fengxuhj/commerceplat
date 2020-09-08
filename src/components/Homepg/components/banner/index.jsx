import React, { Component } from 'react';

import Swiper from "swiper"

import './css/index.css'

import {
    Link
} from 'react-router-dom'

class Index extends Component {

    state = {
        data:[],
    }

    play(){
        new Swiper('.swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
            },
            loop : true
           
        })
    }

    componentDidMount(){

       fetch('http://47.100.98.54:9020/api/banner')
       .then( res => res.json() )
       .then( data => {
           if(data.status === 200){
                this.setState({
                    data: data.data
                })
                // console.log(this.state.data);
                this.play();
           }
       } )

    }

    render() {
        return (
            <div className="banner swiper-container">
                <ul className="swiper-wrapper">

                    {
                        this.state.data.length > 0 && (
                            this.state.data.map((item, key) => {
                            return(
                                <li className="swiper-slide" key={item.id}>
                                    <Link to={`/shopbuys/${item.shopid}`}><img src={item.picurl} alt={item.alt} /></Link>
                                </li>
                            )
                        })
                        )
                    }

                </ul> 

                <div className="swiper-pagination"></div>
            </div>
        );
    }
}

export default Index;