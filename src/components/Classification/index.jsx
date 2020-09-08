import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';

import './css/index.css'

class index extends Component {

    componentDidMount(){
        let {BMap,BMAP_STATUS_SUCCESS} = window
        let map = new BMap.Map("allmap");
        let point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(point,12);

        let geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                let pt = r.point;
                let mk = new BMap.Marker(pt);
                map.addOverlay(mk);
                map.panTo(pt);
                // alert('您的位置：'+r.point.lng+','+r.point.lat);

                let geoc = new BMap.Geocoder(); 
                
                geoc.getLocation(pt, function(rs){
                    var addComp = rs.addressComponents;
                    alert(addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber);
		});

            }
            else {
                alert('failed'+this.getStatus());
            }        
        },{enableHighAccuracy: true})
               

    }

    render() {
        return (
            <div className="bMap">
                <div className="bhead">
                    <div className="bMap_head">
                        <NavLink exact to="/">
                            <i className="iconfont icon-zuojiantou1"></i>
                        </NavLink>
                        <p> 地图 </p>
                        <NavLink to="/sousuo">
                            <i className="iconfont icon-sousuo"></i>
                        </NavLink>
                    </div>
                </div>

                <div id={"allmap"}></div>
            </div>
        )
    }
}

export default index;