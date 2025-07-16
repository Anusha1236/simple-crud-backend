const mongoose = require('mongoose');

const Plates=mongoose.model(
    'Plates',
    new mongoose.Schema({
        plateType:{
            type:String
        },
        plateSize:{
            type:String
        },
        platePurpose:{
            type:String
        },
        createdOn:{
            type: Date,
            default: Date.now
        }
    },
{timestamps:true})
);
module.exports=Plates;