import React, {Component} from 'react';
import Jumbotron from '../components/jumbotron/Jumbotron';

class Home extends Component {
    
    render() {
        return (
            <>
                <Jumbotron/>
                <div class="d-flex justify-content-center py-2">
                    <hr class="w-50"/>
                </div>
                <h2 className='custom-font-amcap text-center text-orange'>Other exo</h2>
            </>
        )
    }

}

export default Home;