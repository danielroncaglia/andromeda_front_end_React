import React, { Component } from 'react';
import Toolbars from '../../components/Toolbars/index';
import SearchIcon from 'react-ionicons/lib/MdSearch';
import { InputGroup, Card, Form, Spinner } from "react-bootstrap";
import api from '../../services/api';
import moment from 'moment';
import './Search.css';

export default class SearchPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            objsList: [],
            search: "",
            filteredList: [],
            loading: false
        }
    }

    componentDidMount() {
        this.listSearch();
    }


    listSearch() {
        this.setState({ loading: true });
        api.get('/objectives')
            .then(response => {
                this.setState({ objsList: response.data })
                this.setState({ filteredList: response.data })
                this.setState({ loading: false })
            })
            .catch(error => console.log(error))
    }

    filterSearch() {
        let filtered = this.state.objsList.filter(x =>
            x.title.toLowerCase().includes(this.state.search.toLowerCase()) || x.owner.name.toLowerCase().includes(this.state.search.toLowerCase())
        );


        if (filtered.length > 0)
            this.setState({ filteredList: filtered });
        else
            this.setState({ filteredList: this.state.objsList });
    }

    uptadeSearch(event) {
        this.setState({ search: event.target.value }, () => {
            this.filterSearch();
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Toolbars />
                </div>
                <div className="search search__input__search">
                    <Form>
                        <Form.Group md="4" className="mb-5">
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="inputGroupPrepend"><SearchIcon /></InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type="text"
                                    placeholder="Buscar objetivo por título ou dono"
                                    value={this.state.search} onChange={this.uptadeSearch.bind(this)}
                                    className=""
                                />
                                <Form.Control.Feedback type="invalid">
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Form>

                    <div className="d-flex flex-column align-items-center">
                        {
                            this.state.filteredList.map((item) => {
                                return (
                                    <Card className="objs mb-3">
                                        <Card.Body className="search__card__list">
                                            <div>
                                                {item.title}
                                            </div>
                                            <div>
                                                {item.owner.name}
                                            </div>
                                            <div>
                                                {item.company.name}
                                            </div>
                                            <div>
                                                {moment(item.finalDate).format("DD/MM/YYYY").split("T00:00:00")}
                                            </div>
                                        </Card.Body>
                                    </Card>
                                );
                            })
                        }
                        {/* <Loading
                            style={{
                                display: (this.state.loading) ? "block" : "none"
                            }}
                            type="spin"
                            color={'#CC3029'}
                            className="search__animation__loading"
                        /> */}
                        <Spinner 
                            animation="border"
                            size="lg"
                            role="status" 
                            style={{
                                display: (this.state.loading) ? "block" : "none"
                            }}
                        >
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                </div>
            </div>
        );
    }
}
