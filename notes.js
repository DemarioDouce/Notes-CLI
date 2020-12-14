const fs = require("fs")

//load note
const loadNotes = function() {

    //stores the buffer of the file
    let dataBuffer = fs.readFileSync("notes.json")
    //convert buffer to string
    let dataJSON = dataBuffer.toString()
    //return parse data
    return JSON.parse(dataJSON)

}

//return the notes
const getNotes = function() {

return "Your notes......"

 }

//add a new note
 const addNote = function(title,body) {

    let notes = loadNotes()


 }

//export
 module.exports = {

    getNotes: getNotes,
    addNote: addNote
 }