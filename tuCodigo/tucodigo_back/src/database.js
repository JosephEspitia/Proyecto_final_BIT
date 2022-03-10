const mongoose = require('mongoose')
/* const env = require("dotenv"); */
const env = require("dotenv")

/* env.config() */
env.config()
const uri = process.env.MONGO_ATLAS

//, {useNewUrlParser: true, useUnifiedTopology: true}
mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}) .then((db) => console.log(`Conexion a DB exitosa`))
    .catch((err) => console.log(err))

   
module.exports = mongoose