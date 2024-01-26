const express = require ('express')
const bodyParser = require("body-parser");
const urlsRouter=require('./Server/routes/urls')
const authRouter=require('./Server/routes/auth')
const app=express()
const PORT=process.env.PORT||5000
const cors=require('cors')
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
}
))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',urlsRouter)
app.use('/',authRouter)

app.listen(PORT,()=>console.log(`runnning ${PORT}`))