import { styled } from './styles'
import React from 'react'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
})
export function App() {
  return <Button>Hello world</Button>
}
