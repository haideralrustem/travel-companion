import React, { useState } from 'react'
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

import './List.scss'

export default function List() {


  const [type, setType] = useState('restaurants');


  const handleSelectChoice = (e) => {
      setType(e.target.value)
  }

  return (
    <div className='container'>
        <Typography variant='h4'>
            Restaurants , hotels and attractions around you!
        </Typography>

        <FormControl className='form-control'>
          <div className='marginBottom'>Select form list the type of location:</div>
          <Select value={type} onChange={handleSelectChoice}>
            <MenuItem value='restaurants'>Restaurants</MenuItem>
            <MenuItem value='hotels'>Hotels</MenuItem>
            <MenuItem value='attractions'>Attractions</MenuItem>
          </Select>
        </FormControl>
    </div>
  )
}
