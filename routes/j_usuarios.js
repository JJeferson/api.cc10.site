const express = require('express');
const router = express.Router();
const mysql   = require('../mysql_jservices').pool;


//----------------------------------------------------------------------------------------------------
// Metodo Get
router.get('/',(req, res, next) => {
     
if (req.body.chave_acesso==='trxc56gyi'){
mysql.getConnection((error,conn) =>{
 conn.release(); 
    if (error) {return res.status(500).send({error:error})}
       
       conn.query(
            'select user_id,nome,email,chave_principal,tipo_user from usuarios',
            (error,resultado,fields) =>{
               
               if (error) {return res.status(500).send({error:error})}
            
                
        return res.status(200).send(resultado)
                conn.release();
        

            }

       )


  })
    }else{
      res.status(201).send({
        mensagem:'Chave de acesso invalida ' 

     });

    }
});


//----------------------------------------------------------------------------------------------------
//insert
    router.post('/',(req, res, next) => {
       
    if (req.body.chave_acesso==='trxc56gyi'){
       
       mysql.getConnection((error,conn) =>{
             conn.query(
                `insert into usuarios
                (nome,chave_principal,tipo_user,email,senha,rg,cpf,endereco,estado,pais,cep,fone,Controla_Acesso)
                 values (?,?,?
                        ,?,?,?
                        ,?,?,?
                        ,?,?,?,?)`,
                [req.body.nome,
                 req.body.chave_principal, 
                 req.body.tipo_usuario,
                 req.body.email,
                 req.body.senha,
                 req.body.rg,
                 req.body.cpf,
                 req.body.endereco,
                 req.body.estado,
                 req.body.pais,
                 req.body.cep,
                 req.body.fone,
                 req.body.Controla_Acesso],
                (error, resultado, field) =>{
                      conn.release(); //serve para resetar o pull para não travar
     
                       if (error){
                           return res.status(500).send({
                             error:error,
                             mensagem:'erro na inserção',
                             response:null
       
     
                           });  
                           
                       }
                       
     
                       res.status(201).send({
                             mensagem:'Insere Usuarios: ',
                             mensagem:'Cadastrado'
     
                       });
                       conn.release();
                }
              
             )
         })
        }else{
          res.status(201).send({
            mensagem:'Chave de acesso invalida ' 

         });

        }
   
  });
  //----------------------------------------------------------------------------------------------------





module.exports = router;