const express = require ('express')
const dbconnect = require('./dbconnect')
const app = express()
app.use(express.json())
const port = 5000 
const newsRoute = require('./routes/newsRoute')
const userRoute = require('./routes/userRoute')

app.use('/api/newsitems/', newsRoute)
app.use('/api/users/', userRoute)

app.get('/',(req,res)=> res.send('hello azad'))

app.listen(port, ()=> console.log(`example app listening on port ${port}`))