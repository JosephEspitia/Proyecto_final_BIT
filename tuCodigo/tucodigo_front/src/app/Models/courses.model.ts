export class Curses{
_id:string
name:string
numEjercise:number
ejercise:string


  constructor(
    _id='',
    name='',
    numEjercise=0,
    ejercise=''
  )
  {
    this._id=_id
    this.name=name
    this.numEjercise=numEjercise
    this.ejercise=ejercise
  }
}
