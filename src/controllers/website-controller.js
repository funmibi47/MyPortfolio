require('dotenv').config()
const path = require('path')
const fs = require('fs');
const { json } = require('body-parser');
global.pass = 0;

module.exports = {
    home: async (req, res) => {
        res.render('web/home', {
            title: 'Welcome'
        });
    },
}    
