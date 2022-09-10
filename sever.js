'use strict';

const express = require ('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());


app.get('/', (req,res) => {
    res.status(200).send('Hello World')
})
 
app.post('/person',( req ,res) =>{
   /* const personData = { 'name': req.query.name,
        'age': req.query.age,
        'gender' : req.query.gender
    }*/

    const personData = { name: "Amani", age: 28, gender: "Female" };
    console.log(personData);
    res.status(200).send(`New Age : ${parseInt(personData.age) + 5}`);
  });

function start(PORT) {
    app.listen(PORT,() => console.log (`server is start on ${PORT}`));
}

module.exports = {
    app: app,
    start: start
}