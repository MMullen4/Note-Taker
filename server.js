const express = require("express") // allows server- driven app
const fs = require("fs") // file system to read/write files
const path = require("path") // creates relative pathways
var uniqid = require('uniqid'); // creates unique note ID

const app = express()
const PORT = process.env.PORT || 3001; //setup for Heroku

app.use(express.json()); // middleware to connect backend to frontend
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/api/notes", (req, res) => {  // request & response to API 
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        if (err) throw err;
        let notes = JSON.parse(data) // formats data back into JSON
        res.json (notes) // sends back to frontend
    })
})
app.post("/api/notes", (req, res) => {
    console.log(req.body)
    fs.readFile("./db/db.json", "utf-8", (err, data) => {
        let notes = JSON.parse(data) // creates array of notes
        let newNote = {
            ...req.body,
            id:uniqid ()
        }
        
    }
)
}) 

app.get('/', (req, res) =>  //homepage route 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>  //homepage route 
    res.sendFile(path.join(__dirname, '/public/notes.html'))  // returns user to notes
);

app.get('*', (req, res) =>  //homepage route 
    res.sendFile(path.join(__dirname, '/public/index.html')) // returns user to index
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
)