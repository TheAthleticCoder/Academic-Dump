var express = require("express");
const expressAsyncHandler = require('express-async-handler')
// import expressAsyncHandler from 'express-async-handler';
var bcrypt = require('bcryptjs');
var router = express.Router();

// Load User model
const Buyer = require("../models/Buyers");

// GET request 
// Getting all the users
router.get("/", function (req, res) {
    Buyer.find(function (err, users) {
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
        const newBuyer = new Buyer({
            name: req.body.name,
            password: bcrypt.hashSync(req.body.password, 8),
            email: req.body.email,
            contact_number: req.body.contact_number,
            age: req.body.age,
            batch_name: req.body.batch_name,
            date: req.body.date
        });
        newBuyer.save()
            .then(user => {
                res.status(200).json(user);
            })
            .catch(err => {
                res.status(400).send(err);
            });
    })
);





router.post(
    '/getWallet', (req, res) => {
        Buyer.findOne({ email: req.body.email }).then(user => {
            if (!user) {
                return res.status(400).json({
                    error: "Email not found",
                });
            }
            else
                return res.status(200).json(user);
        });
    })

router.post(
    '/setWallet', (req, res) => {
        Buyer.findOne({ email: req.body.email }).then(user => {
            if (!user) {
                return res.status(400).json({
                    error: "Email not found",
                });
            }
            else {
                user.wallet = req.body.wallet;
                user.save()
                    .then(user => {
                        return res.status(200).json(user);
                    })
                    .catch(err => {
                        return res.status(400).send(err);
                    });
            }
        })
    })


// router.post("/register", (req, res) => {
//     const newBuyer = new Buyer({
//         name: req.body.name,
//         password: bcrypt.hashSync(req.body.password, 8),
//         email: req.body.email,
//         contact_number: req.body.contact_number,
//         age: req.body.age,
//         batch_name: req.body.batch_name,
//         date: req.body.date
//     });


//     newBuyer.save()
//         .then(user => {
//             res.status(200).json(user);
//         })
//         .catch(err => {
//             res.status(400).send(err);
//         });
// });

// POST request 
// Login
// router.post(
//     '/login',
//     expressAsyncHandler(async (req, res) => {
//         const buyer = await Buyer.findOne({ email: req.body.email });
//         if (!buyer) {
//             router.post(
//                 '/login',
//                 expressAsyncHandler(async (req, res) => {
//                     const vendor = await Vendor.findOne({ email: req.body.email });
//                     if (!vendor) {
//                         return res.status(400).json({ error: "Email not found", });
//                     }
//                     else {
//                         if (bcrypt.compareSync(req.body.password, vendor.password)) {
//                             res.send("Email Found");
//                             return res.status(200).json(vendor);
//                         }
//                         else {
//                             return res.status(400).json({ error: "Password Incorrect", });
//                         }
//                     }
//                 })
//             );
//         }
//         else {
//             if (bcrypt.compareSync(req.body.password, buyer.password)) {
//                 res.send("Email Found");
//                 return res.status(200).json(buyer);
//             }
//             else {
//                 return res.status(400).json({ error: "Email not found", });
//             }
//         }
//     })
// );

router.post(
    '/login',
    expressAsyncHandler(async (req, res) => {
        const buyer = await Buyer.findOne({ email: req.body.email });
        if (!buyer) {
            return res.status(400).json({ error: "Email not found", });
        }
        else {
            if (bcrypt.compareSync(req.body.password, buyer.password)) {
                res.send("Email Found");
                return res.status(200).json(buyer);
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
        Buyer.findOne({ email: req.body.email }).then(user => {
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
        Buyer.findOne({ email: req.body.email }).then(user => {
            if (user) {
                user.name = req.body.name;
                user.age = req.body.age;
                user.batch_name = req.body.batch_name;
                user.contact_number = req.body.contact_number;
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
