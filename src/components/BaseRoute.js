import { Box } from '@chakra-ui/react'
import React from 'react'
import { SideBar } from './SideBar'

export const BaseRoute = ({ children }) => {

  const party = [];
  party.length = 6;
  party.fill(null);
  
  return (
    <Box  
    minHeight="100vh"
    >
      <SideBar party={party} />
      <Box 
      p="32px" 
      maxW="1200px" 
      margin="auto">
        {children}
      </Box>
    </Box>

  )
}
