import React from 'react';
import './ListItems.css';

function ListItem({item: { coverSrc, year, brand, model, price, km, location, version, img, href }}) {

  return (
    <a href={href} target='_blank'>
    <div className='listItem-wrap'> 
    
    <img src={img} alt='' />
    <header>
      <h1>{brand}</h1>
      <h2>{model} • {version}</h2>
      <h4>{location}</h4>
      <h4>{km}</h4>
    </header>
    <footer>
      <p>
        <b>{price}</b>
      </p>
    </footer>
  </div>
  </a>
  )
}

export default ListItem;
