import React, { useEffect, useMemo, useState } from "react";
// import { Button } from "@mui/material";
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { useMovimentsContext } from "../../context/ContextMoviments";

import { 
  Container, 
  Content, 
  StyledAutocomplete, 
  StyledTextField 
} from "./styles";


const motivoSaidas = [
  {
    value: 'uso-direto',
    label: 'Saída para uso direto',
  },
  {
    value: 'perda',
    label: 'Saída por perda',
  },
  {
    value: 'doacao',
    label: 'Saída para doação',
  },
  {
    value: 'obsoleto',
    label: 'Saída para obsoleto',
  }
];

export function Movements({ title }) {
  // const teste = React.useContext(ContextMoviments);
  const { moviments, setMoviments } = useMovimentsContext();
  const [producSelected, setProducSelected] = useState("")
  const [quantity, setQuantity] = useState("")
  const [fornecedor, setFornecedor] = useState("")
  const [user, setUser] = useState('');
  const [motivo, setMotivo] = useState("");
  const [describe, setDescribe] = useState("");
  const [valor, setValor] = useState();


const list = useMemo(() => {
  const dataLocalStorage = JSON.parse(localStorage.getItem("Cadastro")) || []
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
  

    if (!quantity || !producSelected || (!fornecedor && title === "Entrada") || (!motivo && title === "Saída") || (!describe && title === "Saída") || (!valor && title === "Entrada")) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    if (quantity < 0) {
      toast.error("Adicione um número positivo")
      return;
    }
    
    const type = title === "Entrada" ? "input" : "output"

    if (type === "output") {
      const totalInputQuantity = moviments
          .filter(m => m.type === "input" && m.producSelected === producSelected)
          .reduce((acc, cur) => acc + parseInt(cur.quantity), 0);
      
      const totalOutputQuantity = moviments
          .filter(m => m.type === "output" && m.producSelected === producSelected)
          .reduce((acc, cur) => acc + parseInt(cur.quantity), 0);

      if (parseInt(quantity) > totalInputQuantity - totalOutputQuantity) {
          toast.error("A quantidade de saída não pode exceder a quantidade de entrada.");
          return;
      }
  }

    const newDataInput = {
      producSelected,
      quantity,
      id: uuidv4(),
      dataMoviment: new Date(),
      type,
      user: user,
      fornecedor,
      motivo,
      describe,
      valor: valor * quantity,
    }

    // setMoviments([...moviments, newDataInput]);

    // let newSaveMoviments = moviments
    // newSaveMoviments.push(newDataInput)

    // setMoviments(newSaveMoviments);

    // localStorage.setItem("Moviments", JSON.stringify(newSaveMoviments))

    const newMoviments = [...moviments, newDataInput];

    // Atualizando o estado com o novo array
    setMoviments(newMoviments);
  
    // Salvando no localStorage
    localStorage.setItem("Moviments", JSON.stringify(newMoviments));
    
    // setFormDataState(newDataInput)

    toast.success("Movimentação realizada com sucesso!")
    
    handleClear()

    console.log("MOVIMENTOS: ", moviments)

  }

  function handleClear () {
    setQuantity("");
    setProducSelected(""); 
    setFornecedor("");
    setMotivo("");
    setDescribe("");
    setValor("");
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

          {/* Campo de fornecedor apenas para tipo de entrada */}
          {title === "Entrada" && (
          <StyledTextField
            className="fornecedor"
            id="outlined-basic"
            label="Valor unitário R$"
            variant="outlined"
            type="number"
            sx={{ width: 400 }}
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        )}

          {title === "Entrada" && (
          <StyledTextField
            className="fornecedor"
            id="outlined-basic"
            label="Fornecedor"
            variant="outlined"
            type="text"
            sx={{ width: 400 }}
            value={fornecedor}
            onChange={(e) => setFornecedor(e.target.value)}
          />
        )}

        {/* {title === "Saída" && (
          <FormControl sx={{ width: 400 }} className="motivo">
            <InputLabel id="motivo-label">Motivo</InputLabel>
            <Select
              labelId="motivo-label"
              id="motivo"
              value={motivo}
              onChange={(e) => setMotivo(e.target.value)}
            > {motivoSaidas?.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
            </Select>
          </FormControl>
        )} */}

        {title === "Saída" && (
          <StyledAutocomplete
            disablePortal
            sx={{ width: 400 }}
            className="motivo"
            options={motivoSaidas.map((item) => item.label)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Motivo"
                variant="outlined"
              />
            )}
            value={motivo}
            onChange={(event, newValue) => setMotivo(newValue)}
          />
        )}

        {title === "Saída" && (
            <TextField
            sx={{ width: 400}}
            id="outlined-multiline-flexible"
            label="Descrição: ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀Máx: 300 caracteres"
            className="descricao"
            multiline
            maxRows={4}
            value={describe}
            inputProps={{ maxLength: 300 }}
            onChange={(e) => setDescribe(e.target.value)}
          />
        )}

        <div className="buttons">

          <Button 
          variant="contained" 
          onClick={handleClear}
          color="error">
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
