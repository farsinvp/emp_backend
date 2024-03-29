const mongoose=require('mongoose')
const validator=require('validator')

const userSchema=new mongoose.Schema({

    fname:{
        type:String,
        require:true,
        trim:true
    },
    lname:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error('invalid Email')
            }
        }


    },
    mobile:{
        type:String,
        require:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    gender:{
        type:String,
        require:true,
    
    },
    status:{
        type:String,
        require:true
    },
    profile:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    }

})

const users=new mongoose.model('users',userSchema)


module.exports=users
