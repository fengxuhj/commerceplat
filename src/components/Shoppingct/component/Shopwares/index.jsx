import React, { Component } from 'react';

import './css/index.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {addNum,reduceNum,getNum} from '../../../../actions/cart.js'

@connect(
    state => ({shop:state}),
    {addNum,reduceNum,getNum}
)
//把返回的状态和action的type函数挂载到this.props

class index extends Component {
    state = {
        data: [],
        keys: 0,
        count: 0,
        price: 0,
        
    }

    componentDidMount(){
        let {catCount} = this.props.shop
        let shopid = Object.keys(catCount)
        let arr=[] 
        // console.log(shopid)
        shopid.forEach(item => {
            if( !isNaN(item) ){
                fetch('http://47.100.98.54:9020/api/buygoods/'+item)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    data['num'] = catCount[item]
                    arr.push(data)
                    if(data.shopid){
                        this.setState({
                            data: arr,
                            keys:1,
                        })
                    }
                })
            }  
        })
            
        this.getResoult()
        this.kong()
        
    }
    kong = () => {
        if(!this.state.data.length>0){
            this.setState({
                keys:0
            })
        }
    }
    //增加
    addgood = (index)=> {
        // console.log(index)
        let data = this.state.data
        let id = data[index].shopid
        let {addNum} = this.props
        data[index].num ++
        this.setState({
            data,
        })
        addNum({
            id, 
            num:1,
        })
        this.getResoult()
    }
    //减少
    reducegood = (index)=> {
        // console.log(index)
        let data = this.state.data
        let id = data[index].shopid
        let {addNum} = this.props
        data[index].num = data[index].num?data[index].num-1:data[index].num
        this.setState({
            data
        })
        addNum({
            id, 
            num:-1,
        })
        this.getResoult()
    }
    //删除
    delgood = (index) => {
        let {reduceNum} = this.props
        let data = this.state.data
        let id = data[index]['shopid']
        reduceNum(id)
        data.splice(index,1)

        this.setState({
            data
        })
        this.getResoult()
        this.kong()
    }

    getResoult = () => {
        let timer = setTimeout(()=>{
            clearTimeout(timer)
            this.toprice()
        },200)
    }

    toprice = () => {
        let count = 0
        let price = 0
        let data = this.state.data
        for(let key of data){
            // console.log(key)
            count += key.num
            price += key.num*key.price
        }
        this.setState({
            count,
            price
        })
        let {getNum} = this.props
        getNum({
            num: count,
        })
    }



    render() {
        // console.log( this.props )
        // console.log(this.state.data)
        
        let data = this.state.data
        return (
            <div className="Shopping_wares">
                {
                    this.state.keys?(
                        <ul>
                            {
                                data.length>0 && data.map((item,index) => {
                                    return(
                                    <li key={index}>
                                        <div className="Shopping_wares_pic">
                                            <img src={item.picurl} alt={item.title}/>

                                        </div>

                                        <div className="Shopping_wares_alt">
                                            <p> {item.title} </p>
                                            <p> 售价：<span> {item.price}元 </span> </p>

                                            <div className="Shopping_wares_num">
                                                <div className="wares_num_jia"> 
                                                    <div
                                                        onClick={ this.reducegood.bind(this,index) }
                                                    > - </div>
                                                    <div> {item.num} </div>
                                                    <div
                                                        onClick={ this.addgood.bind(this,index) }
                                                    > + </div>
                                                </div>
                                                <a 
                                                    href="javascript:;"
                                                    onClick={this.delgood.bind(this,index)}
                                                >
                                                    <i className="iconfont icon-shanchu"></i>
                                                </a>
                                            </div>
                                            
                                        </div>
                                    </li>
                                )})
                            }
                        </ul>
                    ):(
                        <div className={"Shopping_wares_kong"}>
                            <Link to="/" className={"kong_a"}>
                                <span className={"kong_a_l"}>购物车还是空的</span>
                                <em className={"kong_a_r"}>去逛逛</em>
                            </Link>
                        </div>
                    ) 
                }

                <div className="ShoppSet">
                    <div className="ShoppSettlement">
                        <div className="ShoppSettlement_foot_jin">
                            <p> 共<span>{this.state.count}</span>件 金额 : </p>
                            <p> {this.state.price} <span>元</span> </p>
                        </div>
                        <div className="ShoppSettlement_foot_jixu">
                        <Link to="/"><p> 继续购买 </p></Link>
                        </div>
                        <div className="ShoppSettlement_foot_jiesu">
                        <a href="javascript:;"><p> 去结算 </p></a>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default index;