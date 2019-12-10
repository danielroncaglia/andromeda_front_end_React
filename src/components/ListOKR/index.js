/* Funções do react e afins */
import React, { Component } from 'react';
import api from '../../services/api';

/* Ícones do ionicons */
import UpdateIcon from 'react-ionicons/lib/MdCreate';
import DeleteIcon from 'react-ionicons/lib/MdTrash';
import Avatar from 'react-ionicons/lib/IosPerson';


/* Ícones do peso dos KRs */
import quarter from '../../assets/images/quarter.png';
import third from '../../assets/images/third.png';
import half from '../../assets/images/half.png';

/* Ícones do tipo do objetivo */
import company from '../../assets/images/company.png';
import team from '../../assets/images/team.png';
import person from '../../assets/images/person.png';

/* Componentes */
import Swal from 'sweetalert2';
import AppContar from '../../components/AppContar/index';
import InputKR from '../InputKR';
import MenuIcons from '../MenuIcons/index';
import Loading from '../Loading/index';

/* Componentes do Bootstrap */
import { Col, Row, Accordion, Card, ProgressBar, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default class ListOKR extends Component {

    constructor(props) {
        super(props);

        this.state = {
            listObjectives: [],
            clicks: 0,
            showMenuIcons: false,
            showLoading: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.listObjs !== prevProps.listObjs) {
            this.setState({ listObjectives: this.props.listObjs })
        }
    }

    componentDidMount() {
        this.listObjectives();
    }

    listObjectives = () => {
        api.get("/objectives")
            .then(response => {
                this.setState({ showLoading: true })
                this.setState({ listObjectives: response.data })
            })
            .catch(erro => console.log(erro))
    }

    excluirKr = (idObj, idKr) => {
        api.delete(`/keyresults/${idObj}/${idKr}`)
            .then(response => {
                this.props.listFnc()
            })
            .catch(error => console.log('Erro: ', error))
    }

    excluirObj = (idObj) => {
        console.log("teste teste teste")
        api.delete(`/objectives/${idObj}`)
            .then(response => {
                this.props.listFnc()
            })
            .catch(error => console.log('Erro: ', error))
    }

    atualizarKr = (idObj, idKr, obj) => {
        api.put(`/keyresults/${idObj}/${idKr}`, {
            obj
        })
            .then(response => console.log(response))
            .catch(error => console.log('Error: ', error))
    }

    // tradutionEnumPriority = (type) => {
    //     if (type === 1) {
    //         return <div className="option2" ><img alt='1/4' src={quarter} className="fractions" /><span className="tooltip2">Weight: 1/4</span></div>
    //     } else if (type === 2) {
    //         return <div className="option2" ><img alt='1/4' src={quarter} className="fractions" /><span className="tooltip2">Weight: 1/4</span></div>
    //     } else if (type === 3) {
    //         return <div className="option2" ><img alt='1/3' src={third} className="fractions" /><span className="tooltip2">Weight: 1/3</span></div>
    //     } else if (type === 4) {
    //         return <div className="option2" ><img alt='1/2' src={half} className="fractions" /><span className="tooltip2">Weight: 1/2</span></div>
    //     }
    // }

    tradutionEnumType = (type) => {
        if (type === 1) {
            return (
                <>
                    <OverlayTrigger
                        key="company"
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-company`}>
                                <strong style={{
                                    color: "#FFF !important"
                                }}>Company</strong>
                            </Tooltip>
                        }
                    >
                        <div className="option2" ><img alt='company' src={company} className="fractions" /></div>
                    </OverlayTrigger>
                </>
            )
        } else if (type === 2) {
            return (
                <>
                    <OverlayTrigger
                        key="team"
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-team`}>
                                <strong style={{
                                    color: "#FFF !important"
                                }}>Team</strong>
                            </Tooltip>
                        }
                    >
                        <div className="option2" ><img alt='team' src={team} className="fractions" /></div>
                    </OverlayTrigger>
                </>
            )
        } else if (type === 3) {
            return (
                <>
                    <OverlayTrigger
                        key="person"
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-person`}>
                                <strong style={{
                                    color: "#FFF !important"
                                }}>Person</strong>
                            </Tooltip>
                        }
                    >
                        <div className="option2" ><img alt='individual' src={person} className="fractions" /></div>
                    </OverlayTrigger>
                </>
            )
        }
    }

    tradutionEnumTypeValue = (type) => {
        if (type === 1) {
            return "%"
        } else if (type === 2) {
            return " unit"
        } else if (type === 3) {
            return " $"
        } else if (type === 4) {
            return " numbers"
        }
    }

    transformWeightInIcon = (weight) => {
        if (weight === 1) {
            return (
                <>
                    <OverlayTrigger
                        key="weight"
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-weight`}>
                                <strong style={{
                                    color: "#FFF !important"
                                }}>Weight: 1/5</strong>
                            </Tooltip>
                        }
                    >
                        <div className="option2">1/5</div>
                    </OverlayTrigger>
                </>
            )
        } else if (weight === 2) {
            return (
                <>
                    <OverlayTrigger
                        key="weight"
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-weight`}>
                                <strong style={{
                                    color: "#FFF !important"
                                }}>Weight: 1/4</strong>
                            </Tooltip>
                        }
                    >
                        <div className="option2"><img alt='1/4' src={quarter} className="fractions" /></div>
                    </OverlayTrigger>
                </>
            )
        } else if (weight === 3) {
            return (
                <>
                    <OverlayTrigger
                        key="weight"
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-weight`}>
                                <strong style={{
                                    color: "#FFF !important"
                                }}>Weight: 1/3</strong>
                            </Tooltip>
                        }
                    >
                        <div className="option2" ><img alt='1/3' src={third} className="fractions" /></div>
                    </OverlayTrigger>
                </>
            )
        } else if (weight === 4) {
            return (
                <>
                    <OverlayTrigger
                        key="weight"
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-weight`}>
                                <strong style={{
                                    color: "#FFF !important"
                                }}>Weight: 1/2</strong>
                            </Tooltip>
                        }
                    >
                        <div className="option2" ><img alt='1/2' src={half} className="fractions" /></div>
                    </OverlayTrigger>
                </>
            )
        }
    }

    tradutionEnumWeightPorcentagem = (type) => {
        if (type === 1) {
            return 0.2;
        }
        else if (type === 2) {
            return 0.25;
        } else if (type === 3) {
            return 0.33;
        } else if (type === 4) {
            return 0.5;
        }
    }

    saveProgressObjective = (objectivepercentage) => {
        api.post('/objectives/updatestatus')
            .then(response => console.log(response))
            .catch(erro => console.log('Erro: ', erro))
    }

    calculaValorOkrs = (krs) => {
        let actualKR = 0;
        let partKR = 0;
        let objectivepercentage = 0;
        if (krs != null) {
            krs.map((kr) => {

                actualKR = kr.initialValue / kr.finalValue;
                if (actualKR > 1)
                    actualKR = 1;
                partKR = actualKR * this.tradutionEnumWeightPorcentagem(kr.weight);
                objectivepercentage += partKR;
            })

            return objectivepercentage * 100;
        }

        return 0;
    }

    handleChange = (event, idKr, idObjective) => {
        event.preventDefault();
        let lista = this.state.listObjectives;
        lista.map((item) => {
            if (item.id === idObjective) {
                item.kRs.map((kr) => {
                    if (kr.id === idKr) {
                        if (event.target.value >= 0 && event.target.value <= kr.finalValue) {
                            kr.initialValue = event.target.value;
                            this.setState({ listObjectives: lista })
                            document.getElementById('objective-' + idObjective).classList.add('show')
                        }
                    }
                })
            }
        })
    };

    colorProgressBar = (value) => {
        let color = "0";
        if (value <= 0.3)
            return color = "danger";
        else if (value > 0.3 && value < 0.7)
            return color = "warning";
        else if (value >= 0.7)
            return color = "success";
    }
    render() {
        return (
            <div className="container">
                <Loading show={this.state.showLoading} />
                {
                    this.state.listObjectives.map((item, index) => {
                        return (
                            <Accordion key={index}>
                                <Card className="justify-content-md-center padding"
                                    style={{ margin: '20px 20px 20px 20px' }}>
                                    <div>
                                        <Accordion.Toggle as={Card.Header} eventKey={index} key={item.id}>
                                            {/* <MenuIcons show={this.state.showMenuIcons} removeObj={this.excluirObj} idObj={item.id} /> */}

                                            <Row className="okr__row__align">
                                                <Col md="11">
                                                    <h5>{item.title}</h5>
                                                </Col>
                                            </Row>
                                            <Row className="okr__row__align">
                                                <Col md="4" className='d-flex align-items-center'>
                                                    <ProgressBar className='col-12 p-0' variant={this.colorProgressBar(this.calculaValorOkrs(item.kRs) / 100)}
                                                        now={this.calculaValorOkrs(item.kRs)}
                                                        label={this.calculaValorOkrs(item.kRs).toFixed(0) + `%`}
                                                    />
                                                </Col>
                                                <Col md="auto">
                                                    <h6>{this.tradutionEnumType(item.type)}</h6>
                                                </Col>
                                                <Col md="auto">
                                                    <div className="option2 d-flex flex-column align-items-center justify-content-center">
                                                        <Avatar />
                                                        <h6>{item.owner.name}</h6>
                                                    </div>
                                                </Col>
                                                {/* <Col md="auto" className='d-flex flex-column align-items-center justify-content-center'>
                                                    <h6>{this.tradutionEnumPriority(item.priority)}</h6>
                                                </Col> */}
                                                <Col md="3" className='d-flex flex-column align-items-center justify-content-center'>
                                                    <AppContar date={item.finalDate} />
                                                </Col>
                                                <Col md="2" className='d-flex align-items-center justify-content-around'>
                                                    <UpdateIcon
                                                        className="icon"
                                                        color='#0d639d'
                                                        fontSize="26px"
                                                        onClick={() => {
                                                            this.props.statusMenu(item)
                                                            this.props.teste(item)
                                                        }}
                                                    />
                                                    <DeleteIcon
                                                        color='#9D2A24'
                                                        className="icon"
                                                        fontSize="26px"
                                                        onClick={() => {
                                                            this.excluirObj(item.id);
                                                            Swal.fire({
                                                                title: 'Are you sure?',
                                                                text: "You won't be able to revert this!",
                                                                icon: 'warning',
                                                                showCancelButton: true,
                                                                confirmButtonColor: '#3085d6',
                                                                cancelButtonColor: '#d33',
                                                                confirmButtonText: 'Yes, delete it!'
                                                            }).then((result) => {
                                                                if (result.value) {
                                                                    let timerInterval
                                                                    Swal.fire({
                                                                        title: 'Registering Key Result',
                                                                        html: 'The key result will be registered in <b></b> milliseconds.',
                                                                        timer: 1500,
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
                                                                }
                                                            })
                                                        }}
                                                    />
                                                    <span className="tooltip">Delete</span>
                                                </Col>
                                            </Row>
                                        </Accordion.Toggle>
                                    </div>
                                    <div>
                                        <Accordion.Collapse id={'objective-' + item.id} eventKey={index}>
                                            <Card.Body>
                                                <div className="justify-content-md-center"
                                                    style={{ margin: '20px 20px 20px 20px' }}>

                                                    {
                                                        item.kRs === null ? '' : item.kRs.map((kr) => {
                                                            return (
                                                                <Row key={kr.id}>
                                                                    <Col md="12"
                                                                        style={{ margin: "20x 20x 20x 20x" }}>
                                                                        <h5>{kr.title}</h5>
                                                                    </Col>
                                                                    <Col md="4">
                                                                        <ProgressBar variant={this.colorProgressBar(kr.initialValue / kr.finalValue)}
                                                                            now={(kr.initialValue / kr.finalValue) * 100}
                                                                            label={`${kr.initialValue}${this.tradutionEnumTypeValue(kr.typeValue)}`}
                                                                        />
                                                                    </Col>
                                                                    <Col md="2">
                                                                        <h6>Actual number</h6>
                                                                        <input
                                                                            className="input-date"
                                                                            type="number"
                                                                            value={kr.initialValue}
                                                                            onChange={(event) => {
                                                                                this.handleChange(event, kr.id, item.id)
                                                                            }} />
                                                                    </Col>
                                                                    <Col md="1">
                                                                        <h6>Goal</h6>
                                                                        <h6>{kr.finalValue}</h6>
                                                                    </Col>
                                                                    <Col md="2">
                                                                        <div className="option2" >
                                                                            <span className="tooltip2">Owner</span>
                                                                            <Avatar />
                                                                            <h6>{kr.owner.name}</h6>
                                                                        </div>
                                                                    </Col>
                                                                    <Col md="1">
                                                                        <h6>{this.transformWeightInIcon(kr.weight)}</h6>
                                                                    </Col>
                                                                    <Col md="1">
                                                                        <UpdateIcon className="icon"
                                                                            style={{ color: "#0D639D" }}
                                                                            fontSize="26px"
                                                                        />
                                                                    </Col>
                                                                    <Col md="1">
                                                                        <DeleteIcon
                                                                            className="icon"
                                                                            fontSize="26px"
                                                                            onClick={() => this.excluirKr(item.id, kr.id)}
                                                                        />
                                                                    </Col>
                                                                </Row>
                                                            );
                                                        })
                                                    }
                                                </div>
                                                <div className="justify-content-md-center padding"
                                                    style={{ padding: "20px 20px 20px 20px" }} >
                                                    <InputKR id={item.id} list={this.props.listFnc} />
                                                </div>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </div>
                                </Card>
                            </Accordion>
                        );
                    })
                }
            </div>
        );
    }
}