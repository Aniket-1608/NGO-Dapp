const router = require('express').Router();
const passport = require('passport');

const Client_URL = "http://localhost:3000/";

router.get("/login/success", (req,res) => {
    if(req.user){ 
        res.status(200).json({
            success: true,
            message: "success",
            user: req.user
        });
    }
})

router.get("/login/failed", (req,res) => {
    res.status(401).json({
        success: false,
        message: "failed",
    });
})

router.get("/logout", (req,res) => {
    req.logout();
    res.redirect(Client_URL);
})

// to listern a call from our react app when user clicks the google signin button
router.get("/google", passport.authenticate("google", {scope: ["profile"]}));

router.get("/google/callback", passport.authenticate("google", {
    successRedirect: "http://localhost:3000/authentication",
    failureRedirect: "/login/failed"
}));

router.get("/facebook", passport.authenticate("facebook", {scope: ["profile"]}));

router.get("/facebook/callback", passport.authenticate("facebook", {
    successRedirect: "http://localhost:3000/authentication",
    failureRedirect: "/login/failed"
}));

module.exports = router;