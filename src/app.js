import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors';
import connectDB from './connectdb.js'


const app = express()
const port=process.env.PORT
const DATABASE_URL=process.env.DATABASE_URL

app.use(cors())

connectDB(DATABASE_URL)  //connect to db

app.use(express.json())  //json

app.listen(port,()=>{

    console.log(`Server listening at http://localhost:${port}`)
})