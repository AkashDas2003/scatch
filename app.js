const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const ownersRouter=require('./routes/ownersRouter')
const usersRouter=require('./routes/usersRouter')
const productsRouter=require('./routes/productsrouter')


const db=require("./config/mongoose-connection")



app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());


app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);

app.listen(3000);
