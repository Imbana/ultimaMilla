import React from 'react'
import Chart from '../chart/Chart'
import "./mapSm.css"

const MapSm = () => {
  return (
    <div className='mapSm'>
        <Chart  title="Grafica de datos semanal" grid dataKey="New User"/>
        <Chart  title="Grafica de datos semanal" grid dataKey="New User"/>
    </div>
  )
}

export default MapSm