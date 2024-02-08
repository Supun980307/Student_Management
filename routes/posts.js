const express = require('express');


const Details = require('../models/studData');
const studData = require('../models/studData');
const uploadMiddleware = require('../middlewares/multerMiddleware');

const router = express.Router();
const multer = require('multer');
const upload = multer();
//save details

router.post('/detail/save',upload.single('image'), (req,res)=>{
    console.log(req.body)

    let newDetails = new Details(req.body);
    console.log(newDetails);
    newDetails.save()

        .then(()=>{
            return res.status(200).json({
                success: "Details save successfully"
            });
        })
        .catch((err)=>{
            if (err.code === 11000 || err.code === 11001) {
                console.log('Duplicate key error: The specified id already exists.');
            } else {
                console.log('Error saving document:', err);
            }
        });

});

//get details

router.get('/details', (req,res)=>{
    Details.find().exec()
    .then((studData)=>{
        res.status(200).json({
            success: true,
            existingDetails: studData
        });
    })
    .catch((err)=>{
        res.status(400).json({
            error: err
        })
    })
});

//update details

router.put('/details/update/:id', (req, res)=>{
    Details.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        }
    )
    .then(()=>{
        res.status(200).json({
            success: "Updated Successfully"
        });
    })
    .catch((err)=>{
        res.status(400).json({
            error: err
        });
    })
});

//delete details

router.delete('/details/delete/:id', (req,res)=>{
    Details.findByIdAndDelete(
        req.params.id,
    ).exec()
    .then(()=>{
        res.status(200).json({
            message: "Deleted Successfully"
        })
    })
    .catch((err)=>{
        res.status(400).json({
            message: "Delete unsuccessfully",err
        })
    })
})



module.exports = router;