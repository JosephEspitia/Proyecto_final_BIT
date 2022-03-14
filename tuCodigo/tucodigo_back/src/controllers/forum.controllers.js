const Forum = require("../Models/forum")
const env = require("dotenv");

env.config();

const getForum = async (req, res) => {
    const forums = await Forum.find();
    //console.log(forums)
    res.status(200).json(forums);
  };

  const getOneForum = async (req, res) => {
    try {
      const id = req.params.forumId;
      const forum = await Forum.findById(id);
      res.status(200).json(forum ? forum : "El foro no existe");
    } catch (error) {
      res.status(200).json({ msj: "Error al consultar el id del foro", error });
    }
  };

  const createForum = async (req, res) => {
    try {
      const forum = new Forum(req.body);
      await forum.save();
      res.status(201).json({ status: "Pregunta de foro creada correctamente" });
      //throw
    } catch (error) {
      console.log(error);
      res.status(203).json({ status: "La pregunta del foro no ha sido creada", error });
    }
  };
  const updateForum = async (req, res) => {
    try {
      const id = req.params.forumId;
      const updated = await Forum.findByIdAndUpdate(id, { $set: req.body });
      res.status(201).json(updated);
    } catch (error) {
      res.status(201).json({ msj: "Actualizacion fallida", error });
    }
  };

  const deleteForum = async (req, res) => {
    const id = req.params.forumId;
    
      await Forum.findByIdAndDelete(id);
      res.status(200).json({ msj: "Foro eliminado", user: req.tuCodigocom });
   
  };

  module.exports = {
      getForum,
      getOneForum,
      createForum,
      deleteForum,
      updateForum

  }