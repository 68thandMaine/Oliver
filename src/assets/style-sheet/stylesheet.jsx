import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './stylesheet.scss';

function StyleSheet(props) {

    return (
        <div className='container'>
            <div className='container__row'>
                <div className='container__col-lg-4'>
                    <h1>Typography</h1>
                    <ul className='stylesheet'>
                        <li>
                            <h1>H1 Headline</h1>
                        </li>
                        <li>
                            <h2>H2 Headline</h2>
                        </li>
                        <li>
                            <h3>H3 Headline</h3>
                        </li>
                        <li>
                            <h4>H4 Headline</h4>
                        </li>
                        <li>
                            <h5>H5 Headline</h5>
                        </li>
                        <li>
                            <h6>H6 Headline</h6>
                        </li>
                        <li>
                            <p>Body Regular</p>
                        </li>
                        <li>
                            <label>label</label>
                        </li>
                        <li>li</li>
                        <li>
                            <button>button</button>
                        </li>
                    </ul>
                </div>
                <div className='container__col-lg-4'>
                    <h1>Icons</h1>
                    <div className='container__row'>
                        <div className='container__col-lg-12'>
                            <h3>Nav Bar Icons</h3>
                            <ul>
                                <li>Logo Icon: <span><FontAwesomeIcon icon={["fab", "first-order"]}/></span></li>
                                <li>Overview Icon: <span><FontAwesomeIcon icon='warehouse'/></span></li>
                                <li>Accounts Icon: <span><FontAwesomeIcon icon="landmark"/></span></li>
                                <li>Graphs Icon: <span><FontAwesomeIcon icon='chart-pie'/></span></li>
                                <li>Goals Icon: <span><FontAwesomeIcon icon="list-alt"/></span></li>
                                <li>Settings Icon: <span><FontAwesomeIcon icon='cogs'/></span></li>
                            </ul>
                        </div>
                    </div>
                        <div className='container__row'>
                            <div className='container__col-lg-6'>
                                <h3>Interaction Icons</h3>
                                <ul>
                                    <li>Add Icon: <span><FontAwesomeIcon icon="plus-circle"/></span></li>
                                    <li>Close Icon: <span><FontAwesomeIcon icon="times-circle"/></span></li>
                                    <li>Search Icon: <span><FontAwesomeIcon icon="search"/></span></li>
                                    <li>Right Icon: <span><FontAwesomeIcon icon='angle-right'/></span></li>
                                    <li>Left Icon: <span><FontAwesomeIcon icon='angle-left'/></span></li>
                                </ul>
                            </div>
                            <div className='container__col-lg-6'>
                                <h3>Finance Icons</h3>
                                <ul>
                                    <li>Loan Icon: <span><FontAwesomeIcon icon='file-invoice-dollar'/></span></li>
                                    <li>Money Icon: <span><FontAwesomeIcon icon="dollar-sign"/></span></li>
                                    <li>Grocery Icon: <span><FontAwesomeIcon icon='shopping-cart'/></span></li>
                                    <li>Credit Card Icon: <span><FontAwesomeIcon icon='credit-card'/></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                <div className='container__col-lg-4'></div>
            </div>
        </div>
    )
}

export default StyleSheet;