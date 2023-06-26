import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Jumbotron from '../components/jumbotron/Jumbotron';
import ContainerLayout from '../layouts/ContainerLayout';

class Home extends Component {
    
    render() {
        return (
            <>
                <Jumbotron/>
                <ContainerLayout>
                    <Link to="/user">USER CRUD</Link>
                </ContainerLayout>
            </>
        )
    }

}

export default Home;