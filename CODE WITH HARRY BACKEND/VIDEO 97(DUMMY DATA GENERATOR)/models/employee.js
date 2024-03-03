const mongoose=require('mongoose');
const dummydataSchema=new mongoose.Schema({
    name:String,
    age:Number,
    designation:String,
    isManager:Boolean,
    salary:Number,
    language:String
})
const employee=mongoose.model('employee',dummydataSchema);
module.exports=employee;
