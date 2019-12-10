import React, { Component } from 'react';
import Toolbars from '../../components/Toolbars/index';
import RegisterObjective from '../../components/RegisterObjective/index';
import ListOKR from '../../components/ListOKR/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './OKRs.css';
import api from '../../services/api';
import MenuRightSide from '../../components/MenuRightSide/index.js';

export default class OKR extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);

        this.state = {
            Objectvies: [],
            showMenu: false,
            selectedItem: {}
        }
    }

    render() {

        const listObjs = () => {
            api.get("/objectives")
                .then(response => this.setState({ Objectvies: response.data }))
                .catch(erro => console.log(erro))
        };

        const alterStatusMenu = (obj) => {
            console.log('obj', obj)
            this.setState({ showMenu: !this.state.showMenu }, () => {
                this.setState({ selectedItem: obj })
            });
        }

        const selectItem = (obj) => {
            
            this.setState({ selectedItem: obj });
        }

        return (
            <div>
                <header>
                    <div>
                        <Toolbars />
                    </div>
                </header>
                {this.state.selectedItem !== {}  && <MenuRightSide show={this.state.showMenu} className="fadeIn" obj={this.state.selectedItem} /> }
                <div>
                    <RegisterObjective listFnc={listObjs} />

                    <div>
                        <ListOKR listObjs={this.state.Objectvies} listFnc={listObjs} statusMenu={alterStatusMenu} teste={selectItem} />
                    </div>
                </div>
            </div>
        );
    }
}