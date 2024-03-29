const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

//console.log(process.argv)

yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
        describe:'My note',
        demandOption: true,
        type: 'string'
        },
        body: {
            describe:'Adding description',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    } 
    
    
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a node',
    builder: {
        title: {
        describe:'Remove a note',
        demandOption: true,
        type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
    
})
//Create list command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notes.listNotes()}

})
//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
        describe:'Read a note',
        demandOption: true,
        type: 'string'}
        
    },
    handler(argv) {
        notes.readNote(argv.title)}
    
})

console.log(yargs.argv)




