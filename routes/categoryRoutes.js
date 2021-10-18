const database = require('../database/db')
const express = require('express')
const { v4: uuidv4 } = require('uuid');
const router = express.Router()

router.get('/all', (req, res) => {

    try {
        res.status(200).json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }

})
router.post('/add', (req, res) => {

    try {
        const { name } = req.body
        let newCategory = {
            name,
            id: uuidv4()
        }
        res.status(200).json({
            categories: category,
            message: error.message,
            status: "SUCCESS"
        })
    } catch (error) {
        res.status(200).json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }

})
module.exports = router