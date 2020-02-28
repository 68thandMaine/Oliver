import React from 'react';

function CardBody(props) {

    return (
        <div className='container u-pb3'>
           {props.children}
        </div>
    );
};

    export default CardBody;