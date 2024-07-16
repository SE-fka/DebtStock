import express from "express";
import {   
    
    getDebtStock,
    getEducationExpenditure,
    filteredDebtByYear,
    filteredEducationeByYear,
    totalDebtStock,
    createDebtStock,
    createEducationExpenditure,
    updateDebtStock,
    deleteDebtStock,
    deleteEducationExpenditure
} from "../controllers/controller.js";

const router = express.Router();
 
//Routing fro external debt stock
router.get('/api/debt-stock', getDebtStock);
router.get('/api/debt-stock/:startYear/:endYear', filteredDebtByYear);
router.get('/api/total/debit-stock', totalDebtStock);
router.post('/api/debt-stock', createDebtStock);
router.delete('/api/debt-stock/:id', deleteDebtStock);
router.put('/api/debt-stock/:id', updateDebtStock);

//Routing fro education expenditur
router.get('/api/education-expenditure', getEducationExpenditure);
router.get('/api/education-expenditure/:startYear/:endYear', filteredEducationeByYear);
router.post('/api/education-expenditure', createEducationExpenditure);
router.delete('/api/education-expenditure/:id', deleteEducationExpenditure);


export default router;