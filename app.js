const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const server = require('http').createServer(app)
const handlebars = require('express-handlebars')
const Handlebars = require('handlebars');
const path = require('path')
const fileUpload = require('express-fileupload');
const session = require('express-session');
const flash = require('express-flash')
const fs = require('fs');


app.set('view engine', 'hbs')
app.engine('hbs', handlebars({
    layoutsDir: 'views/layouts',
    views:  'views',
    defaultLayout: 'main',
    extname: 'hbs',
    partialsDir: 'views/partials',
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use(flash())
app.use(fileUpload({
    createParentPath: true
}));

app.use((err, req, res, next)=>{
    res.locals.error=err
    console.log(err)
    return next()
})

const mainRoute = require('./src/routes/main-route')

app.use('/', mainRoute)
// app.use(async function (req, res) {
//     res.status(400).render('site/404', {
//         layout: "404",
//         error_msg: 'We are unable to process your request. Please try again',
//     })
// })

const PORT = process.env.ACCESS_PORT || 7200
listen(PORT, function(){
    console.log(`MYPORTFOLIO is running on PORT ${PORT}`)
}|| 5000)