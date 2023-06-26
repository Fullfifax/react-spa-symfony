import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ContainerLayout from '../components/layouts/ContainerLayout';

class Home extends Component {
    
    render() {
        return (
            <ContainerLayout>
                <Link to="/user">USER CRUD</Link>
            </ContainerLayout>
        )
    }

}

export default Home;