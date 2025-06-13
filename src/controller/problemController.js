const notImplemented = require("../errors/unimplemented.error");
const {StatusCodes}=require("http-status-codes")
function addproblem(req,res,next){
    try {
        throw new notImplemented("addproblem");
    } catch (error) {
        next(error);
    }
}
function getProblem(req,res){

}
function deleteProbem(req,res){

}
function updateProblem(req,res){

}
function pingCheck(req,res){
    return res.json({msg:"PingPong"});
}
module.exports={
    addproblem,
    getProblem,
    deleteProbem,
    updateProblem,
    pingCheck
}