const express=require ('express');
const router=express.Router();

//gets index page to display
router.get("/",(req, res ) =>{
    res.render("index");
});

//gets profile page to display
router.get("/profile",(req, res ) =>{
    res.render("profile");
});

//gets signup page to display
router.get("/signup",(req, res ) =>{
    res.render("signup");
});

//gets login page to display
router.get("/login",(req, res ) =>{
    res.render("login");
});

//gets logout page to display
router.get("/logout",(req, res ) =>{
    res.render("logout");
});

module.exports=router;