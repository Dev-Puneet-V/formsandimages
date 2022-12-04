require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const SALT_ROUND = parseInt(process.env.SALT_ROUND);
const auth = require('./middleware/auth');
app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;