import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser =  asyncHandler( async (req,res)=>{
  // res.status(200).json({
  //       message:"ok"
  //   })
  
  //get user detail from front end 
  //validate - user information not empty
  //check if user already exists: by username, email
  //check for images,  check for avatar
  //upload them to cloudinary, avatar
  //create user object - create entry in db
  //remove password and refresh token field from response 
  //check for user creation 
  //return response, if not send error 
  
  const {fullName, email, username, password} = req.body
  console.log("email:",email)

})

export {registerUser}