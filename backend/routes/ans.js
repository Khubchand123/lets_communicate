const express = require('express');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchuser');
const router = express.Router();
// ans file where notes of user save 
const Notes = require('../models/HRans');
router.get('/fetchans', fetchuser, async (req, res) => {
    // finding notes by Notes.find function by id
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        res.status(401).send({ error: "Please authenticate usinga valid token" })
    }
})


// Adding Note in user database
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 0 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 0 }),], async (req, res) => {
        try {
            const error = validationResult(req);
            if (!error.isEmpty()) {
                return res.status(400).json({ errors: error.array() });
            }
            const { title, description, tag} = req.body;
            const note = new Notes({
                title, description, tag,user: req.user.id
            })
            // saving note in database
            const saveNote = await note.save()
            res.json(saveNote);
        } catch (error) {
            res.status(401).send({ error: "Please authenticate usinga valid token" })
        }
    })
// Updating Note in database   
//  we have to pass id of user 
router.put('/updatenote/:id', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {

        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ errors: error.array() });
        }
        try {
            const { title, description, tag } = req.body;
            const newNote = {};
            if (title) {
                newNote.title = title;
            }
            if (description) {
                newNote.description = description;
            }
            if (tag) {
                newNote.tag = tag;
            }
            
            let note = await Notes.findById(req.params.id);
            
            if (!note) {
                return res.status(400).send("Not found");
            }
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed");
            }
            note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
            res.json({ note });
        } catch (error) {
            res.status(401).send({ error: error.message })
        }
    })

// Deleting a note 
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

        try {
            let note = await Notes.findById(req.params.id);
            if (!note) {
                return res.status(400).send("Not found");
            }
            if (note.user.toString() !== req.user.id) {
                return res.status(401).send("Not Allowed");
            }
            note = await Notes.findByIdAndDelete(req.params.id)
            res.json({ note });
        } catch (error) {
            res.status(401).send({ error: error.message })
        }
    })
module.exports = router