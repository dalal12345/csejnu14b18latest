const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: 'public/uploads', // Define the destination directory for uploaded images
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

//Multer stuff ends..
const Router = require('express').Router()
const updateMeRouteController = require('../controller/user/updateMeRouteController')
Router.get('/:secret_key/:userID/update_me',updateMeRouteController.updateMeRouteController)
// Router.post('/:secret_key/:userID/update_me',updateMeRouteController.updateMePostRequestRouteController)


Router.post('/update_me',upload.single('studentPhoto'),updateMeRouteController.updateMePostRequestRouteController)




Router.post('/update_me_x',upload.single('studentPhoto'),updateMeRouteController.updateMeUpdateRequestRouteController)
module.exports = Router
