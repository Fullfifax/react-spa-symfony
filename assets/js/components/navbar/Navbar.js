import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    const listItemClassName = 'list-unstyled';
    const linkClassName = 'custom-font-poppins mx-4 text-decoration-none';
    const linkColor = ' text-white';

    return (
        <nav className='align-items-center bg-nav-blue d-flex justify-content-around py-2'>
            <div className='logo'>
                <Link className={linkClassName + ' custom-font-amcap display-5 text-orange'} to="/">DTC</Link>
            </div>
            <div>
                <ul className='d-flex mt-3'>
                    <li className={listItemClassName}>
                        <Link className={linkClassName + linkColor} to="#">Exo</Link>
                    </li>
                    <li className={listItemClassName}>
                        <Link className={linkClassName + linkColor} to="#">About</Link>
                    </li>
                    <li className={listItemClassName}>
                        <Link className={linkClassName + linkColor} to="#">Contact</Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link className={linkClassName + linkColor} to="/">Buy me a coffee</Link>
            </div>
        </nav>
    );
}

export default Navbar;