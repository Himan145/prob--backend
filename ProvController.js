const ProvModel = require("./ProvModel");

const CreateProv=async(req,res)=>{
    try{
        const {name,contestId,index,verdict,plink,isSolved}=req.body;
        const existing=await ProvModel.findOne({contestId,index});
        if(existing){
            res.status(200).send({
                success:true,
                message:'Already exist'
            })
        }
        const newproblem=await new ProvModel({name,contestId,index,verdict,plink,isSolved}).save();
        res.status(200).send({
            success:true,
            newproblem,
            message:'Problem created'
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            err,  
            message:'Error while creating problem'
        })
    }
}

const GetProv=async(req,res)=>{
    try{
        const allprobs=await ProvModel.find({});
        res.status(200).send({
            success:true,
            allprobs,
            message:'all problems'
        })
    }
    catch(err){
        console.log(err);
        res.status(500).send({
            success:false,
            err, 
            message:'error while getting problems'
        })
    }
}

module.exports={CreateProv,GetProv};