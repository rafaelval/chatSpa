como hacer el back en mongodb con express:

1. Crea una carpeta para tu proyecto
2. Inicializa un proyecto Node.js:
      npm init -y
3. Instala las dependencias necesarias:
      npm install express mongoose body-parser bcryptjs jsonwebtoken cors socket.io
      npm install dotenv
4. Crea la siguiente estructura de carpetas y archivos:
      /chat-app-backend
            ├── server.js
            ├── models
            │   ├── Usuario.js
            │   └── Mensaje.js
            ├── routes
            │   ├── usuarioRoutes.js
            │   └── mensajeRoutes.js
            ├── config
            │   └── db.js
            └── .env
5. Crea el archivo config/db.js para configurar la conexión a la base de datos
6. Definir los Modelos
      Modelo de Usuario (models/Usuario.js)
      Modelo de Mensaje (models/Mensaje.js)
7. Definir las Rutas
      Rutas de Usuario (routes/usuarioRoutes.js)
      Rutas de Mensaje (routes/mensajeRoutes.js)
8. Configurar el Servidor (server.js)
Ahora, vamos a configurar el archivo principal del servidor (server.js)
9. Crea un archivo .env en la raíz de tu proyecto y agrega las siguientes variables:
      MONGO_URI=mongodb://<usuario>:<contraseña>@cluster0.mongodb.net/chatApp?retryWrites=true&w=majority
      JWT_SECRET=tu_clave_secreta
Asegúrate de reemplazar <usuario> y <contraseña> con tus credenciales de MongoDB.
10. Ejecutar el Servidor
Para ejecutar tu servidor, usa el siguiente comando:
node server.js
11. Probar las Rutas
Ahora que tienes el backend configurado, puedes probar las siguientes rutas usando herramientas como Postman o Insomnia:

Registrar un usuario:

POST /api/usuarios/registrar
Body:
      {
    "nombre": "Juan Pérez",
    "email": "juan.perez@example.com",
    "contraseña": "mi_contraseña"
      }

Iniciar sesión:

POST /api/usuarios/login
Body:
      {
    "email": "juan.perez@example.com",
    "contraseña": "mi_contraseña"
      }

Enviar un mensaje:

POST /api/mensajes/enviar
Body:
      {
    "remitenteId": "ID_del_remitente",
    "destinatarioId": "ID_del_destinatario",
    "mensaje": "Hola, ¿cómo estás?"
      }

Obtener mensajes entre dos usuarios:

GET `/api/mensajes/conversacion/ID_del_usuario