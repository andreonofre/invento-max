// import React, { useEffect, useState } from 'react';
// import { Menu } from '../../components/Menu';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Container } from './styles';

// export const Balance = () => {
//   const [dataList, setDataList] = useState([]);
//   const [currentBalance, setCurrentBalance] = useState([]);
//   const [moviments, setMoviments] = useState([]);


//   useEffect(() => {
//     const recoverListProducts = JSON.parse(localStorage.getItem("Cadastro"));
//     setDataList(recoverListProducts);

//   }, []);


//   useEffect(() => {
//     const recoverMoviments = JSON.parse(localStorage.getItem("Moviments"));
//     setMoviments(recoverMoviments);

//   }, []);

//   console.log("MOVIMENTOS: ",moviments)

//   return (
//     <Container>
//       <Menu />
//       <TableContainer className='containerTable' 
//       // sx={{ minWidth: 650, maxWidth: 800, justifyContent: 'center', alignItems: 'center'}}  
//       component={Paper}>
//         <Table 
//         // sx={{ minWidth: 650, maxWidth: 800 }} 
//         aria-label="simple table"
//         >

//           <TableHead>
//             <TableRow>
//               <TableCell>Código</TableCell>
//               <TableCell>Produto</TableCell>
//               <TableCell align="right">Saldo atual</TableCell>
//             </TableRow>
//           </TableHead>

//           <TableBody>
//             {dataList.map((item) => (
//               <TableRow key={item.id}>
//                 <TableCell component="th" scope="row">
//                   {item.sequentialId}
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                   {item.productName}
//                 </TableCell>
//                 <TableCell align="right">{item.user}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Container>
//   );
// };



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

export const Balance = () => {
  const [dataList, setDataList] = useState([]);
  const [moviments, setMoviments] = useState([]);
  // const [currentBalance, setCurrentBalance] = useState([]);
  const [currentBalance, setCurrentBalance] = useState({});


  useEffect(() => {
    const recoverListProducts = JSON.parse(localStorage.getItem("Cadastro"));
    setDataList(recoverListProducts);
  }, []);


  useEffect(() => {
    const recoverMoviments = JSON.parse(localStorage.getItem("Moviments"));
    setMoviments(recoverMoviments);
  }, []);


  useEffect(() => {
    // Calcular total de entradas
    const totalInputs = moviments.reduce((acc, curr) => {
      if (curr.type === "input") {
        return acc + parseInt(curr.quantity);
      }
      return acc;
    }, 0);

    // Calcular total de saídas
    const totalOutputs = moviments.reduce((acc, curr) => {
      if (curr.type === "output") {
        return acc + parseInt(curr.quantity);
      }
      return acc;
    }, 0);

    // Calcular saldo atual
    const balance = totalInputs - totalOutputs;
    setCurrentBalance(balance);
  }, [moviments]);



  return (
    <Container>
      <Menu />
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Produto</TableCell>
              <TableCell align="right">Saldo atual</TableCell>
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
                <TableCell align="right">{currentBalance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
