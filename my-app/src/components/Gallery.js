import React, { Component } from 'react';
import Image from './Image';

class Gallery extends Component {
    state = {
        images: 0
    };


// 24 images total
renderImages = () => {
    let pictures = [];
    let maxImages = 24;

    for (let i = 0; i < maxImages; i++) {
        pictures.push(
            <Image 
                key={i}
            />
        );
    }
    return pictures;
}

    render() {
        return (
            <ul className='api-render-images'>
                { this.renderImages() }
            </ul>
        );
    }
}
// A single Gallery component that can be reused to 
//display the sets of images for each of the three 
//topic categories you wish to display, like sunsets, 
//terfalls and rainbows, for example.

export default Gallery;