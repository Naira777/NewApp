const {Router} = require('express')
const bcrypt = requre('bcryptjs')
const {check, validatorResult} = require ('express-validator')
const User = require('./models/User')
const jwt = require('jsonwebtoken')
const config = requre('config')
const router = Router()


router.post('/register', 

[
  check('email', 'Nekorekniy email'). isEmail()
  check('password', "minimalnaya dlina 6 simvolov").isLength({min: 6})
],
async(req, res)=>{


try{
    const errors = validatorResult(req)

    if(!errors.isEmpty()){

        return res.status(400).json({errors: errors.array(), message: 'Nekorektnie dannie pri registracii'})
    }

const {email, password} = req.body


const candidate = await User.findOne({email: email})

if(candidate){
  return  res.status(400).json({message: 'takoy polzovatel uje est'})
}

const hashedPassword =  await bcrypt.hash(password, 12)
const user = new User({email, password: hashedPassword})


await user.save()
res.status(201).json({message: 'Polzovatel sozdan'})

}catch (e){

res.status(500).json ({message: 'chto to poshlo ne tak, poprobuyte snova'})
}





})


// /api/auth/login
router.post('/login',


[
   check('email', 'Vvedite korrektniy email').normolizeEmail().isEmail(),
   check('password', 'Vvedite parol').exists()
],


async(req, res)=>{


    try{

        const errors = validatorResult(req)

        if(!errors.isEmpty()){
    
            return res.status(400).json({errors: errors.array(), message: 'Nekorektnie dannie pri vxode v sistemu'})
        }
    
    
    const {email, password} = req.body
    
    
    const user = await User.findOne({email: email})
    
    if(!user){
      return  res.status(400).json({message: 'Polzovatel ne nayden'})
    }
    

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){

       return res.status(400).json({message: 'Neverniy parol'})
    }

const token = jwt.sign(
    
    {

    userId: user.id
},
config.get('jwtSecret'),
{expiresIn: '1h'}
)
  

res.json({token, userId: user.id})


    }catch (e){
    
    res.status(500).json ({message: 'chto to poshlo ne tak, poprobuyte snova'})
    }
    
    
    
    
    
    })


module.exports= router