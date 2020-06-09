console.log("*******Note CONTROLLER*******")

    const Note = require('../models/note.js')
    // var env1 = require("node-env-file");
    // env(__dirname + '/.../.env');

    module.exports = {
        create: function(req, res){
            console.log(req.body);
            const note = new Note();
            note.content = req.body.content;
            console.log(note);
            console.log("???????*******!!!!!!!", process.env.JWT_KEY);
            note.save()
                .then(newNoteData => {
                    console.log('note created: ', newNoteData);
                    res.json(newNoteData)
                })
                .catch(err => {
                    console.log(err);
                    res.json(err);
        })
        },

        show: function(req, res) {
            Note.findOne({_id: req.params.id})
                .then(note => res.json(note))
                .catch(err => {
                    console.log("error: ", err);
                    res.json(err);
                })
        },

        index: function(req, res){
            Note.find()
                .then(notes => {
                    console.log(notes);
                    res.json({notes: notes})
                })
                .catch(err => {
                    console.log(err);
                    res.json(err)
                })
        }
    }