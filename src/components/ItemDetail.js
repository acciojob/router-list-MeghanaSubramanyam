import React from 'react';
import { useParams, Link } from 'react-router-dom';

const items = [
    { id: '1', name: 'Item 1', description: 'This is the description for Item 1' },
    { id: '2', name: 'Item 2', description: 'This is the description for Item 2' },
    { id: '3', name: 'Item 3', description: 'This is the description for Item 3' },
];

function ItemDetail() {
    const { id } = useParams();
    const item = items.find((item) => item.id === id);

    if (!item) {
        return <p>Item not found</p>;
    }

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <Link to="/">Back to Item List</Link>
        </div>
    );
}

export default ItemDetail;

