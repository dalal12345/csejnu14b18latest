const allStudents = require('../database/user/StudentFinalSchema');
const apiRouteController = async (req,res)=>{
    const allStudentsInfo = await allStudents.find({showUser:true},{
_id:-1,
studentName : 1,
studentSchoolName : 1,
studentCollegeName:1,
studentHomeTown:1,
studentPhoto:1,
favouriteQuote:1,
fbId:1,





}).sort({studentName:1});

console.log(allStudentsInfo);

    res.json(allStudentsInfo);
}

module.exports = apiRouteController;