import React from 'react';

const ItemDetail = ({ item }) => (
  <ul>
    <li><h2>{ item.name }</h2></li>
    <li>Price: { item.price }</li>
    <li>Happiness: { item.happiness }</li>
  </ul>
);

export default ItemDetail;