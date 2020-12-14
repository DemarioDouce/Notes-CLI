const fs = require("fs")
const chalk = require('chalk');

//load note
const loadNotes = function() {

    try {
    
    //stores the buffer of the file
    let dataBuffer = fs.readFileSync("notes.json")
    //convert buffer to string
    let dataJSON = dataBuffer.toString()
    //return parse data
    return JSON.parse(dataJSON)

    } catch (e) {
        
        return []

    }

}

//save notes
const saveNotes = function(notes) {

    let dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)

}

//return the notes
const getNotes = function() {

return "Your notes......"

 }

//add a new note
 const addNote = function(title,body) {

    let notes = loadNotes()
    let duplicateNotes = notes.filter(function(note) {

        return note.title === title
    }) 

    if(duplicateNotes.length === 0) {

        notes.push({
            title:title,
            body:body
        })
    
        saveNotes(notes)

        console.log("New note added.")
    } else {

        console.log("Note title taken")

    }

    


 }

 const removeNote = function(title) {

    let notes = loadNotes()
    let notesToKeep = notes.filter(function(note) {

        return note.title !== title
    }) 

    if (notes.length > notesToKeep.length){

        saveNotes(notesToKeep)
        console.log(chalk.green("Note removed"));

    } else {

        console.log(chalk.red("No note was removed"));

    }

    
        



 }

//export
 module.exports = {

    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
 }