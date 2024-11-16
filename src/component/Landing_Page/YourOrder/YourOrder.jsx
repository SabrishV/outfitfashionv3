"use client";
import React, { useState } from 'react';

export default function OrderList() {
  // Sample order data
  const [orders] = useState([
    {
      id: 1,
      image: '/checkout/dress1.svg',
      title: 'OUTFITS WOMEN CHECKED CASUAL SHIRT',
      color: 'GREEN AND RED',
      orderDate: 'APR 31',
      deliveryDate: 'FEB 30',
      price: 590.0,
      status: 'Expected'
    },
    {
      id: 2,
      image: '/checkout/dress2.svg',
      title: 'OUTFITS MEN CHECKED FORMAL SHIRT',
      color: 'WHITE',
      orderDate: 'APR 31',
      deliveryDate: 'FEB 30',
      price: 590.0,
      status: 'Expected'
    },
    {
      id: 3,
      image: '/checkout/dress3.svg',
      title: 'OUTFITS WOMEN FROK',
      color: 'YELLOWISH GOLD',
      orderDate: 'APR 31',
      deliveryDate: 'FEB 30',
      price: 590.0,
      status: 'Expected'
    },
    {
      id: 4,
      image: '/checkout/dress3.svg',
      title: 'OUTFITS WOMEN FROK',
      color: 'YELLOWISH GOLD',
      orderDate: 'APR 31',
      deliveryDate: 'FEB 30',
      price: 590.0,
      status: 'Delivered'
    }
  ]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      {orders.map((order) => (
        <div key={order.id} style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f7e8f6', // Light pink background
          borderRadius: '15px',
          padding: '20px',
          marginBottom: '20px',
          width: '90%',
          maxWidth: '1200px' // Limit the max width to keep the layout consistent
        }}>
          {/* Product Image */}
          <img src={order.image} alt="Product" style={{
            width: '100px',
            height: '100px',
            borderRadius: '10px',
            marginRight: '20px'
          }} />
          
          {/* Order Details */}
          <div style={{ flex: 1 }}>
            <h3 style={{ margin: 0, fontSize: '16px' }}>{order.title}</h3>
            <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>COLOR: {order.color}</p>
            
            <button style={{
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>Cancel Order</button>
          </div>

          {/* Order Info and Track Button */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginRight: '20px'
          }}>
            <p style={{ fontSize: '12px', color: '#777' }}>ORDERED ON {order.orderDate}</p>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: '#777' }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: order.status === 'Delivered' ? 'green' : '#ddd',
                marginRight: '5px'
              }}></span>
              {order.status === 'Delivered' ? 'DELIVERED ON' : 'EXPECTED DATE'} {order.deliveryDate}
            </div>
          </div>

          {/* Price and Track Button */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '16px', fontWeight: 'bold' }}>Paid : ₹{order.price.toFixed(1)}</p>
            <button style={{
              backgroundColor: '#000',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              padding: '8px 16px',
              cursor: 'pointer',
              fontSize: '14px'
            }}>Track your order</button>
          </div>
        </div>
      ))}
    </div>
  );
}
