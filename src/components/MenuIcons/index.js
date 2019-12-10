import React, { Component } from 'react';

import UpdateIcon from 'react-ionicons/lib/MdCreate';
import DeleteIcon from 'react-ionicons/lib/MdTrash';

export default class MenuIcons extends Component {
    
    constructor(props){
        super(props);
    }
    
    render() {
        if(!this.props.show){
            return null
        }

        return (
            <>
                <UpdateIcon
                    className="icon"
                    color='#0d639d'
                    fontSize="26px"
                    // onClick={() => {
                    //     this.props.statusMenu()
                    //     this.props.teste(item)
                    // }}
                />
                <span className="tooltip">Update</span>

                <DeleteIcon
                    color='#cc3029'
                    className="icon"
                    fontSize="26px"
                    onClick={() => this.props.removeObj(this.props.idObj)}
                />
                <span className="tooltip">Delete</span>
            </>
        );
    }
}
