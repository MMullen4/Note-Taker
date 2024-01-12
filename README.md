# Express.js: Note Taker

## Description

The application is called Note Taker and can be used to write and save notes. This application uses an Express.js back end and saves and retrieves data from a db.json file.

## Visuals
http://localhost:3001/notes

<../../../Note Taker screen.pdf>
## Installation
None

## Usage
Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.  Enter your title, tab down to the notes and then click save in the upper right.  Deletion is not yet supported (working on it though).

## Support
Please reach out to me with any questions - matt@mmcprintpackaging.com

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

## Contributing
Open to suggestions.

## Authors & Acknowledgement
Myself and UCLA tutors and Bootcamp lessons

## License
N/A

## Project Status
Ongoing and will be updated with new/relavent info as needed.
