const { readDb, writeDb } = require("./db_functions");

//const dataObj = {
    //name: 'isabella',
   // favorite_numbers: [4, 24]
//}

//writeDb(dataObj)

//console.log(readDb())

const saved_data = readDb()

saved_data['number_of_mangoes'] = 2

writeDb(saved_data)