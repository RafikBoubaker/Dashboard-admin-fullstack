const cors = require('cors')
const express = require ("express")
const app =express()
const mongoose = require ('mongoose')
mongoose.connect('mongodb://localhost/admin',{ useNewUrlParser: true })

const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.log('connected to database'))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors());
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

const usersRouter = require('./routes/users')
app.use('/users',usersRouter)

app.listen(5000, () =>console.log('server started'))