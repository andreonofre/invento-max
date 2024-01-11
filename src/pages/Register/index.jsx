import React from 'react'
import { Link } from "react-router-dom";

import { 
    Container, 
    Content, 
    Form, 
    Label, 
    Input, 
    Button 
} from './styles';

export function Register () {
  return (
    <Container>
        <h1>InventoMax</h1>
        <Content>
            <Form onSubmit={"handleSave"}>
                <Label htmlFor='usuario'>Nome de usuário</Label>
                <Input 
                id='usuario'
                type='text'
                className='user'
                placeholder='    Ex: Maria'
                 />

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
              
                <Link to={`/`}>
                    <Button className="color-link" type="submit">
                        Cadastar
                    </Button>
                </Link>
        
            </Form>
        </Content>
    </Container>
  );
};
