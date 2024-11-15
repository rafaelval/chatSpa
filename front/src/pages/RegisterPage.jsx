import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../redux/actions/userActions';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [formData, setFormData] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        if (user) {
            navigate('/chat');
        }
    }, [user, navigate]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(registerUser(formData));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" placeholder="Nombre" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} />
            <button type="submit" disabled={loading}>Registrarse</button>
            {error && <p>Error: {error}</p>}
        </form>
    );
};

export default RegisterPage;
