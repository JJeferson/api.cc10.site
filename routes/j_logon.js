const express = require('express');
const router = express.Router();
const mysql   = require('../mysql_jservices').pool;

 
router.patch('/',(req, res, next) => {
     
  if (req.body.chave_acesso==='trxc56gyi'){
 mysql.getConnection((error,conn) =>{
 conn.release(); 
    if (error) {return res.status(500).send({error:error})}
       
       conn.query(
            `select * from usuarios 
             where email=? and senha=? and chave_principal=?`,
               [req.body.email,
                req.body.senha,
                req.body.chave_principal],
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
 



module.exports = router;
