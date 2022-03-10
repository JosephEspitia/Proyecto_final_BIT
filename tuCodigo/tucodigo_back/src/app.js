const express = require("express");
/* const env = require("dotenv"); */
const morgan = require("morgan");
const cors = require('cors')
const env = require("dotenv")

env.config();

require('./database')
const app = express();
const port = process.env.PORT;

console.log(port)

app.use(morgan("dev"));
app.use(express.json())
app.use(cors({ origin: ['http://localhost:4200'] }))

// Rutas
app.use('/api/forum', require('./routes/forum.routes'))
app.use('/api/user', require('./routes/user.routes'))
app.use('/api/courses', require('./routes/courses.routes'))
app.use('/api/contacts', require('./routes/contacts.routes'))

app.listen(port, () => console.log(`Ejecutando api en el puerto ${port}`));