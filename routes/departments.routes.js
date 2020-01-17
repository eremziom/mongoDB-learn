const express = require('express');
const router = express.Router();
const DepartmentController = require('../controllers/departments.controller')

router.get('/departments', DepartmentController.getAll);

router.get('/departments/random', DepartmentController.getRandom);

router.get('/departments/:id', DepartmentController.getSingle);

router.post('/departments', DepartmentController.postSingle);

router.put('/departments/:id', DepartmentController.updateSingle);

router.delete('/departments/:id', DepartmentController.deleteSingle);

module.exports = router;
