//npm module
const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs')
const { demand } = require('yargs');
//local
const notes = require("./notes.js");

//customize yargs 
yargs.version("1.0")

//create add command
yargs.command({

    command: "add",
    describe: "Add a new note",
    builder: {

        title: {

            describe: "Note title",
            demandOption: true,
            type: "string"
        },

        body: {

            describe: "Note body",
            demandOption: true,
            type: "string"

        }

    },
    handler: function(argv) {

notes.addNote(argv.title,argv.body)

    }

})

//create remove command
yargs.command({

command:"remove",
describe:"Remove a note",
handler: function() {

    console.log("Removing a note...")
}

})

//list command
yargs.command({

    command:"list",
    describe:"List notes",
    handler: function() {
    
        console.log("Listing notes...")
    }
    
    })

//read command
yargs.command({

    command:"read",
    describe:"read note",
    handler: function() {
    
        console.log("Reading note...")
    }
    
    })

yargs.parse()