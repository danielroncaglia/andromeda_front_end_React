import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import api from '../../services/api';
import Swal from 'sweetalert2';

export default class RegisterKRinObj extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            TypeValue: null,
            InitialValue: null,
            FinalValue: null,
            Weight: null,
            Owner: "",
            Validated: false
        };
    }

    atualizaEstadoTitle(event) {
        this.setState({ Title: event.target.value });
    }

    atualizaEstadoTypeValue(event) {
        this.setState({ TypeValue: event.target.value });
    }

    atualizaEstadoInitialValue(event) {
        this.setState({ InitialValue: event.target.value });
    }

    atualizaEstadoFinalValue(event) {
        this.setState({ FinalValue: event.target.value });
    }

    atualizaEstadoWeight(event) {
        this.setState({ Weight: event.target.value });
    }

    atualizarEstadoFinalOwner(event) {
        this.setState({ Owner: event.target.value })
    }

    atualizaEstadoUpdateDate(event) {
        this.setState({ UpdateDate: event.target.value });
    }

    RegisterKR(event) {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        this.setState({ Validated: true });
        setTimeout(() => {
            this.setState({
                Title: "",
                TypeValue: null,
                InitialValue: null,
                FinalValue: null,
                Weight: null,
                Owner: "",
                Validated: false
            })
        }, 3000)

        this.setState({ Validated: true });

        let keyresults = {
            title: this.state.Title,
            typeValue: parseInt(this.state.TypeValue),
            initialValue: parseInt(this.state.InitialValue),
            finalValue: parseInt(this.state.FinalValue),
            weight: parseInt(this.state.Weight),
            owner: this.state.Owner.name
        };

        const id = this.props.idobj;

        api.post(`/keyresults/${id}`, keyresults)
            .then(response => {
                let timerInterval
                Swal.fire({
                    title: 'Registering Key Result',
                    html: 'The key result will be registered in <b></b> milliseconds.',
                    timer: (response.data.milliseconds + 1000),
                    timerProgressBar: true,
                    onBeforeOpen: () => {
                        Swal.showLoading()
                        timerInterval = setInterval(() => {
                            Swal.getContent().querySelector('b')
                                .textContent = Swal.getTimerLeft()
                        }, 100)
                    },
                    onClose: () => {
                        clearInterval(timerInterval)
                    }
                })
                this.props.listOKRs()
            })
            .catch(error => console.log("Error: ", error))
    }

    render() {


        return (
            <div className="register_kr"
                style={{ padding: "20px 20px 60px 20px" }}>
                <Form noValidate validated={this.state.Validated} >
                    <Form.Row>
                        <Form.Group as={Col} sm={12}>
                            <Form.Control
                                required
                                value={this.state.Title}
                                onChange={this.atualizaEstadoTitle.bind(this)}
                                placeholder="Key results"
                            />
                        </Form.Group >
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="3">
                            <Form.Control as="select"
                                required
                                value={this.state.TypeValue || ""}
                                onChange={this.atualizaEstadoTypeValue.bind(this)}
                            >
                                <option defaultValue="0">Type of number</option>
                                <option value="1">Percentage (%)</option>
                                <option value="2">Unit (N)</option>
                                <option value="3">Money ($)</option>
                                <option value="4">Others</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Control type="number"
                                required
                                min="0"
                                className="input-date"
                                placeholder="Initial number"
                                value={this.state.InitialValue || ""}
                                onChange={this.atualizaEstadoInitialValue.bind(this)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Control type="number"
                                required
                                min="0"
                                className="input-date"
                                placeholder="Goal number"
                                value={this.state.FinalValue || ""}
                                onChange={this.atualizaEstadoFinalValue.bind(this)} />
                        </Form.Group>
                        <Form.Group as={Col} md="3">
                            <Form.Control as="select"
                                required
                                value={this.state.Weight || ""}
                                onChange={this.atualizaEstadoWeight.bind(this)}
                            >
                                <option defaultValue="0">Weight</option>
                                <option value="1">1/5</option>
                                <option value="2">1/4</option>
                                <option value="3">1/3</option>
                                <option value="4">1/2</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Button variant="info" type="submit" onClick={this.RegisterKR.bind(this)} style={{ backgroundColor: "#0D639D" }}>
                            Register
                        </Button>
                    </Form.Group>
                </Form>
            </div >
        );
    }
}