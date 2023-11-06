
const ganres = require('../moduls/Ganres.model')

module.exports.ganresController = {
   addGanres: (req, res) => {
    ganres.create({
        nameGanre: req.body.nameGanre , 
    description: req.body.description
    }).then((data) => {res.json(data)})
    .catch((error) => {res.json(error)})
   }, 
 deleteGanres:(req,res) => {
    ganres.findByIdDelete(req.params.id)
    .then((data) => {res.json(data)})
    .catch((error) => {res.json(error)})
 },
 getGanres: (req,res) => {
    ganres.find()
    .then((data) => {res.json(data)})
    .catch((error) => {res.json(error)})
 }
}