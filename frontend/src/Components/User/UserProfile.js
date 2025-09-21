import React, { useState, useContext, useEffect } from 'react';
import { CartContext } from '../CartContext';
import apiService from '../../services/apiService';

function UserProfile() {
    const { userId } = useContext(CartContext);
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (userId) {
            loadUserDetails();
        }
    }, [userId]);

    const loadUserDetails = async () => {
        try {
            setLoading(true);
            const user = await apiService.getUserDetails(userId);
            if (user) {
                setUserDetails({
                    name: user.name || '',
                    email: user.email || '',
                    phone: user.phone || '',
                    address: user.address || ''
                });
            }
        } catch (error) {
            console.error('Failed to load user details:', error);
            setError('Unable to load user information');
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError(null);
            setSuccess(false);

            const userData = {
                uniqueId: userId,
                name: userDetails.name,
                email: userDetails.email,
                phone: userDetails.phone,
                address: userDetails.address
            };

            await apiService.saveUser(userData);
            setSuccess(true);
            
            setTimeout(() => setSuccess(false), 3000);
        } catch (error) {
            console.error('Failed to save user information:', error);
            setError('Failed to save user information, please try again later');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h2>User Information</h2>
            <p>User ID: {userId}</p>
            
            {error && (
                <div style={{ color: 'red', marginBottom: '10px' }}>
                    {error}
                </div>
            )}
            
            {success && (
                <div style={{ color: 'green', marginBottom: '10px' }}>
                    User information saved successfully!
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={userDetails.name}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={userDetails.email}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                        required
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Phone:</label>
                    <input
                        type="tel"
                        name="phone"
                        value={userDetails.phone}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', marginTop: '5px' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label>Address:</label>
                    <textarea
                        name="address"
                        value={userDetails.address}
                        onChange={handleInputChange}
                        style={{ width: '100%', padding: '8px', marginTop: '5px', minHeight: '80px' }}
                    />
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    style={{
                        backgroundColor: '#007bff',
                        color: 'white',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                >
                    {loading ? 'Saving...' : 'Save User Information'}
                </button>
            </form>
        </div>
    );
}

export default UserProfile;
