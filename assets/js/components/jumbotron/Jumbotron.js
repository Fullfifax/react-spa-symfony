import React from 'react';
import './jumbotron.css';

const Jumbotron = () => {

    return (
        <div className="align-items-center d-flex justify-content-center p-4">
            <h2 className="display-4 text-blue">Welcome to <span className="text-orange">DTC-SYMFONY</span></h2>
            <p className="lead">
                This app shows you how 
                <span className="text-orange"> DTCien</span> is doing his 
                <span className="text-orange"> exercises</span>
            </p>
        </div>
    );
}

export default Jumbotron;