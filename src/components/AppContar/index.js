import React, { Component } from 'react';
import Countdown from '../Countdown/index';

class AppContar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div >
                <Countdown date={this.props.date} />
            </div>
        );
    }
}
export default AppContar;