var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:id/edit', function(req, res) {
  GearList.findById(req.params.id)
    .then(function(gearList) {
      return res.render('edit', {
        gearList: gearList
      });
    });
});

router.put('/:id', function(req, res) {
  GearList.update({
      title: req.body.title
    }, {
      where: {
        id: req.params.id
      }
    })
    .then(function() {
      return res.redirect('/gearList');
    })
});

router.get('/', function(req, res) {
      GearList.all({
          order: [
            ['createdAt', 'ASC']
          ]
        })
        .then(function(gearList) {

            module.exports = router;