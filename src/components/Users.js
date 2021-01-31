import React from 'react';
import User from './User';

const Users = () => {
    return (
        <div className="right">
            <User 
                src="https://images.unsplash.com/photo-1517265035603-faefa167335b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="man"
                name="Scott"
            />
            <div className="users__block">
                <User 
                    src="https://images.unsplash.com/photo-1517265035603-faefa167335b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="man"
                    name="Scott"
                    min
                />
                <User 
                    src="https://images.unsplash.com/photo-1517265035603-faefa167335b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="man"
                    name="Scott"
                    min
                />
                <User 
                    src="https://images.unsplash.com/photo-1517265035603-faefa167335b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="man"
                    name="Scott"
                    min
                />
                <User 
                    src="https://images.unsplash.com/photo-1517265035603-faefa167335b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="man"
                    name="Scott"
                    min
                />
            </div>
        </div>
    )
}

export default Users;