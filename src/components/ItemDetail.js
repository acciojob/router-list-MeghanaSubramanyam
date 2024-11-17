import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ items }) => {
    const { itemId } = useParams();
    const item = items.find(item => item.id === itemId);

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </div>
    );
};

export default ItemDetail;

