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

module.exports = {
  getCurses,
  getOneCurse,
  createCurses,
};
