const Contacts = require("../Models/contacts")

const createRequest = async (req, res) => {
    try {
      const contacts = new Contacts(req.body);
      await contacts.save();
      res.status(201).json({ status: "requerimiento creado correctamente" });
      //throw
    } catch (error) {
      console.log(error);
      res.status(203).json({ status: "requerimiento no creado correctamente", error });
    }
  };

const getRequest = async (req, res) => {
    const contacts = await Contacts.find();
    res.status(200).json(contacts);
}

const getOneRequest = async (req, res) => {
    try {
      const id = req.params.contactstId;
      const contacts = await Contacts.findById(id);
      res.status(200).json(contacts ? contacts : "El requerimiento no existe");
    } catch (error) {
      res.status(200).json({ msj: "Error al consultar el id", error });
    }
  };

  const deleteRequest = async(req,res)=> {
    try {
      const id = req.params._id;
    await Contacts.findByIdAndDelete(id);
    res.status(200).json({msj: 'Mensaje eliminado'});
    } catch (error) {
      console.log(error);
    }
  }
  const upDateRequest= async(req, res)=> {
try {
  const id = req.params.contactId;
  console.log(id);
  const upDate = await Contacts.findByIdAndUpdate(id, {$set:req.body});
  res.status(200). json(upDate);
} catch (error) {
  console.log(error)
}
  }

  module.exports = {
      
      getRequest,
      getOneRequest,
      createRequest,
      deleteRequest,
      upDateRequest
  }