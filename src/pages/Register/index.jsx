import React, { useState } from 'react'

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

  // Função para lidar com a submissão do formulário
  const handleSave = () => {
    toast.success("Salvou")

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

        <div className="buttons">

        <Button 
          variant="contained" 
          onClick={handleClear}>
          Limpar
        </Button>

        <Button 
          variant="contained" 
          onClick={handleSave} 
          >Salvar
        </Button>

        </div>

      </Content>
    </Container>
  )
}
