const express = require('express');
const stockRoutes = express.Router(); //recordRoutes
const dbo = require('../db/conn');
const ObjectId = require('mongodb').ObjectId;

stockRoutes.route('/stock').get(function(req,res){
    let db_connect = dbo.getDb("CafeAppDB");
    db_connect
    .collection("stockItem")  //records
    .find({})
    .toArray(function(err, result){
        if(err) throw err;
        res.json(result);
    });
});

stockRoutes.route('/stock/:id').get(function(req,res) {
    let db_connect = dbo.getDb();
    let myquery = {_id: ObjectId(req.params.id)};
    db_connect
        .collection('stockItem')
        .findOne(myquery, function(err, result) {
            if(err) throw err;
            res.json(result);
        });
});

stockRoutes.route('/stock/add').post(function(req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        quantity: req.body.quantity,
        itemStatus: req.body.itemStatus,
        price: req.body.price,
    };
    db_connect.collection("stockItem").insertOne(myobj, function(err, res) {
        if (err) throw err;
        response.json(res);
    });
});

stockRoutes.route('/update/:id').post(function(req,response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id)};
    let newValues = {
        $set: {
            name: req.body.name,
            quantity: req.body.quantity,
            itemStatus: req.body.itemStatus,
            price: req.body.price,

        },
    };
    db_connect
        .collection("stockItem")
        .updateOne(myquery, newValues, function(err,res) {
            if(err) throw err;
            console.log("1 document updated");
            response.json(res);
        });
});

//deleting a record

stockRoutes.route('/:id').delete((req,response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id)};
    db_connect.collection("stockItem").deleteOne(myquery, function(err,obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

    module.exports = stockRoutes;