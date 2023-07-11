import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Listing } from './components/Listing';
import { NavBar } from './components/navBar';
const pokemons = [];
pokemons.length = 151;
pokemons.fill(null);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Listing pokemons = {pokemons}></Listing>
    </ChakraProvider>
  );
}

export default App;
