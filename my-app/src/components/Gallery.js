import React, { Component } from 'react';
import Image from './Image';


//The gallery wil create each image and push them then generate a new image and do this till it matchs the length of photos.length which would be 24 images
class Gallery extends Component {

    

// 24 images total
renderImages = () => {
    let pictures = [];
    let photos = this.props.photos;

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

//The render below will take the image created and display to the screen up to 24 images
    render() {
        return (
            <div className="photo-container">
            <ul className='api-render-images'>
                { this.renderImages() }
            </ul>
            </div>
        );
    }
}

export default Gallery;