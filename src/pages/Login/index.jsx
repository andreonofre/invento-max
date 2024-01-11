import React from 'react'
import { useParams, useNavigate, json } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Container, Content, Form, Label, Input, Button } from './styles'

export function Login () {
  return (
    <Container>
        <h1>InventoMax</h1>
        <Content>
            <Form onSubmit={"handleSave"}>

                <Label htmlFor='usuario'>E-mail</Label>
                <Input 
                id='usuario'
                type='text'
                className='user'
                placeholder='    Ex: maria@gmail.com'
                 />

                <Label htmlFor='senha'>Senha</Label>
                <Input 
                id='senha' 
                type='password'
                className='pass'
                placeholder=''
                />

                <Link to={`/dashboard`}>
                  <Button type="submit">Entrar</Button>
                </Link>

                <p>Ainda não possui conta?
                  <Link to={`/register`}>Clique aqui</Link>
                </p>
            </Form>
        </Content>
    </Container>
  )
}
