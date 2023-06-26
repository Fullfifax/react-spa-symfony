import React, {useState, useEffect} from 'react';
import { Link, useParams } from "react-router-dom";
import ContainerLayout from "../../layouts/ContainerLayout"
import axios from 'axios';
  
function UserShow() {
    const [id, setId] = useState(useParams().id)
    const [user, setUser] = useState({name:'', firstname:'', age:'', cin:'', address:''})
    useEffect(() => {
        axios.get(`/api/user/${id}`)
        .then(function (response) {
          setUser(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
  
    return (
        <ContainerLayout>
           <div className="container">
            <h2 className="text-center mt-5 mb-3">Show User</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/"> View All Users
                        </Link>
                    </div>
                    <div className="card-body">
                        <b className="text-muted">Name:</b>
                        <p>{user.name}</p>
                        <b className="text-muted">Firstname:</b>
                        <p>{user.firstname}</p>
                        <b className="text-muted">Age:</b>
                        <p>{user.age}</p>
                        <b className="text-muted">CIN:</b>
                        <p>{user.cin}</p>
                        <b className="text-muted">Address:</b>
                        <p>{user.address}</p>
                    </div>
                </div>
            </div>
        </ContainerLayout>
    );
}
  
export default UserShow;