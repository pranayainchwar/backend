import multer from "multer"
 const storage = multer.diskStorage({
    //cb call back ie ()=>{}
   destination: function (req, file, cb) {
     cb(null, "./public/temp");
   },
   filename: function (req, file, cb) {

     cb(null, file.originalname);
   },
 }); 

 export const upload = multer({ storage});










//   const storage = multer.diskStorage({
//     //cb call back ie ()=>{}
//     destination: function (req, file, cb) {
//       cb(null, "/tmp/my-uploads");
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//       cb(null, file.fieldname + "-" + uniqueSuffix);
//     },
//   });

//   const upload = multer({ storage: storage });