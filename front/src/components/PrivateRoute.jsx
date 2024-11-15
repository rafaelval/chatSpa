import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const { user } = useSelector((state) => state.user);

    return user ? children : <Navigate to="/register" />;
};

export default PrivateRoute;
