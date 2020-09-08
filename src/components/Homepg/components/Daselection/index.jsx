import React, { Component } from 'react';

import Mobile from './commponents/Mobile'
import Television from './commponents/Television'
import Notbook from './commponents/Notbook'
import Hotproduct from './commponents/Hotproduct'
import Newcomm from './commponents/Newcommodity'
import Household from './commponents/Household'
import Block from './commponents/Block'


class index extends Component {
    render() {
        return (
            <div>
                <Mobile />
                <Television />
                <Notbook />
                <Hotproduct />
                <Newcomm />
                <Household />
                <Block />
            </div>
        );
    }
}

export default index;