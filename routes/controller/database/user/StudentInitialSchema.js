const mongoose = require('mongoose')
const Schema = mongoose.Schema
const StudentScheme = new Schema({
    studentName:{
        type:String,
        required:true
    },
    studentEmail:{
        type:String,
        required:true
    },
    studentSecretKey:{
        type:String,
        required:false
    },
    studentPasscode : {
      type:String,
        required:true
    }


})

module.exports = mongoose.model('Student',StudentScheme,'Students')