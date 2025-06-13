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
    try {
        throw new notImplemented("getproblem");
    } catch (error) {
        next(error);
    }
}
function deleteProbem(req,res){
    try {
        throw new notImplemented("deleteProblem");
    } catch (error) {
        next(error);
    }
}
function updateProblem(req,res){
    try {
        throw new notImplemented("updateProblem");
    } catch (error) {
        next(error);
    }
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