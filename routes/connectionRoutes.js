const express = require('express');
const router = express.Router();


const connectionController = require('../controllers/connectionController');
// const newConnection = require('../controllers/connectionController');
router.get('/', connectionController.getAllConnections);
router.get('/newConnection', connectionController.newConnection);
router.post('/', connectionController.create);
// router.get('/connection', connectionController.getConnectionDetail);
router.get('/:id', connectionController.show);
router.get('/:id/update', connectionController.edit);
router.put('/:id', connectionController.update);
router.delete('/:id',connectionController.delete);

module.exports = router;