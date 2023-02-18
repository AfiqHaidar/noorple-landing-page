import React from 'react'
import Navbar from './Navbar'

type LayoutProps ={
    children: React.ReactNode
}

const Front = ({children}: LayoutProps) => {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default Front