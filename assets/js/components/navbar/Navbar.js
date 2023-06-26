import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const listItemClassName = 'list-unstyled';
    const linkClassName = 'mx-4 text-decoration-none';

    return (
        <nav className='align-items-center d-flex justify-content-around py-2'>
            <div className='logo'>
                <Link className={linkClassName + ' display-5'} to="/">DTC</Link>
            </div>
            <div>
                <ul className='d-flex mt-3'>
                    <li className={listItemClassName}>
                        <Link className={linkClassName} to="#">Exo</Link>
                    </li>
                    <li className={listItemClassName}>
                        <Link className={linkClassName} to="#">About</Link>
                    </li>
                    <li className={listItemClassName}>
                        <Link className={linkClassName} to="#">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link className={linkClassName} to="/">Buy me a coffee</Link>
            </div>
        </nav>
    );
}

export default Navbar;