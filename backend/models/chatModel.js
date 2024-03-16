//chatName
//isGroupChat
//users
//latestMessage -- to display new messages on top.
//GroupAdmin


const mongoose = require('mongoose');

const chatModel = mongoose.Schema(
    {
        chatName:{type:String , trim:true},
        isGroupChat:{type:Boolean,default:false},
        users:[
            {
                type: mongoose.Schema.Types.ObjectID,
                ref:"User", // reference to user Model

            },
        ],
        latestMessage:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Message", // reference to message Model
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectID,
            ref:"User",
        }
    },

    {
        timestamps:true,
    }

);

const Chat = mongoose.model("Chat",chatModel);

module.exports = Chat;