import styled from "styled-components";
import Modal from "@mui/material/Modal";

export const Container = styled.div`
  .containerTable {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 650px;
    max-width: 800px;
    margin: 0 auto;
  }

  .table {
    min-width: 650px;
    max-width: 800px;
    border-collapse: collapse;
  }

  .header {
    font-weight: bold;
    vertical-align: middle; 
  }

  .btnImage {
    vertical-align: middle;
  }

  .containerSearch {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    align-items: center;
    margin-bottom: 20px;
    width: 800px;
  }

  .search {
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    width: 800px;
  }
`;

// Estilização do modal
export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  width: 600px;
  height: 500px;
  outline: none;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative; 


  img {
    max-width: 100%;
    max-height: 80%;
    /* object-fit: contain; */
    object-fit: cover;
  }

  .close {
    position: absolute;
    /* top: 196px;
    right: 80px; */
    top: -2.5%;
    right: 1%;
    background-color: #e40b1d;
    color: white;
    border: none;
    padding: 7px 15px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #a10303;
    }
/* 
    @media (min-width: 1280px) {
      top: 200px;
      right: 325px;
    }

    @media (min-width: 1366px) {
      top: 200px;
      right: 370px;
    }

    @media (min-width: 1900px) {
      top: 200px;
      right: 370px;
    } */
  }
`;
// Estilização do botão
export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
