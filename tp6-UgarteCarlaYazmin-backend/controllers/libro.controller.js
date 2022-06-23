const Libro = require('../models/libro');
const libroCtrl = {}

libroCtrl.getLibros = async (req, res) => {
    var libros = await Libro.find();
    res.json(libros);
}

libroCtrl.createLibro = async (req, res) => {
    var libro = new Libro(req.body);
    try {
        await libro.save();
        res.json({
            'status':'1',
            'msg':'Libro guardado.'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando operacion.'
        })
    }   
}

libroCtrl.getLibrosPorDestacado = async (req,res) => {
    var libros = await Libro.find(req.params);
    res.json(libros);
}

libroCtrl.editLibro = async (req, res) => {
    const vlibro =new Libro(req.body);
    try {
        await Libro.updateOne({_id: req.body._id}, vlibro);
        res.json({
            'status':'1',
            'msg':'Libro updated.'
        })
    } catch(error) {
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando la operacion.'
        })
    }
}

libroCtrl.deleteLibro = async (req,res) => {
    try{
        await Libro.deleteOne({_id: req.params.id});
        res.json({
            'status':'1',
            'msg':'Libro deleted.'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando la operacion.'
        })
    }
}

module.exports = libroCtrl;