import React, { Component } from 'react';

import {
    HashRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'


import Homepg from './components/Homepg'
import Shoppingct from './components/Shoppingct'
import My from './components/My'
import Classification from './components/Classification'
import Commodity from './components/Commodity'
import Sousuo from './components/Sousuo'
import Not404 from './components/Not404'



class App extends Component {

    render() {
        return (
            
                <Router basename={'xiaomi'}>
                    <div className="APP">
                        <Switch>
                            <Route exact path='/' component={Homepg} />
                            <Route  path='/sousuo' component={Sousuo} />
                            <Route  path='/bMap' component={Classification} />
                            <Route  path='/shopbuys/:shopid' component={Commodity} />
                            <Route  path='/shoppingcat' component={Shoppingct} />
                            <Route  path='/my' component={My} />
                            <Route  path='*' component={Not404} />
                            
                        </Switch>

                        {/* <Footetr /> */}
                        
                    </div>
                </Router>


               
        );
    }
}

export default App;