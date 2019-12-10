import React, { Component } from 'react';
import api from '../../services/api';
import { Card } from "react-bootstrap";
import { Line } from 'react-chartjs-2';
import Toolbars from '../../components/Toolbars/index'
import './Dashboard.css';
import ChartDashboard from '../../components/ChartDashboard/index'

export default class DashboardPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {
                labels: [],
                datasets: []
            },
            objectivesDatas: {}
        }
    }

    listObjs = () => {
        api.get("/dashboard/senddatas")
            .then(response => {
                this.setState({ objectivesDatas: response.data })
                console.log(this.state.objectivesDatas)
            })
            .catch(erro => console.log(erro))
    }

    componentDidMount() {
        let dados = {
            labels: ['26/11/2019', '27/11/2019', '28/11/2019', '29/11/2019', '30/11/2019'],
            datasets: [
                {
                    label: 'Quantidade Alertas por Data',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [5, 10, 12, 20, 30],
                },
            ]
        }

        this.setState({
            data: dados
        })

        this.listObjs();
    }

    render() {
        return (
            <div>
                <div>
                    <Toolbars />
                </div>
                <div className="main__cards__contain">
                    <Card className="main__cards__data" bg="danger" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className="txtW">Objectives Completed</Card.Title>
                            <Card.Text className="txtW text-right">
                                {this.state.objectivesDatas.numberOfObjectivesComplete}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="main__cards__data" bg="danger" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className="txtW">Not Completed Objectives</Card.Title>
                            <Card.Text className="txtW text-right">
                                {this.state.objectivesDatas.numberOfObjectivesNotComplete}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="main__cards__data" bg="danger" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title className="txtW">Completion Percentage</Card.Title>
                            <Card.Text className="txtW text-right">
                                {this.state.objectivesDatas.percentOfCompleteObjectives}%
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="container main__dashboard__contain1">
                    <ChartDashboard/>
                </div>
                {/* <div >
                    <Line data={this.state.data} height={130} />
                </div> */}
            </div>
        );
    }
}