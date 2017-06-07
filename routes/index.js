var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/0801199214375', function(req,res,next){
  var examenNelson = [
    {
      "Nombre completo":"Nelson Adalberto Amador Sorto",
      "Numero de cuenta": "0801199214375",
      "Correo": "nelson15amador15@gmail.com",
    }
    ];
  res.json(examenNelson);
});

router.get('/prueba', function(req,res,next){
  res.render('suma',{"numero1":"","numero2":"","msg":""});
});

var sumas = [];

router.post('/suma',function(req,res,next){
  console.log(req.body);
    sumas.push(req.body.numero1);
    sumas.push(req.body.numero2);
    var msgs = parseInt(sumas[0]+parseInt(sumas[1]));
    var rtObject = {};
    rtObject.numero1 = req.body.numero1;
    rtObject.numero2 = req.body.numero2;
    rtObject.msg= msgs;
  res.render('suma', rtObject);
});

module.exports = router;
