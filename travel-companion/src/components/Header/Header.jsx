import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import {AppBar, Toolbar, Typography , InputBase , Box } from '@material-ui/core';
import { styled, alpha } from '@mui/material/styles';
import {IconButton, TextField} from "@mui/material";
import SearchIcon from '@material-ui/icons/Search';


import './Header.css'

export default function Header() {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
         marginLeft: '100%',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));


    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
              width: '20ch',
            },
          },
        },
      }));


    
    return (
        <div >
            <Box sx={{ }}>
                <AppBar position="static">
                    <Toolbar className='mui-toolbar'>

                        <Typography variant="h5" noWrap component="div" 
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                            Travel Companion
                        </Typography>

                        
                        <div className='right-most-div'>
                            <Typography variant="h5" >
                                    Expolre new places ....
                            </Typography>
                            <Search>
                            
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>

                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>


                        </div>
                       

                    </Toolbar>
                </AppBar>
            </Box>
                
            
        </div>
    )
    }
