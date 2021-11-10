import React from 'react';

function User({ userDetails }) {
    if (!userDetails) {
        return <h3>Loading...</h3>
    }

    return (
        <div className='userContainer'>
            <h2>{userDetails.first_name} {userDetails.last_name}</h2>
            <p>Email: {userDetails.email}</p>
            <p>Password: {userDetails.password}</p>
            <p>Terms of Service: Accepted</p>
        </div>
    )
};

export default User;