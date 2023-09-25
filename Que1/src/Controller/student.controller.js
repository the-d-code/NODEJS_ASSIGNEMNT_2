const Student = require("../model/Student");
exports.RegisterStudent  = async (req, res) => {
    try {
      
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No files were uploaded' });
      }
  
      const { name, email, password, confpassword, address, phone } = req.body;
  
      const images = req.files.map(file => {
        
        return {
          ImageUrl: file.filename
        };
      });
      
      const newStudent = new Student({
        name,
        email,
        password,
        confpassword,
        address,
        phone,
        Images: images
      });
  
    const data =   await newStudent.save();
  
      res.status(200).json({ message: 'Student registered successfully',
    data:data });
    } catch (error) {
      res.status(500).json({ message: 'An error occurred while registering the student' });
    }
  };