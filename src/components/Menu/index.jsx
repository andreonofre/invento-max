import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import BalanceIcon from '@mui/icons-material/Balance';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NorthSharpIcon from '@mui/icons-material/NorthSharp';
import SouthSharpIcon from '@mui/icons-material/SouthSharp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { 
  Container, 
  // StyledIframeContainer, 
  // StyledIframe,
  Content,
  User,

} from './styles';
  

export function Menu() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');

  const navigate = useNavigate();


  useEffect(() => {
    // Tenta obter o nome do usuário do localStorage ao carregar o componente
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      setName(loggedInUser);
    }
  }, []);


  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };
  
  function handleExit () {
     // Limpa o nome do usuário do localStorage ao sair
     localStorage.removeItem('loggedInUser');
    navigate("/")
  }

  const list = (
    <List sx={{ width: 250, marginTop: 4.5}}>

      <ListItemButton component={Link} to="/dashboard">
        <ListItemIcon>
          <SignalCellularAltIcon />
        </ListItemIcon>
        <ListItemText primary="DashBoard" />
      </ListItemButton>

      <ListItemButton component={Link} to="/cadastro">
        <ListItemIcon>
        <BorderColorIcon />
        </ListItemIcon>
        <ListItemText primary="Cadastrar Produto" />
      </ListItemButton>

      <ListItemButton component={Link} to="/entrada">
        <ListItemIcon>
          <NorthSharpIcon />
        </ListItemIcon>
        <ListItemText primary="Entrada" />
      </ListItemButton>

      <ListItemButton component={Link} to="/saida">
        <ListItemIcon>
          <SouthSharpIcon />
        </ListItemIcon>
        <ListItemText primary="Saída" />
      </ListItemButton>

      <ListItemButton component={Link} to="/saldo_atual">
        <ListItemIcon>
          <BalanceIcon />
        </ListItemIcon>
        <ListItemText primary="Saldo Atual" />
      </ListItemButton>

      <ListItemButton component={Link} to="/lista_produtos">
        <ListItemIcon>
          <FormatListNumberedIcon />
        </ListItemIcon>
        <ListItemText primary="Lista Produtos" />
      </ListItemButton>

      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Sair" onClick={handleExit} />
      </ListItemButton>

    </List>
  );

  return (
    <Container>
      <Content>
        <IconButton 
        className='icon-menu' 
        onClick={toggleDrawer(true)}
        edge="start" 
        color="inherit" 
        aria-label="menu"
        >
          <MenuIcon fontSize='large' />
        </IconButton>
        <h1>InventoMax</h1>
        <User>
          <div>{name}</div>
          <FontAwesomeIcon icon={faUser} fontSize={25}/>
        </User>
      </Content>
      
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>

      
      {/* IFRAME */}

      {/* <StyledIframeContainer>
        <StyledIframe title="Dash InventoMax" width="600" height="373.5" src="" frameborder="0" allowFullScreen="true" />
      </StyledIframeContainer> */}
    </Container>
  );
}



 