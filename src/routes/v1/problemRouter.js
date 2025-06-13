const {problem_controller}=require("../../controller");

const express=require("express");
const problemRoute=express.Router();

problemRoute.get('/',problem_controller.getProblem);
problemRoute.post('/',problem_controller.addproblem);
problemRoute.delete('/',problem_controller.deleteProbem);
problemRoute.get('/ping',problem_controller.pingCheck);

module.exports=problemRoute;