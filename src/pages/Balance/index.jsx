import React, { useEffect, useState } from "react";
import { Menu } from "../../components/Menu";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container } from "./styles";

export const Balance = () => {
  const [dataList, setDataList] = useState([]);
  const [moviments, setMoviments] = useState([]);

  useEffect(() => {
    const recoverListProducts = JSON.parse(localStorage.getItem("Cadastro")) || [];
    setDataList(recoverListProducts);
  }, []);

  useEffect(() => {
    const recoverMoviments = JSON.parse(localStorage.getItem("Moviments"));
    setMoviments(recoverMoviments);
  }, []);

  return (
    <Container>
      <Menu />
      <h1 style={{ textAlign: "center" }}>Saldo Atual</h1>
      <TableContainer className="containerTable" component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}>Código</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>Produto</TableCell>
              <TableCell align="right" style={{ fontWeight: "bold" }}>
                Saldo atual
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.map((item) => {
              const totalInputs = moviments
                ? moviments.reduce((acc, curr) => {
                    if (
                      curr.type === "input" &&
                      curr.producSelected === item.productName
                    ) {
                      return acc + parseInt(curr.quantity);
                    }
                    return acc;
                  }, 0)
                : 0;

              const totalOutputs = moviments
                ? moviments.reduce((acc, curr) => {
                    if (
                      curr.type === "output" &&
                      curr.producSelected === item.productName
                    ) {
                      return acc + parseInt(curr.quantity);
                    }
                    return acc;
                  }, 0)
                : 0;

              const currentBalance = totalInputs - totalOutputs;

              return (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {item.sequentialId}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.productName}
                  </TableCell>
                  <TableCell align="right">{currentBalance}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

