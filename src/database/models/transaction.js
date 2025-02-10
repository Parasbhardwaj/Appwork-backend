import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// const getTransactionSchema = new Schema({
//     date: {
//         type: Date,
//         required: true
//     },
//     description:{
//         type: String,
//         required: true
//     },
//     credit:{
//         type: String,
//         required: false
//     },
//     debit:{
//         type: String,
//         required: false
//     },
//     runningBalance:{
//         type: String,
//         required: true
//     },
// })

const createTransactionSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    transactionType:{
        type: String,
        required: true
    },
    amount:{
        type: String,
        required: true
    }
})

// const GetTransaction = mongoose.model('GetTransaction', getTransactionSchema);

const CreateTransaction = mongoose.model('CreateTransaction', createTransactionSchema);

export {CreateTransaction};