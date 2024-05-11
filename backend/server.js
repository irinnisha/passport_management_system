import express from 'express'
import mongoose from 'mongoose';
import {User} from './Models/User.js'
const app = express();

//show signup
app.get ('/signup',(req,res)=>{
    res.render("signup.ejs")
})

//create user
app.post('/signup',(req,res)=>{
    const {nid_bc_no,email,phone_no,password}=req.body
})

//login user
app.post('/login', async (req,res)=>{
    const{nid_bc_no,password}=req.body
    try {
        let user= await User.findOne({nid_bc_no})
        console.log("getting user ",user)

        if(!user) res.render("login.ejs",{msg:'User Not Found'})

        else if(user.password != password){
            res.render("login.ejs",{msg: "Invalid Password"})
        }else{
            res.render("profile.ejs",{user})
        }
    } catch (error) {
        res.send("Error Accure")
    }
})


 // app.get("/users", async (req, res) => {
//     let users = await User.find().sort({createdAt:-1});
//     res.render("user_dashboard.ejs",{users})
//   });
  
//show login page
app.get('/',(req,res)=>{
    res.render("login.ejs")
})

mongoose.connect(
  "mongodb+srv://yasin:12345@passport.ahri6i9.mongodb.net/",{
dbName:"passport"
  }
).then(()=>console.log("Mongodb Connected")).catch((error)=>console.log(error));


const Port = 1000;

app.listen(Port,()=>console.log(`Server is running on port ${Port}`))