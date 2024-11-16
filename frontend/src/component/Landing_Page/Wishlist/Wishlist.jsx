"use client";
import React, { useState } from 'react';

export default function ProductGrid() {
  // Sample product data
  const [products] = useState([
    { id: 1, image: '/checkout/dress1.svg', price: 290.0 },
    { id: 2, image: '/checkout/dress2.svg', price: 290.0 },
    { id: 3, image: '/checkout/dress3.svg', price: 290.0 },
    { id: 4, image: '/checkout/dress3.svg', price: 290.0 },
    { id: 5, image: '/checkout/dress1.svg', price: 290.0 },
    { id: 6, image: '/checkout/dress2.svg', price: 290.0 },
  ]);

  // Export function to save products data as JSON
  const exportData = () => {
    const dataStr = JSON.stringify(products, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'products.json';
    link.click();
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Product Gallery</h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px', // Reduced gap between columns
        justifyItems: 'center',
        maxWidth: '1600px',
        margin: '0 auto'
      }}>
        {products.map((product) => (
          <div key={product.id} style={{
            position: 'relative',
            border: '1px solid #ddd',
            padding: '15px',
            borderRadius: '8px',
            width: '400px', // Increased card width for larger images
            textAlign: 'center'
          }}>
            <img src={product.image} alt="Product" style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '4px' }} />
            
            {/* Delete Icon in top-right corner */}
            <span style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '5px',
              cursor: 'pointer'
            }}>🗑️</span>

            {/* Flex container for Buy now button and price */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '10px'
            }}>
              
              <p style={{ fontSize: '25px', margin: '0' }}>₹{product.price.toFixed(1)}</p>
              <button style={{
                backgroundColor: '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '5px 15px',
                cursor: 'pointer'
              }}>Buy now</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={exportData} style={{
        marginTop: '20px',
        backgroundColor: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        padding: '10px 20px',
        cursor: 'pointer'
      }}>
        Export Products
      </button>
    </div>
  );
}
