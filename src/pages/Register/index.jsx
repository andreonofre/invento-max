import React, { useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { Menu } from '../../components/Menu'
import { Button } from "@mui/material";

import { toast } from 'react-toastify';
import { Container, 
  Content, 
  StyledTextField,  
} from './styles'

export function Register () {
  const [productName, setProductName] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [user, setUser] = useState('');
  const [infoRegister, setInfoRegister] = useState([]);
  const [imageUrl, setImageUrl] = useState('');

 
  // Recuperando usuário
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser")
    setUser(user)
  },[])

  // Carregando dados do localStorage ao montar o componente
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("Cadastro"));
    if (storedData) {
      setInfoRegister(storedData);
    }
  },[]);

  // Função para lidar com a submissão do formulário
  const handleSave = () => {
    if (!productName || !fornecedor) {
      toast.error("Por favor, preencha todos os campos!")
      return;
    }

    const dataProducts = {
      productName,
      fornecedor,
      url: imageUrl,
      id: uuidv4(),
      user,
      dataRegister: new Date(),
      sequentialId: infoRegister.length + 1 // Gerando o número sequencial dinamicamente
    }

    const productHasStorage = JSON.parse(localStorage.getItem("Cadastro")) || [];
    
    const isProductAlreadyExists = productHasStorage.some(
      (product) => product.productName === dataProducts.productName
    );

    if (isProductAlreadyExists) {
      toast.error("Este produto já foi cadastrado.");
      return;
    }

    const updatedRegister = [...productHasStorage, dataProducts];
    setInfoRegister(updatedRegister);
    localStorage.setItem("Cadastro", JSON.stringify(updatedRegister));

    toast.success("Produto cadastrado com sucesso.")
    handleClear();
  };

  // Função para lidar com a limpeza do formulário
  const handleClear = () => {
    setProductName('');
    setFornecedor('');
  };

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Cadastrar Produto</h1>

        <StyledTextField 
          className="product"
          id="outlined-basic" 
          label="Nome Produto" 
          variant="outlined"
          type="text"
          sx={{ width: 400}}
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        
        <StyledTextField 
          className="quantity"
          id="outlined-basic" 
          label="Fornecedor" 
          variant="outlined"
          type="text"
          sx={{ width: 400}}
          value={fornecedor}
          onChange={(e) => setFornecedor(e.target.value)}
        />

        <StyledTextField 
          className="imageUrl"
          id="outlined-basic" 
          label="URL da Imagem" 
          variant="outlined"
          type="text"
          sx={{ width: 400}}
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />


        <div className="buttons">
          <Button 
            variant="contained" 
            onClick={handleClear}>
            Limpar
          </Button>

          <Button 
            variant="contained" 
            onClick={handleSave} 
          >
            Salvar
          </Button>
        </div>
      </Content>
    </Container>
  )
}

