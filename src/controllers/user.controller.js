import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponce } from "../utils/ApiResponse.js";
 

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

  //get user detail from front end
  const { fullName, email, username, password } = req.body;
  console.log("email:", email);
  // if(fullName === ""){
  //   throw new ApiError(400, "fullName is required")
  // }
  //validate - user information not empty
  if (
    [fullName, email, username, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
  //check if user already exists: by username, email
  const existedUser = User.findOne({
    $or: [{ username }, { email }],
  });
  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }
  //check for images,  check for avatar
  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
  }
  //upload them to cloudinary, avatar
  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);
  //checking  for images again,  check for avatar
  if (!avatar) {
    throw new ApiError(400, "Avatar file is required");
  }
  //create user object - create entry in db
  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || "",
    email,
    password,
    username: username.toLowerCase(),
  });
  //remove password and refresh token field from response
  const createdUser = await User.findById(user._id).select(
    // iss me default sab select hote he id,  lekin hame jo nahi chahiye vo likna he - lagakar
    "-password -refreshToken"
  );
  //check karenge user aaya ya nahi aaya
  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res.status(201).json(
    new ApiResponce(200, createdUser, "User registered Successfully")
  )
})

export {registerUser}