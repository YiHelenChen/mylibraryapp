const express = require('express')

// add our router 
const authorRouter = express.Router()

// require the author controller 
const authorController = require('../controllers/authorController.js')
const author = require('../models/author.js')

// handle the GET request to get all authors 
authorRouter.get('/',(req,res) => authorController.getAllAuthors(req,res)) 

// handle the '/:id' path
authorRouter.get('/:id',(req,res) => authorController.getAuthorByID(req,res))

// handle post
authorRouter.post('/',(req,res) => authorController.addAuthor(req,res)) 

// export the router 
module.exports = authorRouter