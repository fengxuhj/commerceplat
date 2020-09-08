import React, { Component } from 'react';

import './css/index.css'

import {Link} from 'react-router-dom'
class index extends Component {
    state = {
        data:[],
    }

    componentDidMount(){
        fetch('http://47.100.98.54:9020/api/conference')
       .then( res => res.json() )
       .then( data => {
           if(data.status === 200){
                this.setState({
                    data: data.data
                })
                // console.log(this.state.data.picurl);
               
           }
       } )
    }

    render() {
        let {shopid,picurl,alt} = this.state.data
        return (
            <div className="Notic">
            {
                 
                <Link to={`/shopbuys/${shopid}`}><img src={picurl} alt={alt}/></Link>
               
            }
                
            </div>
        );
    }
}

export default index;