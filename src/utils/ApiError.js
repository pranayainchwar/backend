//we are handling api errors
class ApiError extends Error {
    constructor (
        statusCode,
        message = "Something went Wrong",
        errors = [],
        statck = ""
    ){
         super(message)
         this.statusCode = statusCode
         this.data = null
         this.message = message
         this.success = false
         this.errors = errors

         //statck tray to fild bugs in to that file
         if(statck){
            this.stack = statck
         }else{
            Error.captureStackTrace(this, this.contructor)
         }
     }
}

export {ApiError}