import React from 'react';

const Image = (props) => {
    return (
        <div className="nasa-img">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.hdurl} />
            <p>{props.photo.explanation}</p>
        </div>
    )
}

export default Image;