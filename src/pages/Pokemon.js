import { Box, Grid, GridItem, Image } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom';

export const Pokemon = () => {
  const { idPokemon } = useParams();
  return (<Box margin="auto" border='1px' h="700px" w="100%" bgColor="lightgray">

    <Grid padding="10px"
      h='100%'
      templateRows='repeat(4, 1fr)'
      templateColumns='repeat(3, 1fr)'
      gap={4}
    >
      <GridItem rowSpan={1} colSpan={1} bg='cyan' >
        <Image width="100%" src={`http://placekitten.com/${idPokemon}/100`} />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1} bg='papayawhip' >
        text
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} bg='cyan' >
        options
      </GridItem>
      <GridItem rowSpan={1} colSpan={2} bg='papayawhip' >
        text
      </GridItem>
      <GridItem rowSpan={1} colSpan={3} bg='papayawhip' >
        text
      </GridItem>
      <GridItem rowSpan={1} colSpan={3} bg='tomato' >
        prev/next
      </GridItem>
    </Grid></Box>

  )
}
