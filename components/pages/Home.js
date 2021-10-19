import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);
    
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data);
        //console.log(result);

    }
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    };
    return (
        <div className="container">
            <div className="py-4">
                <h1>Home page</h1>
            </div>
            <table class="table caption-top border shadow">
                <caption>List of users</caption>
                <thead >
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {users.map((user, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td id="action">
                                
                                    <Link class="btn btn-primary " to={`/users/${user.id}`}>View</Link>
                                    <Link class="btn btn-outline-primary </td>" to={`/users/edit/${user.id}`}>
                                    Edit
                                    </Link>
                                    <Link class="btn btn-danger"  onClick={()=>deleteUser(user.id)} to="/">Delete</Link>

                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    //</div >
);
};
export default Home;