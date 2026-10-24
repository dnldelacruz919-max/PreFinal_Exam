import React from 'react';

const initialProducts = [
  {
    id: 1,
    name: 'Ocean Fresh Cologne',
    category: 'Fresh',
    price: 150,
    quantity: 10,
    description: 'A refreshing scent for everyday use.',
    specification: '100ml bottle, fresh fragrance',
    rating: 4.5,
    image: 'https://placehold.co/200x150?text=Ocean+Fresh'
  },
  {
    id: 2,
    name: 'Sweet Bloom Cologne',
    category: 'Floral',
    price: 180,
    quantity: 3,
    description: 'A sweet floral fragrance for daily wear.',
    specification: '100ml bottle, floral fragrance',
    rating: 4.7,
    image: 'https://placehold.co/200x150?text=Sweet+Bloom'
  },
  {
    id: 3,
    name: 'Midnight Musk Cologne',
    category: 'Woody',
    price: 220,
    quantity: 20,
    description: 'A warm musk scent for special occasions.',
    specification: '100ml bottle, musk fragrance',
    rating: 4.8,
    image: 'https://placehold.co/200x150?text=Midnight+Musk'
  }
];

function App() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Cologne Product Management App</h1>
        <p>Welcome to our Cologne Product Management System!</p>
  
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {initialProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '15px',
                width: '200px'
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '100%' }}
              />
  
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₱{product.price.toFixed(2)}</p>
              <p>Quantity: {product.quantity}</p>
              <p>
                Subtotal: ₱
                {(product.price * product.quantity).toFixed(2)}
              </p>
  
              {product.quantity < 5 && (
                <p style={{ color: 'red', fontWeight: 'bold' }}>
                  Low Stock!
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

export default App;