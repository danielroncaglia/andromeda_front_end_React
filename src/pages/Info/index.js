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
                    <h1 className="about__title__title mb-5">Objectives & Key Results</h1>

                    <Accordion className="mb-5">
                        <AccordionFaq chave={0} question={"What is OKRs?"} answer={
                            <div>
                                <br></br>
                                <ul>
                                    <li>OKR stands for Objectives and Key Results,
                                        which is a framework for defining
                                    and tracking goals and their outcomes</li>
                                    <br></br>
                                    <li>The creaters of OKRS are...
                                        The companys in Silicon Valley
                                    </li>
                                </ul>
                            </div>
                                } />
                        <AccordionFaq chave={1} question={"Objectives?"} answer={
                                    <div>
                                        <br></br>
                                        <ul>
                                            <li>Objectives must be specific, achievable, inspirational and time-bound</li>
                                            <br></br>
                                            <li>In Andromeda, Objectives contain information about alignment (company, team, or individual),
                                    weight (1/2, 1/3, 1/4, and 1/5) over a period that can be quarterly or annually</li>
                                            <br></br>
                                            <li>The Objective value is dynamically displayed by a progress bar ranging from 0 to 100%</li>
                                        </ul>
                                    </div>
                                } />
                                <AccordionFaq chave={2} question={"Key Results?"} answer={
                                    <div>
                                        <br></br>
                                        <ul>
                                            <li>Key Results should be concrete outcomes measurable by a number and indicating achievement of the Goal</li>
                                            <br></br>
                                            <li>In Andromeda, Key Results must have an initial value, goal result, owner, and Objective weight.</li>
                                            <br></br>
                                            <li>The Objective value is dynamically displayed by a progress bar ranging from 0 to 100. It´s could be a percentage (%), units (N), money ($) and others</li>
                                        </ul>
                                    </div>
                                } />
                                <AccordionFaq chave={3} question={"Who did it?"} answer={
                                    <div>
                                        <br></br>
                                        <span>
                                            This project is a partnership between Senai Informatica São Pualo and Space Needle
                                    </span>
                                        <ul>
                                            <br></br>
                                            <li><strong>Kepler squad</strong></li>
                                            <li>Cândida Paraízo</li>
                                            <li>Daniel Roncaglia</li>
                                            <li>Mateus Custódio</li>
                                            <li>Mateus de Holanda</li>
                                            <br></br>
                                            <li>Instrutores</li>
                                            <li>Fernando Henrique Guerra</li>
                                            <li>Gabriel Ramos</li>


                                        </ul>
                                    </div>
                                } />
                    </Accordion>
                            <Link to="/" className="about__button__link btn btn-info">
                                Faça seus ORKs
                    </Link>
                </div>
            </div>
                    );
                }
}