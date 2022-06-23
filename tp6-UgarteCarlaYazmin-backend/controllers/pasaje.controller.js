const Pasaje = require('../models/pasaje')
const pasajeCtrl = {}

pasajeCtrl.getPasajeId = async (req, res) => {
    const pasaje = await Pasaje.findById(req.params.id).populate('pasajero');
    res.json(pasaje);
}

pasajeCtrl.getPasajes = async (req, res) => {
    const pasajes = await Pasaje.find().populate('pasajero').exec();
    res.json(pasajes);
}

pasajeCtrl.createPasaje = async (req, res) => {
    var pasaje = new Pasaje(req.body);
    try{
        await pasaje.save();
        res.json({
            'status':'1',
            'msg':'Pasaje guardada.'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando operacion.'
        })
    }
}

pasajeCtrl.getPasajePorCategoria = async (req, res) => {
    //const criterio={'categoriaPasajero':'menor'};
    const pasaje = await Pasaje.find(req.params).populate('pasajero');
    console.log(req.params);
    res.json(pasaje);
}

pasajeCtrl.editPasaje = async (req, res) => {
    const vpasaje = new Pasaje(req.body);
    try {
        await Pasaje.updateOne({_id: req.body._id}, vpasaje);
        res.json({
            'status':'1',
            'msg':'Pasaje updated.'
        })
    } catch(error) {
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando la operacion.'
        })
    }
}

pasajeCtrl.deletePasaje = async (req, res) => {
    try{
        await Pasaje.deleteOne({_id: req.params.id});
        res.json({
            'status':'1',
            'msg':'Pasaje deleted.'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando la operacion.'
        })
    }
}

module.exports = pasajeCtrl;