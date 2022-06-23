const Transaccion = require('../models/transaccion');
const transaccionCtrl = {}

transaccionCtrl.getTransacciones = async (req, res) => {
    var transacciones = await Transaccion.find();
    res.json(transacciones);
}

transaccionCtrl.createTransaccion = async (req, res) => {
    var transaccion = new Transaccion(req.body);
    try{
        await transaccion.save();
        res.json({
            'status':'1',
            'msg':'Transaccion guardada.'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando operacion.'
        })
    }
}

transaccionCtrl.getHistorialEmail = async (req, res) => {
    var transacciones = await Transaccion.find(req.params);
    res.json(transacciones);
}

transaccionCtrl.getTransaccionParams = async (req, res) => {
  var transacciones = await Transaccion.find(req.params);
  res.json(transacciones);
}

transaccionCtrl.deleteTransaccion = async (req, res) => {
    try{
        await Transaccion.deleteOne({_id: req.params.id});
        res.json({
            'status':'1',
            'msg':'Transaccion deleted.'
        })
    }catch(error){
        res.status(400).json({
            'status':'0',
            'msg':'Error procesando la operacion.'
        })
    }
}

module.exports = transaccionCtrl;