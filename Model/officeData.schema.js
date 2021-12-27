const mongoose =require('mongoose');
const officeSchema = mongoose.Schema({
    officeName: {
        type: String,
        required: true,
    },
    physicalAddress:{
        type: String,
    },
    email:{
        type: String,
    },
    phoneNumber:{
        type: String,
    },
    maxCapacity:{
        type: Number,
    },
    color:{
        type: String,
    },

    members:[{
        FirstName: {
            type: String,
            required: true,
        },
        LastName: {
            type: String,
            required: true,
        },
        avatar:{
            type: String,
            required:true
        }
    }]

    
})
var officedata=mongoose.model('officedata',officeSchema);
module.exports= officedata;