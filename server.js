const express = require("express"); //IMPORTAR EXPRESS

const app = express(); //INVOCACION FUNCION EXPRESS

app.get ("/acamica/dwfs/alumnos", (req,response) => {
    response.json ({
        Nombre:"Hola"
    }) 

} ) 

app.get ("/acamica/dwfs/alumnos/:id", (req,response) =>{
    if (parseInt(req.params.id).toString()==="NaN"){
        response.status(400).json ({message:"No permito texto, solo numeros"})
    }
    response.json ({
        id:req.params.id
    })
})


app.listen (3000,() => { //ESCUCHA EN UN PUERTO Y CALLBACK FUNCTION COMO PARAMETROS
    console.log("Estas escuchando?");
})

