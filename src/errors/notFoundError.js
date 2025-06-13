const baseError = require("./baseError");

class notFoundError extends baseError{
    constructor(details){
        super("not-found-error",404,"resource not found",details);
    }
}
module.exports=notFoundError;