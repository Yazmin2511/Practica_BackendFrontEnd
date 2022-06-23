const pasajeCtrl= require('./../controllers/pasaje.controller');
const express = require('express');
const router = express.Router();

router.get('/', pasajeCtrl.getPasajes);
router.get('/:id', pasajeCtrl.getPasajeId);
router.post('/', pasajeCtrl.createPasaje);
router.get('/categoriaPasajero/:categoriaPasajero', pasajeCtrl.getPasajePorCategoria);
router.put('/:id', pasajeCtrl.editPasaje);
router.delete('/:id', pasajeCtrl.deletePasaje);

module.exports = router;