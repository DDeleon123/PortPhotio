import React from 'react';

interface PhotoProps{
    url: string;
    alt: string;
    width: number;
    height: number;
}

function Photo(props:PhotoProps) {
    return( 
        <img
            src= {props.url}
            alt={props.alt}
            width={props.width}
            height={props.height}
        />
    )
};

export default Photo;
