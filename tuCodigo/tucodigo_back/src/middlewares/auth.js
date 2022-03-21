const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config();

const verifyToken = (req, res, next) => {

   try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      throw "No puedes ingresar sin un token!";
    }
    else if (token == "null") {
      return res.status(401).json({msj:"token es nulo"});
    }
    else {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.TuCodigocom = decoded; 
    }

    return next();
  } catch (error) {
    res.status(401).json({ error });
  }
};

module.exports = verifyToken;
