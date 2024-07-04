import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { brown } from '@mui/material/colors';


const Header: React.FC = () => {
    return (
        <Box>
            <AppBar position="static" sx={{backgroundColor: brown[400]}}>
                <Toolbar>
                <Typography variant="h6" component="div">
                    Home
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;