
const express=require('express');

const User=require('../models/User');
const {body,validationResult}=require('express-validator');


const router=express.Router()

// create a user using POST "/api/auth/createauser".Nologin reqired
router.post('/createauser',[body('name','Enter a valid name').isLength({min: 3}),
body('email','Enter a valid email').isEmail(),
body('password','Password mustbeatleast 5 characters').isLength({min: 5}),], async (req,res)=>{
// if there are errors , return Bad request and errors

const errors=validationResult(req);
if(!errors.isEmpty())
{
    return res.status(400).json({errors:errors.array() });

}
// check whether the user with  same email exists already
let user=User.findOne({email:req.body.email});
console.log(user);
    if(user){
        return res.status(400).json({error:"Sorry a user with this email already exists"})

    }
 user=await User.create({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password

})

// .then(user=>res.json(user))
// .catch(err=>{console.log(err)
// res.json({error: 'Please enter a unique value for email',message:err.message})
res.json({"Nice":"nice"});

});



//  })
module.exports=router