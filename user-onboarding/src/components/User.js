import React from 'react';

function User({ userDetails }) {
    if (!userDetails) {
        return <h3>Loading...</h3>
    }

    const conditional = (title, value) => {
        if (value) {
            return (<p>{title}: {value}</p>);
        }
        else { 
            return null; 
        }
    };

    return (
        <div className='userContainer'>
            <h2>{userDetails.first_name} {userDetails.last_name}</h2>
            <p>Email: {userDetails.email}</p>
            {conditional('Password', userDetails.password)}
            {conditional('Terms of Service', 'Accepted')}
        </div>
    )
};

export default User;