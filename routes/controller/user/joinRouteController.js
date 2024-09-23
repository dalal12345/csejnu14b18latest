const InitialUser = require('../database/user/StudentInitialSchema') ;

const allPasscodes = require('../database/user/StudentPasscodeSchema');


const hash = require('object-hash');
const joinRoutePostRequestController = async (req,res)=>{
    try{
      
      //try starts.....
      
      
        const {studentEmail,studentName,studentPasscode} = req.body;
        
        console.log(studentPasscode,  typeof studentPasscode) ;
        
        
        //Condition starts...
        const userPasscode = await allPasscodes.findOne({studentPasscode});
        
        console.log(userPasscode, typeof userPasscode)
        
        if(studentPasscode===userPasscode.studentPasscode) {
          //if startes...
          let singleUser = await InitialUser.findOne({studentEmail})
        if(singleUser){
            res.redirect(`/update_student`);
        } else {
            const userInHash = hash({studentEmail,studentName,studentPasscode})
            await InitialUser.create({studentName,studentEmail,studentSecretKey:userInHash,studentPasscode})
            singleUser = await InitialUser.findOne({studentEmail});
            res.redirect(`/${singleUser['studentSecretKey']}/${singleUser['_id']}/update_me`)
}
          
          //if ends.....
        } else {
          res.send(`<h1>Forgot passcode?Contact us...<a href="mailto:suahmedramjan1@gmail.com">Send Email</a></h1>`)
        } 
        
        
        
        //condition ends...

        
//Try ends.....
        

    } catch (e) {
        res.json({e:e.message})
    }
}



const joinRouteGetRequestController = async(req,res)=>{
    res.render('user/join');
}

module.exports = {
    joinRoutePostRequestController,
    joinRouteGetRequestController

}