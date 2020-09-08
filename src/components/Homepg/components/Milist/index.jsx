import React, { Component } from 'react';
import './css/indes.css'

import {
    Link
} from 'react-router-dom'
class index extends Component {
    state = {
        data:[],
    }

    componentDidMount(){
        fetch('http://47.100.98.54:9020/api/category')
       .then( res => res.json() )
       .then( data => {
           if(data.status === 200){
                this.setState({
                    data: data.data
                })
                // console.log(this.state.data);
               
           }
       } )
    }

    render() {
        return (
            <div className="milist">
                <ul>
                    {
                        this.state.data.length > 0 && (
                            this.state.data.map((item, key) => {
                            return(
                                <li key={item.id}>
                                    <Link to={`/shopbuys/${item.shopid}`}><img src={item.picurl} alt={item.alt}/></Link>
                                </li>
                            )
                        })
                        )
                    }
                </ul>

            </div>
        );
    }
}

export default index;