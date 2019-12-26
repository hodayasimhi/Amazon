const mongoose = require('mongoose');

const schema = new mongoose.Schema ({
    idDeliver: {type: String, required: true },
    idUser: {type: String , required: true},
    date: { type: String , required: true},
    address: {
        street: { type: String ,required: true},
        suite: { type: String ,required: true},
        city: { type: String ,required: true},
        zipcode: { type: String ,required: true}
        ,},
    products: {
        idProducts :{ type: Number ,required: true} ,
        sum:{type: Number, required: true }
        
}
}, {
    collection: 'deliver'
});

const Deliver = mongoose.model('Deliver', schema);

module.exports = Deliver;