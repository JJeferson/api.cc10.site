/*
create table usuarios (
    id_usuario    int not null PRIMARY KEY AUTO_INCREMENT,
    tipo_usuario  varchar(50)  not null,
    usuario       varchar(50)  not null,
    email         varchar(100) not null UNIQUE,
    senha         varchar(32)  not null,
    RG            VARCHAR(100) NOT NULL UNIQUE, 
    CPF           VARCHAR(100) NOT NULL UNIQUE, 
    endereco      VARCHAR(100) NOT NULL, 
    estado        VARCHAR(100) NOT NULL, 
    pais          VARCHAR(100) NOT NULL, 
    cep           VARCHAR(100) NOT NULL, 
    fone          VARCHAR(100) NOT NULL
)



  Manual de uso da API

-Todos os campos são de preenchimento obrigatório
-Campos EMAIL, CPF, RG são UNIQUE, portanto não podem repetir.
-Para maior liberdade de alterações todos campos são CHAR no MySQL         
------------------------------------------------------
------------------------------------------------------
Metodo post / Inserção:
    
     {
    "tipo_usuario" : "Administrador",
    "usuario"      : "teste",
    "email"        : "teste@teste.com",
    "senha"        : "123",
    "rg"           : "123321456", 
    "cpf"          : "00642057036", 
    "endereco"     : "rua teste ", 
    "estado"       : "RS", 
    "pais"         : "BR", 
    "cep"          : "93600000", 
    "fone"         : "1232"
    } 
    
------------------------------------------------------
Metodo GET / Listagem:
http://ENDEREÇO:3000/usuarios

------------------------------------------------------
Metodo GET / Lista um:
http://ENDEREÇO:3000/usuarios/id_usuario

------------------------------------------------------
Metodo DELETE / Apaga um usuario:    
    {
    "id_usuario" : "numero do id"    
    } 
------------------------------------------------------
Metodo PATCH / Alteração:
    
     {
    "id_usuario"   : "Id do usuario",      
    "tipo_usuario" : "Adm",
    "usuario"      : "bip bip",
    "email"        : "9teste@teste.com",
    "senha"        : "123",
    "rg"           : "123321456000", 
    "cpf"          : "00642057036000", 
    "endereco"     : "rua teste ", 
    "estado"       : "RS", 
    "pais"         : "BR", 
    "cep"          : "93600000", 
    "fone"         : "1232"
    } 

------------------------------------------------------



*/