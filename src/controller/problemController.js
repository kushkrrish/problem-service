const notImplemented = require("../errors/unimplemented.error");
const {StatusCodes}=require("http-status-codes");
const { ProblemService } = require("../services");
const { ProblemRepository } = require("../repository");
const problemService=new ProblemService(new ProblemRepository());
async function addproblem(req,res,next){
    try {
        const newProblem=await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success:true,
            message:"successfully created problem",
            err:{},
            data:newProblem
        })
    } catch (error) {
        next(error);
    }
}
async function getProblems(req,res){
    try {
        const problems=await problemService.getProblem();
        return res.status(StatusCodes.OK).json({
            success:true,
            message:"successfully created problem",
            err:{},
            data:problems
        })
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
    getProblems,
    deleteProbem,
    updateProblem,
    pingCheck
}