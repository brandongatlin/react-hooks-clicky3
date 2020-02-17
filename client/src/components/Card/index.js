import React from 'react';

const Card = (props) => (
    <img alt={props.name} id={props.id} src={props.image} onClick={props.click}/>
)
export default Card;