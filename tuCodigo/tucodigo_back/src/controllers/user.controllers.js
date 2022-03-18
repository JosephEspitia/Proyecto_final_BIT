const User = require("../Models/user");
const jwt = require("jsonwebtoken");
const env = require("dotenv");

env.config();

const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
  };

  const getOneUser = async (req, res) => {
    
    try {
      const id = req.params.userId;
      const user = await User.findById(id);
       res.status(200).json(user ? user : "El usuario no existe");
    } catch (error) {
      res.status(200).json({ msj: "Error al consultar el id", error });
    }
    
  };

  const createUsers = async (req, res) => {
    try {
      const user = new User(req.body);
      await user.save();
      res.status(201).json({ status: "Usuario creado correctamente" });
      
    } catch (error) {
      console.log(error);
      res.status(203).json({ status: "Usuario no creado correctamente", error });
    }
  };

  const updateUsers = async (req, res) => {
    try {
      const id = req.params.userId;
      const updated = await User.findByIdAndUpdate(id, { $set: req.body });
      res.status(201).json(updated);
    } catch (error) {
      res.status(201).json({ msj: "Actualizacion fallida", error });
    }
  };

  const deleteUser = async (req, res) => {
    const id = req.params.userId;
    await User.findByIdAndDelete(id);
    res.status(200).json({ msj: "Usurio eliminado" });
  };

  const login = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const user = await User.findOne({ email });

      if (!email || !password) return res.status(401).send('El nombre o el correo no existen');
  
      if(user){
        if (password === user.password) {
            
          const token = jwt.sign(
            {
              user_id: user._id,
              name: user.name,
              lastname: user.lastname,
              email: user.email,
              photoUser: user.photoUser,
              actualCourse: user.actualCourse,
              goals: user.goals,
              permissionsAdmin: user.permissionsAdmin,
              permissionsClient: user.permissionsClient,
              permissionsVerified: user.permissionsVerified
            },
            process.env.JWT_SECRET_KEY,
            { expiresIn: "2h" }
          );
          
          return res.status(200).json({ status: "Sesion iniciada", token });
        } 
  
        throw "Credentials are inavlid";
      }
  
      throw "Usuario no existe";
    } catch (err) {
      res.status(401).json({err});
    }
  };

  module.exports = {
    getUsers,
    getOneUser,
    createUsers,
    deleteUser,
    login,
    updateUsers
  }
