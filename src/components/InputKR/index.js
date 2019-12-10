import React from 'react';
import CustomToggle from '../CustomToogle';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import RegisterKR from '../RegisterKRinObj/index';

export default function InputKR(props) {
    return (
        <Accordion defaultActiveKey="0"
        >
            <Card >
                <CustomToggle eventKey="1">New KR</CustomToggle>
                <Accordion.Collapse eventKey="1" >
                        <RegisterKR  idobj={props.id} listOKRs={props.list} />
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}
