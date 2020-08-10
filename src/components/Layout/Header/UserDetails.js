import React from 'react';

const UserDetails = (props) => {
    
    const { name} = props
    return (
        <p className="user-details">Welcome
            <span>
                {
                    name === null ? '--' : name.user.fullName
                }
            </span>
        </p>
    )
}


export default UserDetails