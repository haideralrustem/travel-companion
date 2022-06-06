
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

      <List />
      <Map />
    </div>
  );
}

export default App;
