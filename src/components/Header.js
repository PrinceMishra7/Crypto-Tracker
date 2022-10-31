import React from 'react'
import { Select,MenuItem,AppBar,Container,Toolbar,Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom'
const Header = () => {
  let navigate = useNavigate();
 
  function handleClick() {
    navigate("/");
  }
  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>

   <AppBar color='transparent' position='static'>
    <Container>
        <Toolbar>
            <Typography onClick={handleClick} flexGrow={1} sx={{
            color:"gold",
            fontFamily:"'Montserrat', sans-serif",
            fontWeight:"bold",
            cursor:"pointer"
        }
            }>
                Crypto Tracker
            </Typography>
      <Select variant='outlined' sx={{minWidth: 100,height:40,marginRight:15,}} size="small">
        <MenuItem value={"USD"}>USD</MenuItem>
        <MenuItem value={"INR"}>INR</MenuItem>
      </Select>
   

        </Toolbar>
    </Container>
   </AppBar>
    </ThemeProvider>
  )
}

export default Header
