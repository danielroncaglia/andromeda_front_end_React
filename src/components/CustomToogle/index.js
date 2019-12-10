import React from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

export default function CustomToggle({ children, eventKey }) {

    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log(),
    );

    return (
        <button
            type="button"
            style={{ color: '#fff',
                backgroundColor: '#0D639D',
                borderColor: '#0D639D',
                border: '1px solid transparent',
                lineHeight: '1.5',
                borderRadius: '.25rem',
                with: '80px',
                display: 'inline-block' }}
            onClick={decoratedOnClick}
        >
        
            {children}
        </button>
    );
}