import React from 'react'
import { useState } from 'react';

export const PokemonData = () => {
  const [pokemonList, setPokemonList] = useState([{
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    stats: [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "hp"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "attack"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "defense"
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": "special-attack"
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": "special-defense"
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "speed"
      }
    ],
    types: [
      "grass", "poison"
    ],
    abilities: [
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null,
    },
    "height": 7,"weight": 69,
    id: 1
  }, {
    name: "Bulbasaur",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    stats: [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "hp"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "attack"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "defense"
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": "special-attack"
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": "special-defense"
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "speed"
      }
    ],
    types: [
      "grass", "poison"
    ],
    abilities: [
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null,
    },
    "height": 7,
    "weight": 69,
    id: 2
  },
  {
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    stats: [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "hp"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "attack"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "defense"
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": "special-attack"
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": "special-defense"
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "speed"
      }
    ],
    types: [
      "grass", "poison"
    ],
    abilities: [
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null,
    },
    "height": 7,
    "weight": 69,
    id: 3
  }, {
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    stats: [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "hp"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "attack"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "defense"
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": "special-attack"
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": "special-defense"
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "speed"
      }
    ],
    types: [
      "grass", "poison"
    ],
    abilities: [
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null,
    },
    "height": 7,
    "weight": 69,
    id: 4
  }, {
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    stats: [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "hp"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "attack"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "defense"
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": "special-attack"
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": "special-defense"
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "speed"
      }
    ],
    types: [
      "grass", "poison"
    ],
    abilities: [
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null,
    },
    "height": 7,
    "weight": 69,
    id: 5
  }, {
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    stats: [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "hp"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "attack"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "defense"
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": "special-attack"
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": "special-defense"
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "speed"
      }
    ],
    types: [
      "grass", "poison"
    ],
    abilities: [
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null,
    },
    "height": 7,
    "weight": 69,
    id: 6
  }, {
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    stats: [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "hp"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "attack"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "defense"
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": "special-attack"
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": "special-defense"
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "speed"
      }
    ],
    types: [
      "grass", "poison"
    ],
    abilities: [
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null,
    },
    "height": 7,
    "weight": 69,
    id: 7
  }, {
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    stats: [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "hp"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "attack"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "defense"
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": "special-attack"
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": "special-defense"
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "speed"
      }
    ],
    types: [
      "grass", "poison"
    ],
    abilities: [
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null,
    },
    "height": 7,
    "weight": 69,
    id: 8
  }, {
    name: "Bulbasaur",
    image: "https://www.pngmart.com/files/11/Pokemon-Bulbasaur-PNG-Pic.png",
    stats: [
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "hp"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "attack"
      },
      {
        "base_stat": 49,
        "effort": 0,
        "stat": "defense"
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": "special-attack"
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": "special-defense"
      },
      {
        "base_stat": 45,
        "effort": 0,
        "stat": "speed"
      }
    ],
    types: [
      "grass", "poison"
    ],
    abilities: [
      {
        "ability": {
          "name": "overgrow",
          "url": "https://pokeapi.co/api/v2/ability/65/"
        },
        "is_hidden": false,
        "slot": 1
      },
      {
        "ability": {
          "name": "chlorophyll",
          "url": "https://pokeapi.co/api/v2/ability/34/"
        },
        "is_hidden": true,
        "slot": 3
      }
    ],
    "sprites": {
      "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
      "back_female": null,
      "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png",
      "back_shiny_female": null,
      "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      "front_female": null,
      "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png",
      "front_shiny_female": null,
    },
    "height": 7,
    "weight": 69,
    id: 9
  }]);
  return { pokemonList, setPokemonList }
}
