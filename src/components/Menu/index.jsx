import React, { useEffect, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useNavigate } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

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
  const [username, setUsername] = useState('');

  const navigate = useNavigate();


  useEffect(() => {
    // Tenta obter o nome do usuário do localStorage ao carregar o componente
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); 



  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  function handleExit () {
     // Limpa o nome do usuário do localStorage ao sair
     localStorage.removeItem('username');
    navigate("/")
  }

  // Obtém o nome de usuário armazenado no localStorage
  const loggedInUser = localStorage.getItem('username');

  const list = (
    <List sx={{ width: 250, marginTop: 4.5}}>

      <ListItemButton component={Link} to="/cadastro">
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Cadastrar Produto" />
      </ListItemButton>

      <ListItemButton component={Link} to="/entrada">
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Entrada" />
      </ListItemButton>

      <ListItemButton component={Link} to="/saida">
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Saída" />
      </ListItemButton>

      <ListItemButton component={Link} to="/saldo_atual">
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Saldo Atual" />
      </ListItemButton>

      <ListItemButton component={Link} to="/">
        <ListItemIcon>
          <MailIcon />
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
          <div>{username || 'Usuário não logado'}</div>
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



 