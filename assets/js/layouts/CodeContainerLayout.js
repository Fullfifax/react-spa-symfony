import React from 'react';

const CodeContainerLayout = ({children}) => {

    return (
        <>
            <h2 className='custom-font-amcap mt-4 text-center text-orange'>How did I do it</h2>
            <div className='mt-4'>
                {children}
            </div>
        </>
    );
}

export default CodeContainerLayout;