import React, {Component} from 'react';
import Card from '../components/card/Card';
import Jumbotron from '../components/jumbotron/Jumbotron';
import CardsContainerLayout from '../layouts/CardsContainerLayout';
import ContainerLayout from '../layouts/ContainerLayout';
import crudImage from '../../images/crud.jpg';

class Home extends Component {
    
    render() {
        return (
            <>
                <Jumbotron/>
                <div class="d-flex justify-content-center py-2">
                    <hr class="w-50"/>
                </div>
                <h2 className='custom-font text-center text-orange'>Other exo</h2>
            </>
        )
    }

}

export default Home;