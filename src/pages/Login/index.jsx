import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Container, Content, Form, Label, Input, Button } from './styles'
import { toast } from 'react-toastify';
import ParticlesComponent from '../../components/ParticlesBackground/ParticlesBg';


export function Login () {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

     // Verifica se algum campo está vazio
     if (!email || !password) {
      toast.error("Preencha todos os campos!");
      return;
    }

    // Obtém os dados do localStorage
    const userData = JSON.parse(localStorage.getItem('user_data')) || [];
    
    // Verifica se o usuário existe
    const user = userData.find((user) => user.email === email && user.password === password);
    
    if (user) {
       // Salva o nome do usuário no localStorage
      localStorage.setItem('loggedInUser', user.username);
      // Usuário autenticado, redireciona para a dashboard
      toast.success('Seja Bem-Vindo(a)!');
      navigate('/dashboard');
    } else {
      toast.error('Credenciais inválidas. Cadastre-se primeiro.');
    }
  };


  return (
    <>
        <ParticlesComponent/>
    <Container>
        <h1>InventoMax</h1>
        <Content>
            <Form onSubmit={handleLogin}>

                <Label htmlFor='usuario'>E-mail</Label>
                <Input 
                id='email'
                type='text'
                className='user'
                placeholder='Ex: maria@gmail.com'
                value={email}
                onChange={handleEmailChange}
                 />

                <Label htmlFor='senha'>Senha</Label>
                <Input 
                id='senha' 
                type='password'
                className='pass'
                placeholder=''
                value={password}
                onChange={handlePasswordChange}
                />

                {/* <Link to={`/dashboard`}> */}
                  <Button type="submit">Entrar</Button>
                {/* </Link> */}

                <p>Ainda não possui conta?
                  <Link to={`/signup`}>Clique aqui</Link>
                </p>
            </Form>
        </Content>
    </Container>
    </>
  )
}
