
const transaccionCtrl=require('./../controllers/transaccion.controller');
const express = require('express');
const router = express.Router();

router.get('/',transaccionCtrl.getTransacciones);
router.post('/',transaccionCtrl.createTransaccion);
router.get('/emailCliente/:emailCliente',transaccionCtrl.getHistorialEmail);
router.get('/monedaOrigen/:monedaOrigen/monedaDestino/:monedaDestino',transaccionCtrl.getTransaccionParams);
router.delete('/:id',transaccionCtrl.deleteTransaccion);

module.exports = router;