import React from 'react'

export const Input = ({type, onChange}) => (
  <input type={type} onChange={event => onChange(event.target.value)} />
)
