const express = require("express")
const handlebars = require('express-handlebars')
const morgan = require("morgan")
const path = require('path')
const routes = require('./routes')

const app = express()
const port = 3000 
// difined puclic dir
app.use(express.static(path.join(__dirname, "public")))

app.set('appName', 'My Express App');

// combind log
app.use(morgan('combined'));
// template engine
app.engine('hbs', handlebars.engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', ".\\src\\resources\\views");
// app.set('views', path.join(__dirname, 'resources\views'));

routes(app)


app.listen(port, ()=> {
    console.log("listennig on port 3000")
})