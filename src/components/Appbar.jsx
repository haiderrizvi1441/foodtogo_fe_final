import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {HiUserCircle} from "react-icons/hi"
import {FaRocket} from "react-icons/fa"
import Searchbar from '../components/Searchbar'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {BrowserRouter, NavLink, Link} from "react-router-dom";
import AssignmentIndTwoToneIcon from '@mui/icons-material/AssignmentIndTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';

export default function Appbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="error">
        <Toolbar>
          <IconButton
            size="small"
            edge="start"
            color="inherit" 
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <ArrowBackIcon sx={{mr:3}}/>
          </IconButton>
          <Typography color="Black" variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Food To Go <Link to={"/"}><FaRocket /></Link>
          </Typography>
          <Link to={"admincenter/"}><AssignmentIndTwoToneIcon sx={{ml:2}}/>Admin Center</Link>
          <Link to={"Cart/"}><ShoppingCartTwoToneIcon sx={{ml:2, mr:0}}/></Link>
          
          <div style={{width:"50rem", display:"flex", position:"relative"}}><Searchbar/></div>
          
          <Link to={"formactive/"}><Button color="inherit">Login <HiUserCircle size={'2em'}/></Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}


