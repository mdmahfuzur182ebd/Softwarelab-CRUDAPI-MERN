
const getAllUsers = (req , res) => {
   res.status(200).json({
      message: "All users",
    });
};

const getOneUsers = (req , res) => {
   res.status(200).json({
      message: "Get One users",
    });
};


const createUsers = (req , res) => {
   res.status(201).json({
      message: "User is Created",
    });
};




const updateUsers = (req , res) => {
   res.status(200).json({
      message: "Update Users",
    });
};


const deleteUsers = (req , res) => {
   res.status(200).json({
      message: "Delete users",
    });
};


module.exports ={
    getAllUsers, 
    getOneUsers, 
    createUsers, 
    updateUsers, 
    deleteUsers,
}