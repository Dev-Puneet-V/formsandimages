require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({
    extended: true // {a: {b : k, c : d}}, for nested populated
}));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}));
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

app.get('/myget', (req, res) => {
    res.send(req.query);
});
app.post('/mypost', (req, res) => {
    console.log(req.files);
    res.send(req.body);
});
app.get('/mygetform', (req, res) => {
    res.render("getform")
});
app.get('/mypostform', (req, res) => {
    res.render("postform")
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;