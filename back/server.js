const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const messageRoutes = require('./routes/messageRoutes');
const http = require('http');
const socketIo = require('socket.io');

require('dotenv').config();

// Conectar a la base de datos
connectDB();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:5173', // URL del frontend
        methods: ['GET', 'POST'],
    },
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/messages', messageRoutes);

// Configuración de Socket.io
io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');

    // Manejar mensaje enviado desde el cliente
    socket.on('chat message', (msg) => {
        console.log('Mensaje recibido:', msg);

        // Reenviar mensaje a todos los clientes
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

// Iniciar el servidor
const PORT = process.env.PORT || 5173;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
