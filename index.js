var express = require('express'),
	app = express();

var todoRoutes = require('./routes/todos');

app.get('/', function(req,res) {
	res.send('Hi there from the root route!');
});

app.use('/api/todos', todoRoutes);

app.listen(3000, function(){
	console.log('App is running on port 3000');
});