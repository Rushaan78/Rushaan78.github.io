const express=require ('express');
const router=express.Router();

router.get("/",(req, res ) =>{
    // res.send ("<h1>HOMEPAGE</h1>")
    res.render("index");
});


router.get("/profile",(req, res ) =>{
    // res.send ("<h1>HOMEPAGE</h1>")
    res.render("profile");
});

router.get("/signup",(req, res ) =>{
    // res.send ("<h1>HOMEPAGE</h1>")
    res.render("signup");
});

router.get("/login",(req, res ) =>{
    // res.send ("<h1>HOMEPAGE</h1>")
    res.render("login");
});

router.get("/logout",(req, res ) =>{
    // res.send ("<h1>HOMEPAGE</h1>")
    res.render("logout");
});