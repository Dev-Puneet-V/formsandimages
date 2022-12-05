const app = require('./app');
const {PORT} = process.env;
console.log(process.env.PORT);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});