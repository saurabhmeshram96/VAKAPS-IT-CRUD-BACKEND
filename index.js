//express FrameWork
var express = require('express');


const cors = require('cors');

var app = express();
var PORT = 8989;

var corsOptions = {
    origin: "http://localhost:3000"
}

app.use(express.json());
app.use(cors(corsOptions));

const db = require("./app/models")

db.mongoose
    .connect(db.url,{useNewUrlParser:true})
    .then(()=>{
        console.log("Connected to mongo database!!!");
    })

require('./app/routes/user.routes')(app)

app.listen(PORT,()=>{
    console.log(`Server started on PORT:${PORT}`)
})