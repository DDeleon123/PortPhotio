import React from 'react';

interface PhotoProps{
    url: string;
    alt: string;
}

function Photo(props:PhotoProps) {
    return( 
        <img
            src= {props.url}
            alt={props.alt}
            width={100}
            height={100}
        />
    )
};

export default Photo;
