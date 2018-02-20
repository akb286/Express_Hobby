var express = require('express');
var router = express.Router();
var gearList = require('../models').GearList;

var gearlist = [{
    id: 1,
    title: 'Tent'
  },
  {
    id: 2,
    title: 'sleeping bag'
  },
  {
    id: 3,
    title: 'jetboil'
  }
]

/* GET movie listings. */
router.get('/', function(req, res) {
  GearList.all()
    .then(function(gearList) {
      return res.render('gearList', {
        gearList: gearList
      });
    })
});

/* POST add movie listing */
router.post('/', function(req, res) {
  var title = req.body.title;
  GearList.create({
      title: title
    })
    .then(function() {
      res.redirect('/gearList');
    });
});
router.delete('/:id', function(req, res) {
  GearList.findById(req.params.id)
    .then(function(gearList) {
      gearList.destroy()
    })
    .then(function() {
      return res.redirect('/gearList');
    });
});


module.exports = router;