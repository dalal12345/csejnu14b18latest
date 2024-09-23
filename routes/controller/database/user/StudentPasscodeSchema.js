const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const StudentPasscodeSchema = new Schema({
    
    
    studentPasscode : {
      type: String,
        required:true
    }


}) ;

module.exports = mongoose.model('',StudentPasscodeSchema,'StudentPasscodeSchema');