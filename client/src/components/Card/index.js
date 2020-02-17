import React from 'react';

const Card = ({name, id, image, click}) => (
    <img alt={name} id={id} src={image} onClick={click}/>
)
export default Card;