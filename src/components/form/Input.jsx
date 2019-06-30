import React from 'react'

export const Input = ({type, inputFunc}) => (
  <input type={type} onChange={event => inputFunc(event.target.value)} />
)
