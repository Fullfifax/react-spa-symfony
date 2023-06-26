import React,{ useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import Layout from "../../components/layouts/Layout"
import Swal from 'sweetalert2'
import axios from 'axios';
 
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
        <Layout>
           <div className="container">
            <h2 className="text-center mt-5 mb-3">Users List</h2>
                <div className="card">
                    <div className="card-header">
                        <Link 
                            className="btn btn-outline-primary"
                            to="/user/create">Create New User
                        </Link>
                    </div>
                    <div className="card-body">
              
                        <table className="table table-bordered">
                            <thead>
                                <tr>
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
                                            <td>
                                                <Link
                                                    to={`/user/show/${user.id}`}
                                                    className="btn btn-outline-info mx-1">
                                                    Show
                                                </Link>
                                                <Link
                                                    className="btn btn-outline-success mx-1"
                                                    to={`/user/edit/${user.id}`}>
                                                    Edit
                                                </Link>
                                                <button 
                                                    onClick={()=>handleDelete(user.id)}
                                                    className="btn btn-outline-danger mx-1">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
  
export default UserList;