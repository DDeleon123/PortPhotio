import React from 'react';
import p1 from './photos/1.jpg'
import p2 from './photos/2.jpg'
import p3 from './photos/3.jpg'
import p4 from './photos/4.jpg'
import p5 from './photos/5.jpg'
import p6 from './photos/6.jpg'
import p7 from './photos/7.jpg'
import p8 from './photos/8.jpg'
import p9 from './photos/9.jpg'
import p10 from './photos/10.jpg'
import Photo from '../photocomp';

// Define the props interface
interface PhotoGridProps{
}

// Update the component to accept props
const PhotoGrid: React.FC<PhotoGridProps> = (props) => {
    let photos = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]
    return <div>
        {photos.map((image, index) => (
            <Photo url={image.src} width={image.width} height={image.height} alt="hi" />
        ))}
    </div>;
};

export default PhotoGrid;