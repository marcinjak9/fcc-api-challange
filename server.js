var express = require('express');
var moment = require('moment');

var app = express();

var port = process.env.PORT || 3000;

moment().format();

app.get('/', function (req, res) {
  res.send('insert your date params');
})

app.get('/:date', function(req,res) {
	var parameter = req.params.date;
	var body = {};
	
	if (parameter.match(/[a-z]/i)){
		body.naturalDate = parameter;
		var date = new Date(parameter);
		body.unixDate = date.getTime()/1000;
	} else {
		body.unixDate = parseInt(parameter);
		body.naturalDate = moment.unix(parameter).format('MMMM D, YYYY');
	}
	res.send(JSON.stringify(body));
});
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
})