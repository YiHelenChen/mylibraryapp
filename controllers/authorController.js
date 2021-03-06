//link to author model
const authors = require('../models/author')

//handle request to get all authors 
const getAllAuthors = (req,res) => {
    res.send(authors) // send list to browser
}

// Function to handle a request to a particular author
const getAuthorByID = (req,res) => {
    // serach for author in the database via ID
    const author = authors.find(author => author.id === req.params.id)

    if(author){
        res.send(author) // send back the author details
    }
    else{
        // you can decide what to return if author is not found
        // currently, an empty list will be returned 
        res.send('<h1>Author Not Found!</h1>')
    }
}

// Function to handle request to add new author
const addAuthor = (req,res) => {
    // Assemble a new author
    newAuthor = req.body
    // Add new author to database
    authors.push(newAuthor)
    // Return entire author list to browser as a check that it worked
    res.send(authors)

}

module.exports = {
    getAllAuthors, getAuthorByID, addAuthor
}