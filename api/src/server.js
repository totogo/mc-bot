var koa = require('koa');
var app = koa ();

app.use(function *(){
	this.body = 'Hello form koajs'
});

app.listen(3000);
