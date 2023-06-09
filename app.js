const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();                              
const port = process.env.PORT || 4005;


app.use(cors());                                   
app.use(express.static(__dirname + '/public'));


app.use(express.urlencoded({ extended: false }))    
app.use(express.json())   


app.set("view engine", "ejs");

app.set("views", __dirname + "/views");


//rutas
app.use("/", require("./routers/user"))
app.use("/admin", require("./routers/admin"))

app.use((req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        texto: "La pagina no se encuentra",
    });
});


//Listener
app.listen(port, () => console.log(`Server listening on port ${port}...`))