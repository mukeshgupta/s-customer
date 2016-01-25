var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	res.render('express',{title:'Exprees'});
})

router.get('/helloworld',function(req,res){
	res.render('helloworld',{title:'Hello World'});
});

