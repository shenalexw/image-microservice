var express = require('express');
var router = express.Router();
const api_helper = require('../API_helper');
require('dotenv').config();

/* GET users listing. */
router.post('/', function (req, res, next) {
  const keyword = req.body.keyword;
  api_helper.make_API_call('https://api.unsplash.com/search/photos/?query=' + keyword + '&client_id=' + process.env.UNSPLASH_API_KEY)
    .then(response => {
      result = {
        "image": response["results"][0]["urls"]["raw"]
      }
      res.json(result);
    })
    .catch(error => {
      res.send(error)
    })
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send("use post and send a keyword in json");
});

module.exports = router;
