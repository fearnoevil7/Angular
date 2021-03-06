console.log("*******Routes*******")

const tasks = require("../controllers/tasks.js")

module.exports = function(app) {
    app.get('/tasks', (req, res) => {
        tasks.index(req, res);
    });
    app.get('/show/:id', (req, res) => {
        console.log("show route")
        tasks.show(req, res);
    });
    app.post('/create', (req, res) => {
        tasks.create(req, res);
    });
    app.put('/update/:id', (req, res) => {
        tasks.update(req, res);
    })
    app.delete('/destroy/:id', (req, res) => {
        tasks.destroy(req, res);
    })
}