import React from 'react'
import './backdrop.css'

const Backdrop = props => (
    <div className='backdrop' onClick={props.close}/>
)

export default Backdrop