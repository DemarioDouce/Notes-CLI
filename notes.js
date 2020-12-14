const fs = require("fs")

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

//return the notes
const getNotes = function() {

return "Your notes......"

 }

//add a new note
 const addNote = function(title,body) {

    let notes = loadNotes()

    console.log(notes)


 }

//export
 module.exports = {

    getNotes: getNotes,
    addNote: addNote,
 }