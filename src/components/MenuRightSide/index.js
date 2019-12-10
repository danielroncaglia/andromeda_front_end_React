import React, { Component } from 'react';

import { Form, Button, Col } from 'react-bootstrap';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import api from '../../services/api';

export default class MenuRightSide extends Component {

  constructor(props) {
    super(props);


    this.state = {
      term: null,
      title: "",
      alignment: null,
      weight: null,
      obj: {}
    }
  }

  // componentWillUpdate(){
  //   this.setState({ obj: this.props.obj });
  // }

  updateStateTerm = (event) => {
    this.setState({ term: event.target.value });
  }

  updateStateTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  updateStateAlignment = (event) => {
    this.setState({ alignment: event.target.value });
  }

  updateStateWeight = (event) => {
    this.setState({ weight: event.target.value });
  }

  updateObjective(event, idObj){
    let obj = {
      term: this.state.term,
      title: this.state.title,
      priority: this.state.weight,
      type: this.state.alignment
    }

    api.put(`/objectives/${idObj}`, obj)
      .then(response => console.log(response))
      .catch(error => console.log("Banana: ", error))
  }

  render() {
    const item = this.props;
    
    if (!this.props.show) {
      return null
    }
    return (
      <div className="menu__div__container">
        <h1 className="menu__h1__title">Atualizar Objetivo</h1>
        <Form>
          <Form.Group className="divGroup" controlId="formBasicText">
            <Form.Label>Title Objective</Form.Label>
            <Form.Control
              className="inputControl"
              type="text"
              name="title"
              value={item.obj.title}
              placeholder="Title..."
              onChange={this.updateStateTitle}
            />
          </Form.Group>

          <Form.Group className="divGroup" controlId="exampleForm.ControlSelect1">
            <Form.Label>Alignment</Form.Label>
            <Form.Control
              className="inputControl"
              as="select"
              name="alignment"
              value={this.props.obj.type}
              onChange={this.updateStateAlignment}
            >
              <option defaultValue>Alignment</option>
              <option value="1">Company</option>
              <option value="2">Team</option>
              <option value="3">Person</option>
            </Form.Control>
          </Form.Group>

          {/* <Form.Group className="divGroup" controlId="formBasicText">
            <Form.Label>Owner</Form.Label>
            <Form.Control className="inputControl" type="text" placeholder="Owner..." />
          </Form.Group> */}

          <Form.Group className="divGroup" controlId="exampleForm.ControlSelect1">
            <Form.Label>Weight</Form.Label>
            <Form.Control
              className="inputControl"
              as="select"
              name="weight"
              value={this.props.obj.priority}
              onChange={this.updateStateWeight}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="divGroup" controlId="exampleForm.ControlSelect1">
            <Form.Label>Period</Form.Label>
            <Form.Control
              className="inputControl"
              as="select"
              name="term"
              value={this.props.obj.term}
              onChange={this.updateStateTerm}
            >
              <option defaultValue>Period</option>
              <option value="1">Quarterly</option>
              <option value="2">Annual</option>
            </Form.Control>
          </Form.Group>

          {/* <Form.Group className="divGroup">
            <Form.Label>Final Date</Form.Label>
            <Form.Control
              required
              className="inputControl"
              type="date"
              id="Data Final"
              value={this.props.obj.finalDate}
            />
          </Form.Group> */}

          <Button className="btn_submit" variant="info" type="submit" onClick={() => this.updateObjective(this.props.obj.id)}>
            Update
          </Button>
        </Form>
      </div>
    );
  }
}
