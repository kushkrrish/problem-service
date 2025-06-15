const notFound = require("../errors/notFound.error");
const { Problem}=require("../models");
 class problemRepository{
    async createProblem(problemData){
        try {
            const problem=Problem.create({
                title:problemData.title,
                description:problemData.description,
                testCases:(problemData.testCases)?problemData.testCases:[]
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async  getProblems() {
        try {
            const problems=await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getProblem(id){
       try {
        
         const problem=await Problem.findById(id);
        if(!problem){
            throw new notFound('problem',id);
        }
        return problem;
       } catch (error) {
        console.log(error);
        throw error;
       }
    }
    async deleteProblem(id){
        try {
            console.log(id);
            const problem=await Problem.deleteOne({_id:id});
            if(problem.deletedCount==0){
                throw new notFound('problem',id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
 }
 module.exports=problemRepository;
