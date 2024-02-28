const mongoose=require('mongoose');

const ProvModelSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    contestId:{
        type:Number,
    },
    index:{
        type:String
    },
    verdict:{
        type:String
    },
    plink:{
        type:String,
    },
    isSolved:{
        type:Boolean
    }
});

module.exports= mongoose.model('ProvModel',ProvModelSchema);