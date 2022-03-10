const Courses = require("../Models/courses");

const createCourse = async (req, res) => {
    try {
      const courses = new Courses(req.body);
      await courses.save();
      res.status(201).json({ status: "Curso creado correctamente" });
      //throw
    } catch (error) {
      console.log(error);
      res.status(203).json({ status: "el curso no ha sido creado", error });
    }
  };

  const getCourses = async (req, res) => {
    const courses = await Courses.find();
    res.status(200).json(courses);
  };
  // como asignarle permisos de administrador a los cursos

  const updateCourses = async (req, res) => {
    try {
      const id = req.params.coursesId;
      const updated = await Courses.findByIdAndUpdate(id, { $set: req.body });
      res.status(201).json(updated);
    } catch (error) {
      res.status(201).json({ msj: "Actualizacion fallida", error });
    }
  };

  const getOneCourses = async (req, res) => {
    try {
      const id = req.params.courseId;
      const courses = await Courses.findById(id);
      res.status(200).json(courses ? courses : "El curso no existe");
    } catch (error) {
      res.status(200).json({ msj: "Error al consultar el id", error });
    }
  };

  const deleteCourses = async (req, res) => {
    const id = req.params.courseId;
      await Courses.findByIdAndDelete(id);
      res.status(200).json({ msj: "Curso eliminado", user: req.tuCodigoCom });
   
  };

  module.exports = {
      createCourse,
      getCourses,
      updateCourses,
      getOneCourses,
      deleteCourses

  }