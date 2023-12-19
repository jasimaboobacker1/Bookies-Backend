const users = require('../Models/userSchema')
const jwt = require('jsonwebtoken')

// register
exports.register = async(req,res) => {
    console.log('Inside register controller function');
    const {username,email,password} = req.body
    try{
        const existingUser = await users.findOne({email})
        if(existingUser){
            res.status(406).json("Account already exist!!! Please Login")
        }else{
            const newUser = new users({
                username, email, password
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
        }
        catch(err){
            res.status(401).json(`Register API Failed , Error : ${err}`)
        }
    }

   
// login
exports.login = async(req,res)=>{
    console.log('inside login function');
    const {email,password}= req.body
    try{
        const existingUser = await  users.findOne({email,password})
      if(existingUser){
        const token = jwt.sign({userId:existingUser._id},"supersecretekey1234")
        res.status(200).json({
            existingUser,token
        })
      }else{
        res.status(406).json("Incorrect Email or Password")
      } 
    }
    catch(err){
        res.status(401).json(`Login API Failed, Error : ${err}`)
    }
}

// gett alluser

exports.getallusers = async(req,res)=>{
    try{
        const allusersdetails=await users.find()
        res.status(200).json(allusersdetails)

    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)
    }
}

// delete user

exports.deleteuser = async(req,res)=>{
    const {userid}=req.body
    try{
        await users.findByIdAndDelete({_id:userid})
        res.status(200).json("Deleted")

    }
    catch(err){
        res.status(401).json(`Error!!! Transaction failed: ${err}`)

    }
}