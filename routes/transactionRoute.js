import express from 'express'
import { createTransaction, deleteTransaction, getTransactions, getTransactionSummary } from '../controllers/transactionController.js'

const router = express.Router()

router.get("/:userId", getTransactions)
router.post("/", createTransaction)
router.get("/summary/:userId", getTransactionSummary)
router.delete("/:id", deleteTransaction)

export default router