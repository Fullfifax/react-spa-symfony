import React from 'react';
import Card from '../card/Card';
import crudImage from '../../../images/crud.jpg';
import './jumbotron.css';

const Jumbotron = () => {

    return (
        <div className="align-items-center d-flex justify-content-between p-4">
            <div>
                <h2 className="custom-font-amcap display-4 text-blue">Welcome to <span className="text-orange">DTC-SYMFONY</span></h2>
                <p className="custom-font-poppins lead">
                    This app shows you how 
                    <span className="custom-font-amcap text-orange"> DTCien</span> is doing his 
                    <span className="custom-font-amcap text-orange"> exercises</span>
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