const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config();

const verifyToken = (req, res, next) => {
  /* console.log(req.headers.authorization) */
/*   if (!req.headers.authorization) {
    return res.status(401).send("no hay token pri");
  }

  const token = req.headers.authorization.split(" ")[1];
  if (token == "null") {
    return res.status(401).send("token nulo pri");
  }

  const payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
  req.TuCodigocom = payload;
  return next() */

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
