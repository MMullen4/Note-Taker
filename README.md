# Express.js: Note Taker

## Description

The application is called Note Taker and can be used to write and save notes. This application uses an Express.js back end and saves and retrieves data from a db.json file.

## Visuals


## Installation


## Usage
Existing notes are listed in the left-hand column with empty fields on the right-hand side for the new note’s title and text.

## Support
Please reach out to me with any questions - matt@mmcprintpackaging.com

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

## Contributing
Open to suggestions.

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## Authors & Acknowledgement
Myself and UCLA tutors and Bootcamp lessons

## License
N/A

## Project Status
Ongoing and will be updated with new/relavent info as needed.





## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

- - -
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
