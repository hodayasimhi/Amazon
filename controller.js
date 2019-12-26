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
    },editDeliver(req,res,next){
      mongoose.connect(mongodb.mongoDbUrl, mongodb.mongoDbOptions)
      .then(async() => {
        const {idDeliver = null} = req.params;
        const {address = null} = req.body 
        const result = await Deliver.updateOne({idDeliver},{address})
            
        if(result) res.json(result)
        else res.status(404).send(`Deliver ${id} has not been found`);
      })
      .catch(err => {
        console.error("Some error occured", err);
        res.status(500).send(err);
      })
    },addDeliver(req,res,next){
      mongoose.connect(mongodb.mongoDbUrl, mongodb.mongoDbOptions)
      .then(async() => {
        const{
          idDeliver = null,
          idUser=null,
          date=null,
          address=null,
          products=null
        }= req.body
        const deliver = new Deliver({idDeliver,idUser,date,address,products})
        const result = await deliver.save()
            
        if(result) res.json(result)
        else res.status(404).send(`not found`);
      })
      .catch(err => {
        console.error("Some error occured", err);
        res.status(500).send(err);
      })
    },removeDeliver(req, res, next) {
      mongoose.connect(mongodb.mongoDbUrl, mongodb.mongoDbOptions)
      .then(async () => {
      const { idDeliver = null } = req.body
      // Query goes here
      const result = await Deliver.deleteOne({idDeliver})
      if (result) res.json(result)
      else res.status(404).send('not found')
      })
      .catch(err => {
      console.error('some error occurred', err)
      res.status(500).send(err.message)
      })
      }
      
   };