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
 }
 module.exports=problemRepository;
