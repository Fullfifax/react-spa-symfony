import React from 'react';
import './jumbotron.css';

const Jumbotron = () => {

    return (
        <div class="align-items-center d-flex justify-content-center p-4">
            <h2 class="display-4 text-blue">Welcome to <span class="text-orange">DTC-SYMFONY</span></h2>
            <p class="lead">This app shows you how Fullfifax is doing his exercises</p>
        </div>
    );
}

export default Jumbotron;