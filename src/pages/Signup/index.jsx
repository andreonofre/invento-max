import React, { useEffect, useState } from "react";
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
  const [savedData, setSavedData] = useState([]);

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
  
    let newSavedData = savedData
    newSavedData.push(newFormData)

    setSavedData(newSavedData);
    
    localStorage.setItem("user_data", JSON.stringify(newSavedData));

    console.log("Estado depois de atualizar: ", newSavedData);
    

    toast.success("Usuário Cadastrado com sucesso, faça o login abaixo!")
    // Limpa os campos do formulário
    setUsername("");
    setEmail("");
    setPassword("");
    
    // Navega para a próxima página
    navigate("/");
  };


  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user_data") || "[]")
    setSavedData(userData)
    
  },[])


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
            placeholder="Ex: Maria"
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

    
          <Button className="color-link" type="submit">
            Cadastar
          </Button>

        </Form>
      </Content>
    </Container>
  );
}
