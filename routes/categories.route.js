const router = require('express').Router()
const Category = require('../models/Category.model')

// Create category
router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const saveCat = await newCat.save()
        res.status(201).json(saveCat)
    } catch (error) {
        res.status(500).json(error)
    }
})

// Get all categories
router.get("/", async (req, res) => {
    try {
        const cats = await Category.find()
        res.status(201).json(cats)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router