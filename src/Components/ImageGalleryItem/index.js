import React from 'react'

function ImageGalleryItem({items, onClick}){

    return (
       <>
       {items.map(item => 
          <li  
             key ={item.id} 
             className="ImageGalleryItem"
             >
             <img 
                 src={item.webformatURL} 
                 alt={item.tags} 
                 className="ImageGalleryItem-image" 
                 onClick={ ()=> onClick(item.largeImageURL)} />
          </li>)}
       </>
    )
}

export default ImageGalleryItem;

