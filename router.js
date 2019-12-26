const { Router } = require('express');
const {ctrl} = require('./controller');

const AmazonRouter = new Router();

AmazonRouter.get('/Delivers/all', ctrl.getAllDelivers);
//AmazonRouter.get('/Delivers/:id', ctrl.getTDeliverById);
//AmazonRouter.post('/', ctrl.getTweetById);

module.exports = {
    AmazonRouter,
};