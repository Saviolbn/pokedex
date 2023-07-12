import { Box, Container, Flex, ListItem, SimpleGrid, UnorderedList } from '@chakra-ui/react'
import React from 'react'

export const SideBar = ({ party }) => {
  return (
    <UnorderedList
      listStyleType="none"
      pos="fixed"
      h="100vh"
      w="20px"
      z-index="1"
      top="50%"
    >
      {party.map((pt, index) => {
        return <ListItem
          key={index}
          bg='lightblue'
          border="1px"
          height='50px'
          width="50px">
        </ListItem>
      })}
    </UnorderedList>

  )
}
