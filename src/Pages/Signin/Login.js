import './Login.css';
import React from 'react';
import { useState } from 'react';

function Login() {

//declarar os states que serão usados na manipulação dos dados.
const[name,setName] = useState('');
const[email,setEmail] = useState('');
const[cpf,setCpf] = useState('');
const[telnumber,setTelnumber] = useState('');

//funçoes pra atualizar os states com os valores dos inputs

function handleName(e){
    setName(e.target.value)
   
}
function handleEmail(e){
  setEmail(e.target.value)
  
}
function handleCPF(e){
  setCpf(e.target.value)
 
}
function handleTelNumber(e){
  setTelnumber(e.target.value)
  
}
function handleSubmit(e){
  e.preventDefault();

  //criando o objeto com os dados e armazenando no localstorage
  const usuariodata = {name,email,cpf,telnumber};
  localStorage.setItem(name, JSON.stringify(usuariodata));
  
}


// estrutura basica do form sendo retornada pra tela
  return (
    <>
    <div className="Login">
     <form onSubmit={handleSubmit}>
      <label>
        Nome Completo:
        <input type='text' value={name} onChange={handleName}></input>
      </label>
      <label>
        E-mail
        <input type='text' value={email} onChange={handleEmail}></input>
      </label>
      <label>
        CPF:
        <input type='text' value={cpf} onChange={handleCPF}></input>
      </label>
      <label>
        Telefone
        <input type='text' value={telnumber} onChange={handleTelNumber}></input>
      </label>
    
      <br />
      <button type="submit">Login - </button>
      <button type="submit"> Cadastrar </button>
      </form>
    </div>
    </>
  );
}

export default Login;
