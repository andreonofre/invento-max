import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import { createBrowserHistory } from 'history';
import { useNavigate } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

import { Container, Content, Form, Label, Input, Button } from "./styles";


export function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [savedData, setSavedData] = useState([]);
  
  // const history = createBrowserHistory ();
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();

    // Verifica se algum campo está vazio
    if (!username || !email || !password) {
      toast.error("Preencha todos os campos!");
      return;
    }

    const newFormData = {
      username,
      email,
      password,
      id: uuidv4(),
    };

    // Salvando os novos dados no array
    // setSavedData((prevSavedData) => [...prevSavedData, newFormData]);

    // Obtém os dados existentes no localStorage
    const existingData = JSON.parse(localStorage.getItem("user_data")) || [];

    // Adiciona o novo usuário aos dados existentes
    const updatedData = [...existingData, newFormData];

    // Somente Usuário
    localStorage.setItem('username', username);

    // Atualiza o localStorage
    localStorage.setItem("user_data", JSON.stringify(updatedData));

    // Limpando o formulário após salvar
    setUsername("");
    setEmail("");
    setPassword("");

    console.log('Dados salvos:', updatedData);

    toast.success("Usuário cadastrado com sucesso!");
    // history.push('/');
    navigate('/');
  };

  return (
    <Container>
      <h1>InventoMax</h1>
      <Content>
        <Form onSubmit={handleSave}>
          <Label htmlFor="usuario">Nome de usuário</Label>
          <Input
            id="usuario"
            type="text"
            className="user"
            placeholder="    Ex: Maria"
            value={username}
            onChange={handleUsernameChange}
          />

          <Label htmlFor="usuario">E-mail</Label>
          <Input
            id="email"
            type="text"
            className="user"
            placeholder="    Ex: maria@gmail.com"
            value={email}
            onChange={handleEmailChange}
          />

          <Label htmlFor="senha">Senha</Label>
          <Input
            id="senha"
            type="password"
            className="pass"
            placeholder=""
            value={password}
            onChange={handlePasswordChange}
          />

          {/* <Link to={`/`}> */}
          <Button className="color-link" type="submit">
            Cadastar
          </Button>
          {/* </Link> */}
        </Form>
      </Content>
    </Container>
  );
}
