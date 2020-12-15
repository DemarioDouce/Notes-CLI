const fs = require("fs")
const chalk = require('chalk');

//load note
const loadNotes = () => {

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
const saveNotes = (notes) => {

    let dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)

}

//return the notes
const getNotes = () => {

return "Your notes......"

 }

//add a new note
 const addNote = (title,body) => {

    let notes = loadNotes()
    let duplicateNotes = notes.filter((note) => {

        return note.title === title
    }) 

    if(duplicateNotes.length === 0) {

        notes.push({
            title:title,
            body:body
        })
    
        saveNotes(notes)

        console.log(chalk.green("New note added."))
    } else {

        console.log(chalk.red("Note title taken"))

    }

    


 }

 const removeNote = (title) => {

    let notes = loadNotes()
    let notesToKeep = notes.filter((note) => {

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