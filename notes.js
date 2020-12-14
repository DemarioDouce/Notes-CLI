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

    notes.push({
        title:title,
        body:body
    })

    saveNotes(notes)


 }

//export
 module.exports = {

    getNotes: getNotes,
    addNote: addNote,
 }