var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    if(req.session.isVisit)
    {
        req.session.isVisit++;
        res.render('index', { title: '微商平台'+req.session.isVisit });
     //   res.send("第"+req.session.isVisit+"次访问!");
    }
    else
    {
        req.session.isVisit=1;
        res.render('index', { title: '1微商平台'+req.session.isVisit });
       // res.send("第1次访问!");
    }
  //res.render('index', { title: '微商平台' });
});

module.exports = router;
