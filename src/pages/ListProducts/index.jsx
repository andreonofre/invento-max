import React, { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { Container, StyledButton, StyledModal, ModalContent } from './styles';
import Modal from '@mui/material/Modal';

export const ListProducts = () => {
  const [dataList, setDataList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const recoverListProducts = JSON.parse(localStorage.getItem("Cadastro")) || [];
    setDataList(recoverListProducts);
    setFilteredData(recoverListProducts);
  }, []);

  useEffect(() => {
    const filtered = dataList.filter(item =>
      item.sequentialId.toString().includes(searchTerm) || // Convertendo para string
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchTerm, dataList]);

  const handleSearch = () => {
    const filtered = dataList.filter(item =>
      item.sequentialId.toString().includes(searchTerm) || // Convertendo para string
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setFilteredData(dataList);
  };

  const openModal = (url) => {
    setImageUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <Menu />
        <h1 style={{ textAlign: 'center' }}>Lista de Produtos</h1>
      <div className='containerSearch' >
        <TextField
          label="Pesquisar"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search'
        />
        <IconButton onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
        <IconButton onClick={clearSearch}>
          <ClearIcon />
        </IconButton>
      </div>
      <TableContainer className='containerTable' component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="header" >Código</TableCell>
              <TableCell className="header" >Produto</TableCell>
              {/* <TableCell style={{ fontWeight: 'bold' }} align="right">Fornecedor</TableCell> */}
              <TableCell style={{ fontWeight: 'bold' }} align="right"></TableCell>
              <TableCell className="header" align="center">Imagem</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.sequentialId}
                </TableCell>
                <TableCell component="th" scope="row">
                  {item.productName}
                </TableCell>
                <TableCell align="right">{item.fornecedor}</TableCell>
                {/* <TableCell align="right">{item.url}</TableCell> */}
                <TableCell className="btnImage" align="center">
                  <StyledButton   onClick={() => openModal(item.url)}>Ver Imagem</StyledButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledModal open={modalOpen} onClose={closeModal}>
        <ModalContent>
          <img src={imageUrl} alt="Imagem do Produto" />
          <StyledButton className="close" onClick={closeModal}>Fechar</StyledButton>
        </ModalContent>
      </StyledModal>
    </Container>
  );
};

