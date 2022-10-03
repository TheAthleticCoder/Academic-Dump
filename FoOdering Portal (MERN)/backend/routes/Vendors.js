var express = require("express");
var router = express.Router();
const expressAsyncHandler = require('express-async-handler')
// import expressAsyncHandler from 'express-async-handler';
var bcrypt = require('bcryptjs');

// Load User model
const Vendor = require("../models/Vendors");

// GET request 
// Getting all the users
router.get("/", function (req, res) {
    Vendor.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});

// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db

router.post(
    '/register',
    expressAsyncHandler(async (req, res) => {
        const newVendor = new Vendor({
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password, 8),
            email: req.body.email,
            contact_number: req.body.contact_number,
            shop_name: req.body.shop_name,
            opening_time: req.body.opening_time,
            closing_time: req.body.closing_time,
            date: req.body.date
        });
        newVendor.save()
            .then(user => {
                res.status(200).json(user);
            })
            .catch(err => {
                res.status(400).send(err);
            });
    })
);



router.post(
    '/login',
    expressAsyncHandler(async (req, res) => {
        const vendor = await Vendor.findOne({ email: req.body.email });
        if (!vendor) {
            return res.status(400).json({ error: "Email not found" });
        }
        else {
            if (bcrypt.compareSync(req.body.password, vendor.password)) {
                res.send("Email Found");
                return res.status(200).json(vendor);
            }
            else {
                return res.status(400).json({ error: "Email not found"});
            }
        }
    })
);


router.post(
    '/getProfile',
    (req, res) => {
        Vendor.findOne({ email: req.body.email }).then(user => {
            if (user)
                return res.status(200).json(user);
            else {
                return res.status(400).json({
                    error: "Email not found",
                });
            }
        }
        );
    }
)


router.post(
    '/updateProfile',
    (req, res) => {
        Vendor.findOne({ email: req.body.email }).then(user => {
            if (user) {
                user.name = req.body.name;
                user.shop_name = req.body.shop_name;
                user.contact_number = req.body.contact_number;
                user.opening_time = req.body.opening_time;
                user.closing_time = req.body.closing_time;
                user.password = req.body.password;
                user.save()
                    .then(user => {
                        return res.status(200).json(user);
                    })
                    .catch(err => {
                        return res.status(400).json(err);
                    })
            }
            else {
                return res.status(400).json({
                    error: "Email not found",
                });
            }
        }
        );
    }
)



module.exports = router;

