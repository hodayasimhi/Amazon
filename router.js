const { Router } = require('express');
const {ctrl} = require('./controller');

const AmazonRouter = new Router();

AmazonRouter.get('/Delivers/all', ctrl.getAllDelivers);
AmazonRouter.get('/Delivers/:id', ctrl.getDeliverById);
AmazonRouter.post('/Delivers/add', ctrl.addDeliver);
AmazonRouter.put('/Delivers/edit/:id', ctrl.editDeliver);
AmazonRouter.post('/Delivers/remove', ctrl.removeDeliver);




module.exports = {
    AmazonRouter
};