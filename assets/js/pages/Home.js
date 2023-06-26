import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Layout from '../components/layouts/Layout';

class Home extends Component {
    
    render() {
        return (
            <Layout>
                <Link to="/user">USER CRUD</Link>
            </Layout>
        )
    }

}

export default Home;