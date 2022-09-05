'use strict';

const express = require ('express');
const app = express();

app.get('/', (req,res) => {
    res.status(200).send('Hello World')
})
 
app.post('/data',( req ,res) =>{
    //const { personData } = req.body;
    const personData = { name: "Amani", age: 28, gender: "Female" };
    console.log(personData);
    res.status(200).send(`${parseInt(personData.age) + 5}`);
} )

function start(PORT) {
    app.listen(PORT,() => console.log ('server is wakeup'));
}

module.exports = {
    app: app,
    start: start
}