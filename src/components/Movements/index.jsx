import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

import { 
  Container, 
  Content, 
  StyledAutocomplete, 
  StyledTextField 
} from "./styles";

export function Movements({ title }) {
  const options = 
  [
    {label: "Carro"}, 
    {label: "Moto"},
  
  ]

  function handleSave () {
    toast.success("Salvou")
  }

  function handleClear () {
    toast.success("Limpou estados")
  }
  
  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        <StyledAutocomplete
          disablePortal
          id="combo-box-demo"
          options={options}
          sx={{ width: 400 }}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              label="Nome produto"
              // value={productName}
              // onChange={(e) => setProductName(e.target.value)}
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
          // value={quantity}
          // onChange={(e) => setQuantity(e.target.value)}
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
