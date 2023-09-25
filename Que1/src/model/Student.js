const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
      
    },
     email: {
        type: String,
        unique:true,
        required: true
        
    },
    password: {
        type: String,
        required: true
    },
    confpassword: {
        type: String,
        required: true
    },
    adderss: {
        type: String
    },
    phone: {
        type: Number,
        required: true
    },
    Images: [{
         ImageUrl: {
            type: String
         }
    }]

});

module.exports = mongoose.model("Students", studentSchema);