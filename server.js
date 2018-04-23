var express = require('express');
var app = express();

var path = require('path');
var bodyParser = require('body-parser');

var port = 3000;

// app.set('views', path.join(__dirname));

app.use('/DemoPortal', express.static(path.join(__dirname)));

app.get('/DemoPortal', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

app.get('*', (req, res) => {
    res.redirect('/DemoPortal');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function() {
    console.log('Server is started on port ' + port);
});