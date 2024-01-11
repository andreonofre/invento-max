// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export function Menu() {
//   const [open, setOpen] = React.useState(false);

//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   const list = (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer}
//       onKeyDown={toggleDrawer}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       <IconButton onClick={toggleDrawer} edge="start" color="inherit" aria-label="menu">
//         <MenuIcon />
//       </IconButton>
//       <Drawer
//         anchor="left"
//         open={open}
//         onClose={toggleDrawer}
//       >
//         {list}
//       </Drawer>
//     </div>
//   );
// }


import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import { 
  Container, 
  StyledIframeContainer, 
  StyledIframe,
  Content,

} from './styles';
  

export function Menu() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

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
        <div></div>
      </Content>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>

      
      
      
      {/* IFRAME */}

      <StyledIframeContainer>
        <StyledIframe title="Dash InventoMax" width="600" height="373.5" src="" frameborder="0" allowFullScreen="true" />
      </StyledIframeContainer>
    </Container>
  );
}



 