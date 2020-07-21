import React from 'react';

function CardBody(props) {

    return (
        <section className='container u-pb3'>
           {props.children}
        </section>
    );
};

    export default CardBody;