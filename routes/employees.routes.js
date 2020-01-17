const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employees.controller')

router.get('/employees', EmployeeController.getAll);

router.get('/employees/random', EmployeeController.getRandom);

router.get('/employees/:id', EmployeeController.getSingle);

router.post('/employees', EmployeeController.postSingle);

router.put('/employees/:id', EmployeeController.updateSingle);

router.delete('/employees/:id', EmployeeController.deleteSingle);

module.exports = router;
