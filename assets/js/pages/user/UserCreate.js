import React, {useState} from 'react';
import { Link } from "react-router-dom";
import ContainerLayout from "../../layouts/ContainerLayout";
import Swal from 'sweetalert2';
import axios from 'axios';
import backIcon from '../../../icons/back.png';

function UserCreate() {
    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [age, setAge] = useState('');
    const [cin, setCin] = useState('');
    const [address, setAddress] = useState('');
    const [isSaving, setIsSaving] = useState(false);
  
    const handleSave = () => {
        setIsSaving(true);
        let formData = new FormData()
        formData.append("name", name)
        formData.append("firstname", firstname)
        formData.append("age", age)
        formData.append("cin", cin)
        formData.append("address", address)
        axios.post('/api/user/', formData)
            .then(function (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'User saved successfully!',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsSaving(false);
                setName('')
                setFirstname('')
                setAge('')
                setCin('')
                setAddress('')
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
        <ContainerLayout>
            <h2 className="text-center mt-5 mb-3 custom-font-amcap text-orange">Create New User</h2>
            <div className="card">
                <div className="card-header">
                    <Link to="/user">
                        <img className="custom-icon-animated" src={backIcon} width="65px" height="65px" alt='back' />
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
                            className="btn btn-orange w-100 mt-3">
                            Save User
                        </button>
                    </form>
                </div>
            </div>
        </ContainerLayout>
    );
}
  
export default UserCreate;