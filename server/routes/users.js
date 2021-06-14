
const express = require ('express')
const router = express.Router()
const userData = require('../models/user')

// getting all
router.get('/', async (req,res) =>{
    try{
      const Allusers = await userData.find()
      res.status(200).json(Allusers)
    } catch(err){     
         res.status(500).json({ message : err.message})
    }
})

//getting one
// router.get('/:id', getUser, (req,res) =>{
// res.send(res.user.name)
// })

//creating one
router.post('/',async (req,res) =>{
    
const user = req.body
const newUser = new userData(user)
//  new user({
//     name: req.body.name,
//     email : req.body.email,
//     password : req.body.password,
//     phone : req.body.phone,
//     address : req.body.address,
//     gender : req.body.gender,
//     active : req.body.active,
// })
try{
  await newUser.save()
 res.status(201).json(newUser)
}catch(err){
 res.status(400).json({message:err.message})
}

})

//updating one
// router.patch('/:id',getUser, async(req,res) =>{
// if(req.body.name !==null){
// res.user.name=req.body.name

// }
// if(req.body.subscribedToChannel !==null){
//     res.user.subscribedToChannel=req.body.subscribedToChannel
//     }
//     try{
//         const updateduser = await res.user.save()
//         res.json(updateduser)
//     }catch(err){
//             res.status(400).json({message : err.message})
//     }
// })

//deleting one
// router.delete('/:id', getUser, async(req,res) =>{
// try{
// await res.user.remove()
// res.json('user Deleted')
// }catch(err){
//   res.status(500).json({message:err.message})
// }
// })

//middleware function

async function getUser(req, res ,next){
   let user
    try{
         user = await user.findById(req.params.id)
       if(user == null)
       return res.status(404).json({message : 'user does not exist'})
    }catch(err){
        res.status(500).json({message:err.message})

    }

res.user = user
next()
}


module.exports = router