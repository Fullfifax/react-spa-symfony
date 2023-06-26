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
                <ContainerLayout>
                    <CardsContainerLayout>
                        <Card
                            imageUrl={crudImage}
                            title="USER CRUD"
                            description="CRUD using ReactJS (SPA) + Symfony"
                            linkUrl="/user"
                            buttonText="Read More"
                            readMoreLink="#"
                        />
                    </CardsContainerLayout>
                </ContainerLayout>
            </>
        )
    }

}

export default Home;