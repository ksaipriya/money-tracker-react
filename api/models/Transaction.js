const mongoose = require("mongoose");
const {Schema,model} = mongoose;

const TrasactionSchema = new Schema({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    description:{type:String, required:true},
    dateTime:{type:Date, required:true}
});

const TransactionModel = model('Transaction', TrasactionSchema);
 module.exports = TransactionModel;