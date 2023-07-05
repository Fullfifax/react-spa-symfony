import React from 'react';
import CodeBlock from '../../codeBlock/CodeBlock';

const UserListTable = () => {
  const codeSnippet = `
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
                                    to={\`/user/show/\${user.id}\`}
                                    className="btn btn-outline-info mx-1">
                                    <img className="custom-icon" src={showIcon} alt="show"/>
                                </Link>
                                <Link
                                    className="btn btn-outline-success mx-1"
                                    to={\`/user/edit/\${user.id}\`}>
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
    </div>`;

    return <CodeBlock code={codeSnippet} />;
};

export default UserListTable;