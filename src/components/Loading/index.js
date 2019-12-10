import React, { Component, useState } from 'react';

import { Spinner } from 'react-bootstrap';

export default class Loading extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            isLoading: this.props.show            
        }
    }

    render() {
        if(!this.state.isLoading){
            return null;
        }

        return (
            <div>
                <p>Loading...</p>
                <Spinner animation="border" role="status" />
            </div>
        );
    }
}
