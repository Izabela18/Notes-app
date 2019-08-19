const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find(note => note.title === title)

    

    if(!duplicateNote) {

        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.blue.inverse('New note added'))

    } else {
        console.log(chalk.red.inverse('The note title already exists'))
    }   

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e) {
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const removeNote = (title) => {

    const notes = loadNotes()

    const deletedNote = notes.filter(note=>note.title === title)

    if(deletedNote.length !== 0) {

        const elementPos = notes.indexOf(deletedNote)

        notes.splice(elementPos,1) // this wil remove the element 
        
        console.log(chalk.black.bgGreen.bold('Note removed!'))
        saveNotes(notes)

    } else {
        console.log(chalk.white.bgRed.bold('No note found!'))
    }   

}
const listNotes = () => {
    console.log(chalk.yellow.inverse('Your notes'))
    const notes = loadNotes()
    notes.forEach(note=> {
        console.log(note.title)})
}
const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find(note => note.title === title)

    if(note) {
            console.log(chalk.green.inverse(note.title))
            console.log(note.body)
        
    } else {
        console.log('No such title found')
    }

}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}

