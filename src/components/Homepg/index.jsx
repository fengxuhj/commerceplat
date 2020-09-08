import React, { Component } from 'react';

import Head from './components/Head'
import Nav from './components/Nav'
import Banner from './components/banner'
import Milist from './components/Milist'
import Recommend from './components/Recommend'
import Notice from './components/Notice'
import Daselection from './components/Daselection'
import Footetr from './components/Footetr'




class index extends Component {
    render() {
        return (
            <div className="Homepg">
                <Head />
                <Nav />
                <Banner />
                <Milist />
                <Recommend />
                <Notice />
                <Daselection />
                <Footetr />
            </div>
        );
    }
}

export default index;