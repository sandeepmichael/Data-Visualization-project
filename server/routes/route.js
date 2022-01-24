const router = require('express').Router()
const Data = require('../models/Data')



router.get('/getdata', async(req, res) => {
    try {
         const data = await Data.find({})
         return res.json({data})
        
    } catch (error) {
       
        return res.status(404).json({message:error})
    }
})


module.exports = router;