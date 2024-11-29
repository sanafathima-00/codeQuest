import React from 'react';
import User from '../Use/User';
import './Users.css';
import { useSelector } from 'react-redux';

const UsersList = () => {
    const users=useSelector((state)=>state.usersreducer)

    return (
        <div className="user-list-container">
            {users.map((user) => (
                <User user={user} key={user._id} />
            ))}
        </div>
    );
};

export default UsersList;
