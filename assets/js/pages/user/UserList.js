import React,{ useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import CodeContainerLayout from "../../layouts/CodeContainerLayout"
import ContainerLayout from "../../layouts/ContainerLayout"
import Swal from 'sweetalert2'
import axios from 'axios';
import './user.css';
import showIcon from '../../../icons/show.png';
import editIcon from '../../../icons/edit.png';
import deleteIcon from '../../../icons/delete.png';
import backIcon from '../../../icons/back.png';
import addIcon from '../../../icons/add.png';
import InstallSymfony from '../../components/codeSnippets/installSymfony/InstallSymfony';
import BasicCrud from '../../components/codeSnippets/basicCrud/BasicCrud';

function UserList() {
    const  [userList, setUserList] = useState([])
  
    useEffect(() => {
        fetchUserList()
    }, [])
  
    const fetchUserList = () => {
        axios.get('/api/user')
        .then(function (response) {
          setUserList(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`/api/user/${id}`)
                .then(function (response) {
                    Swal.fire({
                        icon: 'success',
                        title: 'User deleted successfully!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    fetchUserList()
                })
                .catch(function (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'An Error Occured!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                });
            }
          })
    }
  
    return (
        <ContainerLayout>
            <h2 className="text-center mt-5 mb-3 custom-font-amcap text-orange">Users List</h2>
            <div className="card">
                <div className="card-header">
                    <Link 
                        to="/">
                            <img className="custom-icon-animated" src={backIcon} width="65px" height="65px" alt='back' />
                    </Link>
                    <Link 
                        className="float-end"
                        to="/user/create">
                            <img className="custom-icon-animated" src={addIcon} width="65px" height="65px" alt='add' />
                    </Link>
                </div>
                <div className="card-body">
            
                    <table className="table table-bordered">
                        <thead>
                            <tr className='text-orange'>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Age</th>
                                <th>CIN</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user, key)=>{
                                return (
                                    <tr key={key}>
                                        <td>{user.name}</td>
                                        <td>{user.firstname}</td>
                                        <td>{user.age}</td>
                                        <td>{user.cin}</td>
                                        <td>{user.address}</td>
                                        <td className='d-flex justify-content-center'>
                                            <Link
                                                to={`/user/show/${user.id}`}
                                                className="btn btn-outline-info mx-1">
                                                <img className="custom-icon" src={showIcon} alt="show"/>
                                            </Link>
                                            <Link
                                                className="btn btn-outline-success mx-1"
                                                to={`/user/edit/${user.id}`}>
                                                <img className="custom-icon" src={editIcon} alt="edit"/>
                                            </Link>
                                            <button 
                                                onClick={()=>handleDelete(user.id)}
                                                className="btn btn-outline-danger mx-1">
                                                <img className="custom-icon" src={deleteIcon} alt="delete"/>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <CodeContainerLayout>
                <InstallSymfony/>
                <BasicCrud />
            </CodeContainerLayout>
        </ContainerLayout>
    );
}
  
export default UserList;