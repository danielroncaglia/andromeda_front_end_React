import React, { Component } from 'react';
import api from '../../services/api';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';

export default class RegisterObjective extends Component {

    constructor() {
        super();
        this.state = {
            Title: "",
            Priority: null,
            Term: null,
            Type: null,
            FinalDate: "",
            Validated: false,
            timeFunction: null
        };
    }

    atualizaEstadoTitle(event) {
        this.setState({ Title: event.target.value });
    }

    atualizaEstadoPriority(event) {
        this.setState({ Priority: event.target.value });
    }

    atualizaEstadoTerm(event) {
        this.setState({ Term: event.target.value });
    }

    atualizaEstadoType(event) {
        this.setState({ Type: event.target.value });
    }

    atualizaEstadoFinalDate(event) {
        this.setState({ FinalDate: event.target.value });
    }

    RegisterObjective(event) {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        this.setState({ Validated: true });
        setTimeout(() => {
            this.setState({
                Validated: false,
                Title: "",
                Priority: null,
                Term: null,
                Type: null,
                FinalDate: ""
            })
        }, 3000)

        this.setState({ Validated: true });

        let objective = {
            title: this.state.Title,
            priority: parseInt(this.state.Priority),
            term: parseInt(this.state.Term),
            type: parseInt(this.state.Type),
            finalDate: this.state.FinalDate
        };

        api.post("/objectives", objective)
            .then(data => {
                let timerInterval
                Swal.fire({
                    title: 'Registering Goal',
                    html: 'The objective will be registered in <b></b> milliseconds.',
                    timer: (data.data.milliseconds + 1000),
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
            })
            .catch(erro => console.log("Erro: ", erro))
            .finally(() => {
                this.props.listFnc();
            })
    }

    render() {
        return (
            <div className="register_objective">
                <Form noValidate validated={this.state.Validated}>
                    <Form.Row>
                        <Form.Group as={Col} sm={12}>

                            <Form.Control
                                value={this.state.Title}
                                onChange={this.atualizaEstadoTitle.bind(this)}
                                placeholder="Objective"
                            />
                        </Form.Group >
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="auto">
                            <Form.Control as="select"
                                required
                                value={this.state.Type || ''}
                                onChange={this.atualizaEstadoType.bind(this)}>
                                <option defaultValue>Alignment</option>
                                <option value="1">Company</option>
                                <option value="2">Team</option>
                                <option value="3">Person</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="auto">
                            <Form.Control as="select"
                                required
                                value={this.state.Priority || ''}
                                onChange={this.atualizaEstadoPriority.bind(this)}>
                                <option defaultValue>Weight</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="auto">
                            <Form.Control as="select"
                                required
                                value={this.state.Term || ''}
                                onChange={this.atualizaEstadoTerm.bind(this)}>
                                <option defaultValue>Period</option>
                                <option value="1">Quarterly</option>
                                <option value="2">Annual</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="auto">
                            <Form.Control
                                required
                                className="input-date"
                                type="date"
                                value={this.state.FinalDate}
                                onChange={this.atualizaEstadoFinalDate.bind(this)}
                                id="Data Final"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Button variant="info"
                            style={{ backgroundColor: "#0D639D" }}
                            type="submit" onClick={this.RegisterObjective.bind(this)}
                        >
                            Register
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}