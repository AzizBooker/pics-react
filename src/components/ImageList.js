import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard'

const ImageList =(props)=>{

    //!Adding a key prop prevents react from having to rerender ever item put key property on root element 
    console.log(props.images)
    const images=props.images.map((image)=>{
        return <ImageCard image={image} key={image.id}/>
        
    });

    return (
        <div className='image-list'>{images}</div>
    )
}

export default ImageList;