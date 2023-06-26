import React, { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/layouts/Layout"
import Swal from 'sweetalert2'
import axios from 'axios';
  
function UserEdit() {
    const [id, setId] = useState(useParams().id)
    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [age, setAge] = useState('');
    const [cin, setCin] = useState('');
    const [address, setAddress] = useState('');
    const [isSaving, setIsSaving] = useState(false);
  
      
    useEffect(() => {
        axios.get(`api/user/${id}`)
        .then(function (response) {
            let user = response.data
            setName(user.name)
            setFirstname(user.firstname)
            setAge(user.age)
            setCin(user.cin)
            setAddress(user.address)
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
        })
          
    }, [])
  
  
    const handleSave = () => {
        setIsSaving(true);
        axios.patch(`/api/user/${id}`, {
            name: name,
            firstname: firstname,
            age: age,
            cin: cin,
            address: address
        })
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                title: 'User updated successfully!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false);
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'An Error Occured!',
                showConfirmButton: false,
                timer: 1500
            })
            setIsSaving(false)
        });
    }
  
  
    return (
        <Layout>
            <div className="container">
                <h2 className="text-center mt-5 mb-3">Edit User</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-info float-right"
                            to="/user">View All Users
                        </Link>
                    </div>
                    <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                onChange={(event)=>{setName(event.target.value)}}
                                value={name}
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="firstname">Firstname</label>
                            <input 
                                onChange={(event)=>{setFirstname(event.target.value)}}
                                value={firstname}
                                type="text"
                                className="form-control"
                                id="firstname"
                                name="firstname"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="cin">CIN</label>
                            <input 
                                onChange={(event)=>{setCin(event.target.value)}}
                                value={cin}
                                type="text"
                                className="form-control"
                                id="cin"
                                name="cin"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">Age</label>
                            <input 
                                onChange={(event)=>{setAge(event.target.value)}}
                                value={age}
                                type="text"
                                className="form-control"
                                id="age"
                                name="age"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input 
                                onChange={(event)=>{setAddress(event.target.value)}}
                                value={address}
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"/>
                        </div>
                        <button 
                            disabled={isSaving}
                            onClick={handleSave} 
                            type="button"
                            className="btn btn-outline-primary mt-3">
                            Save User
                        </button>
                    </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
  
export default UserEdit;