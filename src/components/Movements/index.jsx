import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { useMovimentsContext } from "../../context/ContextMoviments";

import { 
  Container, 
  Content, 
  StyledAutocomplete, 
  StyledTextField 
} from "./styles";

export function Movements({ title }) {
  // const teste = React.useContext(ContextMoviments);
  const { moviments, setMoviments } = useMovimentsContext();
  const [producSelected, setProducSelected] = useState("")
  const [quantity, setQuantity] = useState("")
  const [user, setUser] = useState('');


const list = useMemo(() => {
  const dataLocalStorage = JSON.parse(localStorage.getItem("Cadastro"))
  // setData(dataLocalStorage)
  return dataLocalStorage
},[])


 //Recuperando usuário
 useEffect(() => {
  const user = localStorage.getItem("loggedInUser")
  setUser(user)
  // console.log("USER: ",user)
},[])

  function handleSave () {
  
    if (!quantity || !producSelected) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    if (quantity < 0) {
      toast.error("Adicione um número positivo")
      return;
    }
    
    const type = title === "Entrada" ? "input" : "output" 
    
    const newDataInput = {
      producSelected,
      quantity,
      id: uuidv4(),
      dataMoviment: new Date(),
      type,
      user: user
    }

    // setMoviments([...moviments, newDataInput]);

    let newSaveMoviments = moviments
    newSaveMoviments.push(newDataInput)

    setMoviments(newSaveMoviments);
    
    localStorage.setItem("Moviments", JSON.stringify(newSaveMoviments))
    // setFormDataState(newDataInput)

    toast.success("Movimentação realizada com sucesso!")
    
    handleClear()

    console.log("MOVIMENTOS: ", moviments)

  }

  function handleClear () {
    setQuantity("")
    setProducSelected(""); 
  }
  
  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        <StyledAutocomplete
          disablePortal
          id="combo-box-demo"
          options={list.map((item) => item.productName)}
          sx={{ width: 400 }}
          value={producSelected}
          onChange={(event, newValue) => setProducSelected(newValue)}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              label="Nome produto"
            />
          )}
        />

        <StyledTextField
          className="quantity"
          id="outlined-basic"
          label="Quantidade"
          variant="outlined"
          type="number"
          sx={{ width: 400 }}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <div className="buttons">

          <Button 
          variant="contained" 
          onClick={handleClear}
          >
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
  );
}
