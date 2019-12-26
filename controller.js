const Deliver  = require('./DB/delivers');

const mongoose = require('mongoose');
const mongodb = require('./connectMoDB');

exports.ctrl = {
    getAllDelivers(req, res, next) {
      mongoose.connect(mongodb.mongoDbUrl, mongodb.mongoDbOptions)
      .then(async() => {
        const result = await Deliver.find({})

        if(result) res.json(result)
        else res.status(404).send('not found')
      })
      .catch(err => { 
        console.error('some error occurred', err)
        res.status(500).send(err.message)
      });
    },
    getDeliverById(req, res, next) {
      mongoose.connect(mongodb.mongoDbUrl, mongodb.mongoDbOptions)
      .then(async() => {
        const {id = null} = req.params;
        const result = await Deliver.findOne({idDeliver: id});
  
        if(result) res.json(result)
        else res.status(404).send(`Deliver ${id} has not been found`);
      })
      .catch(err => {
        console.error('some error occurred', err);
        res.status(500).send(err.message);
      })
      }

      
   };