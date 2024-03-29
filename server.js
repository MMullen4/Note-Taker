const express = require("express") // allows server-driven app access
const fs = require("fs") // file package to read/write files to db.json
const path = require("path") // creates relative pathways within our file sys
var uniqid = require('uniqid'); // creates unique note ID

const app = express() // sets up express app
const PORT = process.env.PORT || 3001; //listening port setup for Heroku or locally 

// middleware boilerplate
app.use(express.json()); // middleware to connect JSON backend to frontend 
app.use(express.urlencoded({ extended: true })); // allows URL coded front to back
app.use(express.static('public')); // allow to serve assest to public folder 

app.get("/api/notes", (req, res) => {  // request & response to API notes
    fs.readFile("./db/db.json", "utf-8", (err, data) => { // path, char code, and callback with err and data
        if (err) throw err;
        let notes = JSON.parse(data) // formats string data back into JSON objects
        res.json(notes) // sends json notes object back to frontend 
    })
})
app.post("/api/notes", (req, res) => { //post req to add a note
    console.log(req.body)
    let notes = [];
    fs.readFile("./db/db.json", (err, data) => {
        console.log("data",data);
        if (data.length) {
            notes = JSON.parse(data) // creates array of notes
        }
        
        console.log("notes", notes)
        let newNote = { // creates object with unique ID
            ...req.body,
            id: uniqid()
        }
        notes.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(notes), (err) => {
            if (err) throw err
        });
    }
    )
    console.log(notes);
    res.json(notes);
});

app.delete("/api/notes/:id", (req, res) => { // deletes the note with an ID equal to req.params.id
    const ID = req.params.id

    fs.readFile("./db/db.json", (err, data) => {
        const notes = JSON.parse(data) // parse data array back into array of objects

        let newNote = notes.filter((note) => note.id !== ID) //filter out note with ID typed into URL   
        console.log("newNote", newNote);

        fs.writeFile("./db/db.json", JSON.stringify(newNote), (err) => {  // writes to updated array
            if (err) throw err
            res.json(newNote)
        });
    })

});

app.get('/', (req, res) =>  //homepage view route 
    res.sendFile(path.join(__dirname, '/public/index.html')) //sends user the index.html (homepage)
);

app.get('/notes', (req, res) =>  // responds with the notes.html file
    res.sendFile(path.join(__dirname, '/public/notes.html'))  // returns user to notes
);

app.get('*', (req, res) =>  // all other routes respond with index.html (homepage)
    res.sendFile(path.join(__dirname, '/public/index.html')) // returns user to index (homepage)
);

app.listen(PORT, () =>  // listening to url server
    console.log(`App listening at http://localhost:${PORT}`)
)
