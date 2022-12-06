require('dotenv').config();
const express = require('express');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
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
cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_secret
});
app.get('/myget', (req, res) => {
    res.send(req.query);
});
app.post('/mypost', async (req, res) => {
    let fileResData = [];
    for(let currFile of req.files.file){
        result = await cloudinary.uploader.upload(currFile.tempFilePath, {
            folder: 'users'
        });
        fileResData.push({
            "secure_url": result.secure_url,
            "public_id": result.public_id
        })
    }
    console.log(result);
    let response = {
        fname: req.body.firstname,
        lname: req.body.lastname,
        fileResData
    }
    res.send(response);
});
app.get('/mygetform', (req, res) => {
    res.render("getform")
});
app.get('/mypostform', (req, res) => {
    res.render("postform")
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;