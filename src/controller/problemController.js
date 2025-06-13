function addproblem(req,res){

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