import React from 'react'

const Luz = ({color, encendido}) => (
    <div className="circulo" style={{backgroundColor: color, opacity: encendido ? 1 : 0.25}}></div>
)

export default Luz