const express = require('express')
const { addTransaction, getAllTransaction, editTransaction, deleteTransaction } = require('../controllers/transactionController')

//router object
const router = express.Router()

//routers
//add transaction POST Method
router.post('/add-transaction', addTransaction)

//edit transaction POST Method
router.post('/edit-transaction', editTransaction)

//delete transaction POST Method
router.post('/delete-transaction', deleteTransaction)



//gettransaction via post as userid needs to be posted, because gettransaction will work as per userid
router.post('/get-transaction', getAllTransaction)



//export
module.exports = router