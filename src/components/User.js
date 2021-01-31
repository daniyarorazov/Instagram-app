import React from 'react';

const User = (props) => {
    const {min, src, alt, name} = props;

    return (
        <a href="#" className={min ? "user min" : "user"}>
            <img src={src} alt={alt}></img>
            <div>{name}</div>
        </a>
    )
}

export default User;