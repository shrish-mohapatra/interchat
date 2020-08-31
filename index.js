// Modules
const express = require('express')
const bodyParser = require('body-parser')
const database = require('./config/database')
const authRouter = require('./src/auth/auth.routes')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true }))

app.use('/auth', authRouter)

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})


/*

questions
Why do you want this job? [keywords you are looking for]
How many years of experience? 

barebones
save responses for each question

wit ai
- extract crucial info

/auth 
- login, sign up, sign out, forget password

/job
- create, edit, etc <business side>

*/