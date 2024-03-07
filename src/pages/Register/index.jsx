import React, { useEffect, useMemo, useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import { Menu } from '../../components/Menu'
import { Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

import { toast } from 'react-toastify';
import { Container, 
  Content, 
  StyledTextField,  
} from './styles'


const localizations = [
  {
    value: '1',
    label: 'Corredor 1',
  },
  {
    value: '2',
    label: 'Corredor 2',
  },
  {
    value: '3',
    label: 'Corredor 3',
  },
  {
    value: '4',
    label: 'Corredor 4',
  }
];

const prateleiras = [
  {
    value: '1',
    label: 'Prateleira 1 - A',
  },
  {
    value: '2',
    label: 'Prateleira 1 - B',

  },
  {
    value: '3',
    label: 'Prateleira 1 - C',
  },
  {
    value: '1',
    label: 'Prateleira 2 - A',
  },
  {
    value: '2',
    label: 'Prateleira 2 - B',

  },
  {
    value: '3',
    label: 'Prateleira 2 - C',
  },
  {
    value: '1',
    label: 'Prateleira 3 - A',
  },
  {
    value: '2',
    label: 'Prateleira 3 - B',

  },
  {
    value: '3',
    label: 'Prateleira 3 - C',
  },
];



export function Register () {
  const [productName, setProductName] = useState('');
  const [user, setUser] = useState('');
  const [infoRegister, setInfoRegister] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [localization, setLocalization] = useState('');
  const [prateleira, setPrateleira] = useState('');

 
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
    if (!productName || !imageUrl || !localization || !prateleira) {
      toast.error("Por favor, preencha todos os campos!")
      return;
    }

    const dataProducts = {
      productName,
      url: imageUrl,
      id: uuidv4(),
      user,
      dataRegister: new Date(),
      sequentialId: infoRegister.length + 1,
      localization,
      prateleira, // Gerando o número sequencial dinamicamente
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
    setProductName("");
    setImageUrl("");
    setLocalization("");
    setPrateleira("");
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
          className="imageUrl"
          id="outlined-basic" 
          label="URL da Imagem" 
          variant="outlined"
          type="text"
          sx={{ width: 400}}
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />

            <FormControl sx={{ width: 400 }} className="corredor">
            <InputLabel id="motivo-label">Localização Corredor</InputLabel>
            <Select
              labelId="motivo-label"
              id="motivo"
              value={localization}
              onChange={(e) => setLocalization(e.target.value)}
            > {localizations.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
            </Select>
          </FormControl>

            <FormControl sx={{ width: 400 }} className="">
            <InputLabel id="motivo-label">Localização Prateleira</InputLabel>
            <Select
              labelId="motivo-label"
              id="motivo"
              value={prateleira}
              onChange={(e) => setPrateleira(e.target.value)}
            > {prateleiras.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
            </Select>
          </FormControl>


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

