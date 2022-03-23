const Curso = require("../Models/courses");

const getCurses = async (req, res) => {
  const Curses = await Curso.find();

  res.json(Curses);
};

const getOneCurse = async (req, res) => {
  const { numCurse } = req.params;
  const curses = await Curso.find({ numEjercise: numCurse });

  res.status(201).json({ curses });
};

const createCurses = async (req, res) => {
  try {
    const { name, numEjercise, ejercise } = req.body;
    const curse = new Curso({
      name,
      numEjercise,
      ejercise,
    });

    await curse.save();
    res
      .status(201)
      .json({
        status: `El Curso ${name}, fue creado con exito`,
        created: true,
      });
  } catch (err) {
    console.log(err);

    res
      .status(203)
      .json({ status: `Se Produjo un error, ${err}`, created: false });
  }
};

const deleteCourses = async (req, res) => {
  const id = req.params.courseId;
    await Courses.findByIdAndDelete(id);
    res.status(200).json({ msj: "Curso eliminado", user: req.tuCodigoCom });

};

const updateCourses = async (req, res) => {
  try {
    const id = req.params.coursesId;
    const updated = await Courses.findByIdAndUpdate(id, { $set: req.body });
    res.status(201).json(updated);
  } catch (error) {
    res.status(201).json({ msj: "Actualizacion fallida", error });
  }
};

module.exports = {
  getCurses,
  getOneCurse,
  createCurses,
  deleteCourses,
  updateCourses
};
