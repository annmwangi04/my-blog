import React from 'react';

const items = [
    { id: 1, name: 'Item 1', description: 'This is the first item.' },
    { id: 2, name: 'Item 2', description: 'This is the second item.' },
    { id: 3, name: 'Item 3', description: 'This is the third item.' }
];

function MyComponent() {
    return (
        <div>
            <h1>Welcome to My Component</h1>
            <p>This is a simple React component that displays a heading, a paragraph, and a list of items.</p>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyComponent;
