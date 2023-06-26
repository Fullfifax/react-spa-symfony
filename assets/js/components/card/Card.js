import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = (props) => {
    const { imageUrl, title, description, buttonText, linkUrl } = props;

    return (
        <div className="bg-blue card text-center w-25">
            <Link className="text-decoration-none" to={linkUrl}>
                <img src={imageUrl} className="card-img-top" alt="Card Image" />
                <div className="card-body text-white">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;