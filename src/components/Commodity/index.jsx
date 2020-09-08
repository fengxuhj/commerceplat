import React, { Component } from 'react';

import './css/index.css'
import {
    Link
} from 'react-router-dom'
import {addNum} from '../../actions/cart.js'
import {connect} from 'react-redux'

@connect(
    state => ({shop:state}),
    {addNum}
)

/*
    接收cartCount功能函数返回的static状态，和接派发事件返回的type类型，可以通过this.props来接收
*/



class index extends Component {
    state = {
        data:{},
        num: 1,
        id: 0,
    }

    componentDidMount(){
        let id = this.props.match.params.shopid
        fetch('http://47.100.98.54:9020/api/buygoods/'+id)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            if(data.id){

                this.setState({
                    data: data,
                    id: data.shopid
                })
            }
        })
        
    }

    addshop(){
        let num = this.state.num
        num ++
        this.setState({
            num
        })
    }

    reduceshop(){
        let num = this.state.num
        num = num?num-1:num

        this.setState({
            num
        })
    }

    PassRedux(){
        let {id, num} = this.state
        let {addNum} = this.props
       
        if(this.state.num){
            // console.log('提交到redux')
            addNum({
                id,
                num
            })
        }
        this.tishi()
    }
    
    tishi(){
        let tishi = document.createElement('div')
        tishi.innerHTML = '<p> 成功加入购物车！ </p>'
        tishi.className = 'tishi'
        let Commodity = document.getElementsByClassName('Commodity')[0];
        Commodity.appendChild(tishi)
        setTimeout(function(){
            Commodity.removeChild(tishi)
        },850)
    }

    render() {
        // console.log(this.props.match.params.shopid)
        // console.log( this.state )
        // console.log(this.props)
        let {picurl,title,des,symbol,price,font} = this.state.data
        return (
            <div className="Commodity">
                <div className="Commodity_pic">
                    <img src={picurl} alt="666" />
                    <div className="Commodity_pic_left">
                        <Link to="/">
                            <i className="iconfont icon-zuojiantou1"></i>
                        </Link>
                    </div>
                    <div className="Commodity_pic_right">
                        <Link to="/">
                            <i className="iconfont icon-fenxiang"></i>
                        </Link>
                    </div>
                </div>

                <div className="Commodity_des">
                    <h3>{title} </h3>
                    <h4> {des} </h4>
                    <p className="money">
                        <span className="symbol">{symbol}</span>
                        <span className="price">{price}</span>
                    </p>
                    <p className="courier">
                        <span className="fr" >快递：包邮 </span>
                        <span className="fr" >库存：100 </span>
                    </p>
                    <div className="buyNum clearFix">
                        <p className="buyfont">购买数量</p>
                            <div className="addNum">
                                <div
                                    className="reduce"
                                    onClick={this.reduceshop.bind(this)}
                                >-</div>
                                <div className="num">{this.state.num}</div>
                                <div 
                                    className="add"
                                    onClick={this.addshop.bind(this)}
                                >+</div>
                        </div>
                    </div>
                    <div className="buy">
                        <a 
                            href="javascript:;"
                            className="addCart"
                            onClick={this.PassRedux.bind(this)}
                          >加入购物车</a>
                        <Link to="/shoppingcat" className="nowBuy">立即购买</Link>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default index;