
import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core'

import './App.css';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';


function App() {
  return (
    <div>
            
      <Header />

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <List />
        </Grid>

        <Grid item xs={8}>
          <Map />
        </Grid>

      </Grid>

     
      
    </div>
  );
}

export default App;
