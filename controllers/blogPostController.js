const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.BlogPost.find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.BlogPost.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      console.log(req.body)
        db.BlogPost.findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    remove: function(req, res) {
        db.BlogPost.remove({ _id: req.params.id })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
};