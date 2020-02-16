import React from 'react';
import './CardBody.scss';

function CardBody(props) {

    return (
        <div className='container cardBody'>
           {props.children}
        </div>
    );
};

    export default CardBody;