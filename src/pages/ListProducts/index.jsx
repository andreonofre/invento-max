import React, { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from './styles';

export const ListProducts = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const recoverListProducts = JSON.parse(localStorage.getItem("Cadastro"));
    setDataList(recoverListProducts);
  }, []);

  return (
    <Container>
      <Menu />
      <TableContainer className='containerTable' 
      // sx={{ minWidth: 650, maxWidth: 800, justifyContent: 'center', alignItems: 'center'}}  
      component={Paper}>
        <Table 
        // sx={{ minWidth: 650, maxWidth: 800 }} 
        aria-label="simple table"
        >

          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Produto</TableCell>
              <TableCell align="right">Fornecedor</TableCell>
              <TableCell align="right">Usuário</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dataList.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.sequentialId}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.productName}
                </TableCell>
                <TableCell align="right">{item.fornecedor}</TableCell>
                <TableCell align="right">{item.user}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
