import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail';

const items = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' }
];

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ItemList items={items} />} />
                <Route path="/item/:itemId" element={<ItemDetail items={items} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
