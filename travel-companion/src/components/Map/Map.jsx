import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Paper, Typeography, useMediaQuery } from '@material-ui/core'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import Rating from '@material-ui/lab'

import './Map.scss'

export default function Map() {
  //const isMobile = useMediaQuery('(min-width:600px)')

  const coordinates = { lat: 0, lng: 0 }

  return (
    <div className='map-container'>
      
      <GoogleMapReact bootstrapURLKeys={{ key: 'AIzaSyCuLJKB6QBhL-CgtbpEqlSHIT0nk4oxqiI' }}
                      defaultCenter={coordinates}
                      center={coordinates}
                      defaultZoom={14}
                      margin={[50, 50, 50, 50]}
                      options={''}
                      onChange={''}
                      onChildClick={''} >

      </GoogleMapReact>

    </div>
  )
}
