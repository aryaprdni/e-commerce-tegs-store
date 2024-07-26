import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log('Effect started');

        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        console.log('Token from URL:', token);

        if (token) {
            localStorage.setItem('authToken', token);
            console.log('Token saved to localStorage:', localStorage.getItem('authToken'));

            navigate('/');
        } else {
            console.log('No token found in URL, redirecting to /login');
            navigate('/login');
        }

        console.log('Effect completed');
    }, [navigate]);

    return <div>Loading...</div>;
};

export default AuthSuccess;
