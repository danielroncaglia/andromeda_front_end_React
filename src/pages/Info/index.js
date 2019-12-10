import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Toolbars from '../../components/Toolbars/index';
import { Link } from 'react-router-dom';

import AccordionFaq from '../../components/AccordionToggle/index'
import '../Info/Info.css';

export default class Info extends Component {

    constructor(props) {
        super(props);
        this.state = {
            accordionState: 0
        }
    }

    render() {
        return (
            <div>
                <div>
                    <Toolbars />
                </div>
                <div className="about__contain__info container d-flex flex-column">
                    <h1 className="about__title__title mb-5">Objectives e Key Results</h1>
                    
                    <Accordion className="mb-5">
                        <AccordionFaq chave={0} question={"What is OKRs?"} answer={
                            <div>
                                <h5>OKR stands for Objectives and Key Results, 
                                    which is a framework for defining 
                                    and tracking goals and their outcomes.</h5>
                                <h5></h5>
                            </div>
                        } />
                        <AccordionFaq chave={1} question={"Teste 2"} answer={"resposta 2"} />
                        <AccordionFaq chave={2} question={"Teste 3"} answer={"resposta 3"} />
                    </Accordion>
                    <Link to="/" className="about__button__link btn btn-info">
                        Faça seus ORKs
                    </Link>
                </div>
            </div>
        );
    }
}