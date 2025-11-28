import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCart();
    const navigate = useNavigate();

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <button onClick={() => navigate('/dashboard')} style={{ marginBottom: '20px' }}>
                &larr; Back to Dashboard
            </button>
            <h2>Your Shopping Cart</h2>

            {cart.length === 0 ? (
                <div style={{ textAlign: 'center', marginTop: '50px' }}>
                    <h3>Your cart is empty</h3>
                    <button onClick={() => navigate('/dashboard')}>Start Shopping</button>
                </div>
            ) : (
                <div>
                    <div style={{ marginBottom: '20px' }}>
                        {cart.map((item, index) => (
                            <div key={index} style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottom: '1px solid #eee',
                                padding: '15px 0'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                    <img src={item.image} alt={item.title} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                                    <div>
                                        <h4 style={{ margin: '0 0 5px 0' }}>{item.title}</h4>
                                        <p style={{ margin: 0, color: '#666' }}>${item.price.toFixed(2)}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromCart(index)}
                                    style={{
                                        backgroundColor: '#ff4444',
                                        color: 'white',
                                        border: 'none',
                                        padding: '5px 10px',
                                        borderRadius: '4px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        borderTop: '2px solid #333',
                        paddingTop: '20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <h3>Total: ${total.toFixed(2)}</h3>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button onClick={clearCart} style={{ backgroundColor: '#666' }}>Clear Cart</button>
                            <button style={{ backgroundColor: '#4CAF50', color: 'white' }}>Checkout</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
