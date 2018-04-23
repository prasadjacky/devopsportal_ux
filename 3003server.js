var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/api/onboarding/project', function(request, response) {
    console.log('\non api/onboarding/project:');
    console.log(request.body);
    response.send(request.body);
});
app.post('/api/onboarding/user', function(request, response) {
    console.log('\non api/onboarding/user:');
    console.log(request.body);
    response.send(request.body);
});
app.post('/api/onboarding/environment', function(request, response) {
    console.log('\non api/onboarding/environment:');
    console.log(request.body);
    response.send(request.body);
});
app.post('/api/onboarding/alm_tool', function(request, response) {
    console.log('\non api/onboarding/alm_tool:');
    console.log(request.body);
    response.send(request.body);
});
app.post('/api/portal_settings/user_directories', function(request, response) {
    console.log(request.body);
    response.send('valid');
});
app.post('/api/onboarding/planning', (req, res) => {
    var projectKey = req.query.project_key;
    var responseObject = {
        "projectURL": `http://devops.ltimosaic.com/jira/${projectKey}`
    }
    res.send(responseObject);
});
app.post('/api/onboarding/scm', (req, res) => {
    var projectKey = req.query.project_key;
    var responseObject = {
        "projectURL": `http://devops.ltimosaic.com/bitbucket/project/${projectKey}`,
        "ciRepoURL": `http://devops.ltimosaic.com/bitbucket/repository/${projectKey}`
    }
    res.send(responseObject);
});
app.post('/api/onboarding/code_analysis', (req, res) => {
    var projectKey = req.query.project_key;
    // var responseObject = {
    //     "projectURL": `http://devops.ltimosaic.com/sonar/${projectKey}`
    // }
    res.sendFile(__dirname + '/sonar-project.properties');
});
app.post('/api/onboarding/ci', (req, res) => {
    var projectKey = req.query.project_key;
    // var responseObject = {
    //     "projectURL": `http://devops.ltimosaic.com/sonar/${projectKey}`
    // }
    res.sendFile(__dirname + '/Jenkinsfile');
});
app.post('/api/onboarding/deployment', (req, res) => {
    var projectKey = req.query.project_key;
    res.sendFile(__dirname + '/Dockerfile');
});

app.listen(3003, function() {
    console.log('started on 3003');
});