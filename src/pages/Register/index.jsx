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
  const [infoRegister, setInfoRegister] = useState([])
  const [productCounter, setProductCounter] = useState(1);
 
  // Função para lidar com a submissão do formulário
  const handleSave = () => {

    if (!productName || !fornecedor) {
      toast.error("Por favor, preencha todos os campos!")
      return;
    }

    const dataProducts = {
      productName,
      fornecedor,
      id: uuidv4(),
      user: user,
      dataRegister: new Date(),
      sequentialId: productCounter
    }

    // Verifica se o produto já está cadastrado
  const productHasStorage = JSON.parse(localStorage.getItem("Cadastro"))
    
  const isProductAlreadyExists = productHasStorage.some(
    (product) => product.productName === dataProducts.productName
  );


  if (isProductAlreadyExists) {
    toast.error("Este produto já foi cadastrado.");
    return;
  }


  // setInfoRegister([...infoRegister, dataProducts])
  setInfoRegister((state) => [...state, dataProducts])

  setProductCounter((prevCounter) => prevCounter + 1);

  // console.log("INFOREGISTER: ",infoRegister)

  localStorage.setItem("Cadastro", JSON.stringify(infoRegister))

  toast.success("Produto cadastrado com sucesso.")
  
  handleClear()
    
  };



  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("Cadastro"));
  //   console.log("Storede: ",storedData)

  //   if (storedData) {
  //     setInfoRegister(storedData);
  //   }
  // },[]);
  
 //Recuperando usuário
  useEffect(() => {
    const user = localStorage.getItem("loggedInUser")
    setUser(user)
    // console.log("USER: ",user)
  },[])

  // Setando Itens cadastrados no localStorage
  useEffect(() => {
    if (infoRegister.length){
      localStorage.setItem("Cadastro", JSON.stringify(infoRegister))  
    }
    console.log("Estados EFFECT: ",infoRegister)
  },[infoRegister])


  // console.log("Storede: ",storedData)
  // const list = useMemo(() => {
  //   const dataLocalStorage = JSON.parse(localStorage.getItem("Cadastro"))
  //   // setData(dataLocalStorage)
  //   return dataLocalStorage
  // },[])
  

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

        {/* {JSON.stringify(infoRegister)} */}
      </Content>
    </Container>
  )
}

