const Department = require('../department.model.js');
const expect = require('chai').expect;
const mongoose = require('mongoose');

describe('Department', () => {

  it('should throw an error if no "name" arg', () => {
    const dep = new Department({}); 

    dep.validate(err => {
      expect(err.errors.name).to.exist;
    });
  });

  it('should throw an error if "name" is not a string', () => {

    const cases = [{}, []];
    for(let name of cases) {
      const dep = new Department({ name });
  
      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });
    };
  });

  it('should throw an error if "name" is shorter than 5 or longer than 20 characters', () => {
    const cases = ['lor', 'lore', 'Lorem Ipsum dolor mest'];
    for(let name of cases) {
      const dep = new Department({name});
      dep.validate(err => {
        expect(err.errors.name).to.exist;
      });
    }  
  });

  it('should throw NO error, if "name" i correct', () => {
    const cases = ['lorem ipsum', 'dolor', 'zdanie co ma 20 lite'];
    for(let name of cases) {
      const dep = new Department({name});
      dep.validate(err => {
        expect(err).to.not.exist;
      })
    }
  });

  // after(() => {
  //   mongoose.models = {};
  // });
})