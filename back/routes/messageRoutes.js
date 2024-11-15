const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

// Enviar un mensaje
router.post('/send', async (req, res) => {
    const { senderId, receiverId, message } = req.body;

    try {
        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });

        await newMessage.save();
        res.status(201).json({ msg: 'Mensaje enviado', message: newMessage });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error del servidor' });
    }
});

// Obtener mensajes entre dos usuarios
router.get('/chat/:userId1/:userId2', async (req, res) => {
    const { userId1, userId2 } = req.params;

    try {
        const messages = await Message.find({
            $or: [
                { senderId: userId1, receiverId: userId2 },
                { senderId: userId2, receiverId: userId1 }
            ]
        }).sort({ sentDate: 1 });

        res.json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error del servidor' });
    }
});

module.exports = router;