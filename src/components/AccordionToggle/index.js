import React, { useEffect, useState } from 'react';
import ArrowDownIcon from 'react-ionicons/lib/IosArrowDown';
import ArrowUpIcon from 'react-ionicons/lib/IosArrowUp';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

export default function AccordionFaq(props) {

    const [typeArrow, setTypeArrow] = useState('down');

    const arrow = () => {
        if (typeArrow === 'down') {
            setTypeArrow('up');
        } else {
            setTypeArrow('down');
        }
    }

    return (      
            <Card className="about__list__faq">
                <Accordion.Toggle className="about__card__header d-flex" onClick={() => arrow()} as={Card.Header} eventKey={props.chave} >
                {props.question} {(typeArrow === 'down' ? <ArrowDownIcon className="arrow" fontSize="30px" onClick={() => arrow()} /> : <ArrowUpIcon className="arrow" fontSize="30px" onClick={() => arrow()} />)}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={props.chave}>
                    <span>{props.answer}</span>
                </Accordion.Collapse>
            </Card>        
    );
}