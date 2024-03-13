const cookieSession = require('cookie-session');
const express = require('express');
const passportSetUp = require('./passport');
const authRoute = require('./routes/auth');
const mailRoute = require('./routes/mail');
const cors = require('cors');
const passport = require('passport');
const app = express();

    // console.log("Hello world/...");
    app.use(cookieSession({
        name:"session",
        keys: ["lama"],
        maxAge: 24*60*60*100
    }))

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(cors({
        origin: "http://localhost:3000",
        methods: "GET, POST, PUT, DELETE",
        Credential: true
    }))
    // app.use(cors());
    app.use(express.json({ limit: "25mb" }));
    // app.use(express.urlencoded({ limit: "25mb" }));
    app.use((req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", "*");
        next();
    });

    app.use("/auth", authRoute);
    app.use("/mail", mailRoute);

    app.listen("5000", () => {
        console.log("App is listening...")
    })