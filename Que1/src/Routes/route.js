const router = require('express').Router();
const StudentController = require('../Controller/student.controller');
const uploadfile  = require('../Middleware/uploadfile');

router.post('/register',uploadfile.upload, StudentController.RegisterStudent );
router.get("/", (req, res) => {
    res.render("index.hbs");
});


module.exports = router;