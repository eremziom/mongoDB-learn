const Employee = require('../models/employee.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Employee.find().populate('department'));
  }
  catch(err) {
    res.status(500).json(err)
  }
};

exports.getRandom = async (req, res) => {
  try {
    const count = await Employee.countDocuments();
    const rand = Math.floor(Math.random() * count);
    const emp = await Employee.findOne().populate('department').skip(rand);
    if(!emp) res.status(404).json({ message: 'Not found' });
    else res.json(emp);
  }
  catch(err) {
    res.json(err);
  }
};

exports.getSingle = async (req, res) => {
  try {
    const emp = await Employee.findById(req.params.id).populate('department');
    if(!emp) res.status(404).json({ message: 'Not found' });
    else res.json(emp);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.postSingle = async (req, res) => {
  try {
    const { firstName, lastName, department } = req.body;
    const newEmployee = new Employee({ firstName: firstName, lastName: lastName, department: department });
    await newEmployee.save();
    res.json({ message: 'OK' });
  } 
  catch(err) {
    res.status(500).json(err);
  }
};

exports.updateSingle = async (req, res) => {
  const { firstName, lastName, department } = req.body;
  try {
    const emp = await(Employee.findById(req.params.id));
    if(emp){
      await Employee.updateOne({ _id: req.params.id }, { $set: { firstName: firstName, lastName: lastName, department: department }});
      res.json({ message: 'OK' });
    }
    else {
      res.status(404).json({message: 'Not Found'});
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.deleteSingle = async (req, res) => {
  try {
    const emp = await(Employee.findById(req.params.id));
    if(emp){
      await Employee.deleteOne({_id: req.params.id});
      res.json({message: 'OK'})
    }
    else res.status(404).json({message: 'Not Found'})
  }
  catch(err) {
    res.status(500).json(err);
  }
};
