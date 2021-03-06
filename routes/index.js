var express = require('express');
var router = express.Router();
var ytdlCore = require('ytdl-core');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/get',function(req,res,next){
  var url = req.query.video_url;
if(url!=null)
{
  ytdlCore.getInfo(url, function(err, info) {
    if(err){
      //console.log("error");
    }
    else {
      //console.log(info);
      res.json({"data":info});
    }
  });
}

});

module.exports = router;
