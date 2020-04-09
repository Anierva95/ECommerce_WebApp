const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.UserList.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    find: function (req, res) {
        db.UserList.findOne({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.UserList.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.UserList.update({ _id: req.params.id }, { $push: { Transactions: req.body } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateCart: function (req, res) {
        db.UserList.update({ _id: req.params.id }, { ShoppingCart: req.body })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateWish: function (req, res) {
        db.UserList.update({ _id: req.params.id }, { Wishlist: req.body })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};