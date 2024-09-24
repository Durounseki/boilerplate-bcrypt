'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


//START_ASYNC -do not remove notes, place code between correct pair of notes.

bcrypt.hash(myPlaintextPassword,saltRounds, (err,hash)=>{
    if(err){
        console.error(err);
    }else{
        console.log(hash);
        bcrypt.compare(myPlaintextPassword,hash,(err,res)=>{
            if(err){
                console.error(err);
            }else{
                console.log(res);
            }
        });
    }
});

//END_ASYNC

//START_SYNC

const hash = bcrypt.hashSync(myPlaintextPassword,saltRounds);
console.log(hash);

const result =  bcrypt.compareSync(myPlaintextPassword,hash);
console.log(result);


//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
