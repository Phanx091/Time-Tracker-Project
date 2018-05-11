const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home-route');
const projectRouter = require('./routes/projects-route');

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

app.use('/home', homeRouter);
app.use('/projects', projectRouter);

app.listen(PORT, function(){
    console.log('listening on PORT', PORT);  
});