import React, { Component } from 'react';
import Image from './Image';

class Gallery extends Component {


// 24 images total
renderImages = () => {
    let pictures = [];
    let photos = this.props.photos;

    //https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg

    for (let i = 0; i < photos.length; i++) {
        pictures.push(
            <Image 
                key={i}
                farmId={this.props.photos[i].farm}
                id={this.props.photos[i].id}
                secret={this.props.photos[i].secret}
                serverId={this.props.photos[i].server}
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