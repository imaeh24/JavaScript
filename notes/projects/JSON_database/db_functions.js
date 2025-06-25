const fs = require('fs')

function readDb(dbName = 'db.json') {
    // Read JSON object from file

    const data = fs.readFileSync(dbName, 'utf-8')

    // Parse the JSON from JSON to object and return it

    const converted_data = JSON.parse(data)
    return converted_data
}

function writeDb(obj, dbName = 'db.json') {
    // Check that a user has passed in an object

    if (!obj) {
        return
    }

    try {
        // Convert our object to the JSON format

        let converted_data = JSON.stringify(obj)
        fs.writeFileSync(dbName, converted_data)
        console.log('Save Successful')

        // Save JSON to our JSON database

    } catch (err) {
        console.log('Failed to Save Data\n', err.message)
    }


}

module.exports = {
    readDb, writeDb
}