import React from 'react';

const CardsContainerLayout = ({children}) => {
    return (
        <div className='d-flex justify-content-around'>
            {children}
        </div>
    )
}

export default CardsContainerLayout;