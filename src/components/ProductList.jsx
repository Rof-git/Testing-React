import { useState } from 'react';

export function ProductList({  }) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  return (
    <div>
        <h4>Current Shopping List</h4>
    </div>
  );
}