const { v4: uuidv4 } = require('uuid');
const NOTES_HC = require('../data');


const getNotes = (req,res) => {
    const notes = NOTES_HC ? NOTES_HC : []

    if(!notes.length){
        return res.status(200).json({msg: 'not existing notes'})
    }

     res.status(200).json({
        msg: `success, are ${notes.length} notes`,
        notes,
    })
}

const getNote = (req,res) => {
    const {id} = req.params;
    const note = NOTES_HC.find(note => note.id === Number(id));
    console.log(note)

    if(!note){
        return res.status(200).json({msg: "Note don't found"})
    }

    res.status(200).json({
        msg: 'success',
        note
    })
}

const updateNote = (req,res) => {
    const {title, text, isNew} = req.body;
    const {id} = req.params;

    if(NOTES_HC.some(note => note.title === title)){
        return res.status(200).json({msg: 'This note is already defined'})
    }

    if(!title){
        return res.status(200).json({msg: 'The title is required'})
    }

    if(text.length < 10){
        return res.status(200).json({msg: 'The text need to be at less 10 characters'})
    }

    if(isNew){
        const note = {
            id: uuidv4(),
            title,
            text,
            isNew: false
        }

        NOTES_HC.push(note)

        return res.status(200).json({
            msg: 'note create successfully',
            note
        })
    }



    const note = NOTES_HC.find(note => note.id === id)
    console.log({note})
    res.status(200).json({
        msg: 'note updated successfully',
        note: {
            id: uuidv4(),
            title,
            text,
            isNew
        }
    })
}


module.exports = {
    getNotes,
    getNote,
    updateNote
}