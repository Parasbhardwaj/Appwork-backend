const express = require('express');
const dotenv = require('dotenv').config();
const {mongoSetup} = require('./src/database/dbConnection')
const {CreateTransaction} = require('./src/database/models/transaction');
const cors = require('cors');

const app = express();

const port = process.env.PORT;

mongoSetup();

app.use(cors());

app.use(express.json());

app.post('/create',async (req,res)=>{
  console.log(req.body);
  let transaction = {
    date: new Date(),
    description: req.body.description,
    transactionType: req.body.transactionType,
    amount: req.body.amount,
  }
  let data = await CreateTransaction.create(transaction);
  res.status(200).send({message: "Transaction created successfully"});
})

app.get("/transactions",async (req,res)=>{
  let data = await CreateTransaction.find();
  res.status(200).send(data.reverse());
})

app.listen(port,()=>{
    console.log("Server listening on port 5000");
    
})