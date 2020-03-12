const express = require('express');
const  app =  express();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const  rotaUsuarios = require('./routes/usuarios'); 

//j rotas
const  rotaJ_usuarios = require('./routes/j_usuarios');
const  rotaJ_logon    = require('./routes/j_logon');

 
//---------------------
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));//apenas dados simples
app.use(bodyParser.json());


app.use('/usuarios',rotaUsuarios); 
 
//--------------------
// j rotas
app.use('/j_usuarios',rotaJ_usuarios);
app.use('/j_logon',rotaJ_logon);

//-----------------


app.use('/manual',(req,res,next)=>{
       res.status(200).sendFile(__dirname+"/routes/manual.html");
});


// tratamento de erro
//caso acesso sem  rota 
app.use((req,res,next)=>{
    const erro = new Error ('Rota não encontrada');
    erro.status=404;
    next(erro);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem: error.message
        }

    });
});



module.exports = app;