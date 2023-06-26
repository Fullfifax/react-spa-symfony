import React from 'react';
import CardsContainerLayout from '../../layouts/CardsContainerLayout';
import ContainerLayout from '../../layouts/ContainerLayout';
import Card from '../card/Card';
import crudImage from '../../../images/crud.jpg';
import './jumbotron.css';

const Jumbotron = () => {

    return (
        <div className="align-items-center d-flex justify-content-between p-4">
            <div>
                <h2 className="display-4 text-blue">Welcome to <span className="text-orange">DTC-SYMFONY</span></h2>
                <p className="lead">
                    This app shows you how 
                    <span className="text-orange"> DTCien</span> is doing his 
                    <span className="text-orange"> exercises</span>
                </p>
            </div>
            <Card
                imageUrl={crudImage}
                title="USER CRUD"
                description="CRUD using ReactJS (SPA) + Symfony"
                linkUrl="/user"
            />
        </div>
    );
}

export default Jumbotron;